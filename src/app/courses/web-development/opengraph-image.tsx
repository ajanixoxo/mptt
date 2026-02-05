import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Web Development Course - MyPath2Tech'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a0a0a', // Dark background
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    padding: 80,
                    position: 'relative',
                }}
            >
                {/* Background Accent */}
                <div style={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 600,
                    height: 600,
                    background: '#704FE6',
                    borderRadius: '50%',
                    opacity: 0.2,
                    filter: 'blur(100px)',
                }} />

                {/* Logo Top Left */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 60 }}>
                    <svg width="60" height="50" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 20 }}>
                        <path d="M0 4C0 1.79086 1.79086 0 4 0H7V16.5C7 18.433 5.433 20 3.5 20C1.567 20 0 18.433 0 16.5V4Z" fill="#D6F134" />
                        <path d="M20 0C22.2091 0 24 1.79086 24 4V7H8V0L20 0Z" fill="#F9C23A" />
                        <path d="M8 8H15V20H12C9.79086 20 8 18.2091 8 16V8Z" fill="#FF6A5C" />
                        <path d="M17 8H24V20H21C18.7909 20 17 18.2091 17 16V8Z" fill="#704FE6" />
                    </svg>
                    <div style={{ color: 'white', fontSize: 36, fontWeight: 'bold' }}>Mypath2tech</div>
                </div>

                {/* Main Title */}
                <div style={{
                    color: 'white',
                    fontSize: 90,
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: 20,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em'
                }}>
                    Web <br />
                    Development
                </div>

                {/* Subtitle / Tag */}
                <div style={{
                    color: '#D6F134', // Using accent color from logo
                    fontSize: 40,
                    fontWeight: 600,
                    marginTop: 10
                }}>
                    Become a Full-Stack Developer
                </div>

                {/* Visual Decoration / Code Snippet Hint */}
                <div style={{
                    position: 'absolute',
                    bottom: 60,
                    right: 80,
                    display: 'flex',
                    alignItems: 'center',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: 16,
                    padding: '20px 40px',
                    color: '#A0A0A0',
                    fontSize: 24,
                    fontFamily: 'monospace'
                }}>
                    &lt;Code /&gt;
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
