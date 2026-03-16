import { ImageResponse } from 'next/og'

export const alt = 'FGPC Nagercoil | Full Gospel Pentecostal Church'
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
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #3E3E3E, #222831)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <img
          src="https://fgpcnagercoil.com/header/fgpc_nagercoil.png"
          alt="FGPC Logo"
          style={{
            width: '200px',
            height: '200px',
            marginBottom: '40px',
            borderRadius: '20px',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '64px', fontWeight: 'bold' }}>FGPC NAGERCOIL</span>
          <span style={{ fontSize: '32px', marginTop: '10px', color: '#DEDEDE' }}>
            Full Gospel Pentecostal Church
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
