// app/api/events/luma/[eventId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// TypeScript interfaces for type safety
interface LumaEventResponse {
  event: {
    api_id: string;
    name: string;
    start_at: string;
    end_at: string;
    timezone?: string;
    location_type: 'online' | 'offline' | 'hybrid';
    cover_url?: string;
    url: string;
    geo_address_info?: {
      full_address?: string;
      city?: string;
      region?: string;
      address?: string;
    };
    virtual_info?: {
      raw_join_url?: string;
    };
  };
  description_mirror?: {
    content: Array<{
      type: string;
      content?: Array<{
        type: string;
        text?: string;
      }>;
    }>;
  };
  guest_count?: number;
  ticket_info?: unknown;
  hosts?: Array<{
    name: string;
    avatar_url?: string;
  }>;
}

interface EventDetails {
  title: string;
  description: string;
  event_date: string;
  event_time: string;
  is_online: boolean;
  imageUrl: string;
  location: string;
  meeting_app: string;
  status: string;
  thirdPartyLink: string;
  thirdPartyEventId: string;
  timezone?: string;
  endDate: string;
  endTime: string;
  guestCount: number;
  ticketInfo?: unknown;
  hosts: Array<{
    name: string;
    avatar?: string;
  }>;
}

interface ApiResponse {
  success: boolean;
  data?: EventDetails;
  message?: string;
}

// Validation schema using Zod
const eventIdSchema = z.string().startsWith('evt-', {
  message: 'Invalid event ID format. Event ID should start with "evt-"'
});

// Helper function to extract meeting app from URL
function extractMeetingApp(url: string): string {
  if (!url) return '';
  
  const urlLower = url.toLowerCase();
  if (urlLower.includes('zoom')) return 'Zoom';
  if (urlLower.includes('meet.google') || urlLower.includes('google.com/meet')) return 'Google Meet';
  if (urlLower.includes('teams.microsoft') || urlLower.includes('teams.live')) return 'Microsoft Teams';
  if (urlLower.includes('webex')) return 'Webex';
  if (urlLower.includes('goto')) return 'GoToMeeting';
  
  return 'Other';
}

// Helper function to map Luma data to required format
function mapLumaEventData(lumaData: LumaEventResponse): EventDetails {
  const event = lumaData.event;
  
  // Extract description from description_mirror
  let description = '';
  if (lumaData.description_mirror?.content) {
    description = lumaData.description_mirror.content
      .map(block => {
        if (block.type === 'paragraph' && block.content) {
          return block.content
            .filter(item => item.type === 'text')
            .map(item => item.text || '')
            .join('');
        }
        return '';
      })
      .filter(text => text.length > 0)
      .join('\n\n');
  }

  // Format date and time
  const startDate = new Date(event.start_at);
  const endDate = new Date(event.end_at);
  
  // Format date as YYYY-MM-DD
  const eventDate = startDate.toISOString().split('T')[0];
  
  // Format time as HH:MM (local time based on event timezone)
  const eventTime = startDate.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    timeZone: event.timezone || 'UTC'
  });

  // Determine location and if it's online
  const isOnline = event.location_type === 'online' || event.location_type === 'hybrid';
  let location = '';
  let meetingApp = '';

  if (isOnline) {
    location = 'Online Event';
    // Check if there's virtual meeting info
    if (event.virtual_info?.raw_join_url) {
      meetingApp = extractMeetingApp(event.virtual_info.raw_join_url);
    }
  } else if (event.geo_address_info) {
    // Use the full address or fall back to city, region
    location = event.geo_address_info.full_address || 
               `${event.geo_address_info.city}, ${event.geo_address_info.region}` ||
               event.geo_address_info.address || 
               'Location TBD';
  }

  // Generate third-party link using the URL from the event
  const thirdPartyLink = `https://lu.ma/${event.url}`;

  return {
    title: event.name || 'Untitled Event',
    description: description || 'No description available',
    event_date: eventDate,
    event_time: eventTime,
    is_online: isOnline,
    imageUrl: event.cover_url || '',
    location: location,
    meeting_app: meetingApp,
    status: 'active',
    thirdPartyLink: thirdPartyLink,
    thirdPartyEventId: event.api_id,
    timezone: event.timezone,
    endDate: endDate.toISOString().split('T')[0],
    endTime: endDate.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      timeZone: event.timezone || 'UTC'
    }),
    guestCount: lumaData.guest_count || 0,
    ticketInfo: lumaData.ticket_info,
    hosts: lumaData.hosts?.map(host => ({
      name: host.name,
      avatar: host.avatar_url
    })) || []
  };
}

// GET handler for the API route
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ eventId: string }> }
): Promise<NextResponse<ApiResponse>> {
  try {
   const params = await context.params
    const { eventId } = params
    console.log("Event id")
    
    // Validate event ID using Zod
    const validationResult = eventIdSchema.safeParse(eventId);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: validationResult.error.errors[0].message,
          real:"rak",
        },
        { status: 400 }
      );
    }

    // Make request to Luma API with proper error handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const lumaResponse = await fetch(
        `https://api.lu.ma/event/get?event_api_id=${eventId}`,
        {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': 'application/json',
          },
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!lumaResponse.ok) {
        if (lumaResponse.status === 404) {
          return NextResponse.json(
            {
              success: false,
              message: 'Event not found. Please check the event ID.'
            },
            { status: 404 }
          );
        }
        
        throw new Error(`HTTP error! status: ${lumaResponse.status}`);
      }

      const lumaData: LumaEventResponse = await lumaResponse.json();
      
      // Extract and map the required fields
      const eventDetails = mapLumaEventData(lumaData);
      
      return NextResponse.json({
        success: true,
        data: eventDetails
      });

    } catch (fetchError) {
      clearTimeout(timeoutId);
      
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        return NextResponse.json(
          {
            success: false,
            message: 'Request timeout. Please try again.'
          },
          { status: 408 }
        );
      }
      
      throw fetchError;
    }

  } catch (error) {
    console.error('Error fetching Luma event:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch event details. Please try again later.'
      },
      { status: 500 }
    );
  }
}

// Export the mapLumaEventData function for potential reuse
export { mapLumaEventData };