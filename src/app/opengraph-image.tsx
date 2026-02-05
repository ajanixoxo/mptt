import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'MyPath2Tech - Empowering the next generation of tech leaders'
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
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
                    {/* Embedded Logo SVG scaled up */}
                    <svg width="120" height="100" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 30 }}>
                        <path d="M0 4C0 1.79086 1.79086 0 4 0H7V16.5C7 18.433 5.433 20 3.5 20C1.567 20 0 18.433 0 16.5V4Z" fill="#D6F134" />
                        <path d="M20 0C22.2091 0 24 1.79086 24 4V7H8V0L20 0Z" fill="#F9C23A" />
                        <path d="M8 8H15V20H12C9.79086 20 8 18.2091 8 16V8Z" fill="#FF6A5C" />
                        <path d="M17 8H24V20H21C18.7909 20 17 18.2091 17 16V8Z" fill="#704FE6" />
                    </svg>
                    <div style={{ color: 'white', fontSize: 80, fontWeight: 'bold' }}>Mypath2tech</div>
                </div>
                <div style={{ color: '#A0A0A0', fontSize: 36, textAlign: 'center', maxWidth: 800 }}>
                    Empowering the next generation of tech leaders through accessible, high-quality computer science education.
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: 40,
                    display: 'flex',
                    alignItems: 'center',
                    color: '#704FE6',
                    fontSize: 24,
                    fontWeight: 600
                }}>
                    mypath2tech.ca
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
