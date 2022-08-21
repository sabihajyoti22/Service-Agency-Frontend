import React from 'react'

import { Card } from 'react-bootstrap'
import { AiOutlineCloudServer } from 'react-icons/ai';

export default function SeviceCard({ services }) {
  const { serviceName, serviceDesc } = services

  return (
    <a href="/order" onClick={() => { window.sessionStorage.setItem("service", serviceName) }}>
      <Card className='service-card p-2 header-card mb-3'>
        <Card.Body className='text-center'>
          <AiOutlineCloudServer className='icons' />
          <h4>{serviceName}</h4>
          <p className='opacity-75'>{serviceDesc}</p>
        </Card.Body>
      </Card>
    </a>

  )
}
