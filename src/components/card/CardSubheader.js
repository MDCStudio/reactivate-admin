import React from 'react'

function CardSubheader({ children }) {
  return (
    <div style={{
        display: 'flex',
        // padding: 16,
        flexWrap: 'wrap',
        flex: 1,
        // backgroundColor: '#f7f9fc',
        justifyContent: 'space-between',
        padding: '1.5rem 4rem 1rem',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderLeft: 'none',
        borderRight: 'none',
      }}>
      {children}
    </div>
  )
}

export default CardSubheader
