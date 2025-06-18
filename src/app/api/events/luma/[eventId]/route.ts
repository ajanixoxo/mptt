import { NextRequest, NextResponse } from 'next/server';
import { 
  eventIdSchema, 
  mapLumaEventData, 
  type LumaEventResponse 
} from '@/utils/luma-utils';

// GET handler for the API route
export async function GET( 
  request: NextRequest, 
  context: { params: Promise<{ eventId: string }> }
) {
  try {
    const params = await context.params;
    const { eventId } = params;
    console.log("Event id:", eventId);

    // Validate event ID using Zod
    const validationResult = eventIdSchema.safeParse(eventId);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: validationResult.error.errors[0].message,
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