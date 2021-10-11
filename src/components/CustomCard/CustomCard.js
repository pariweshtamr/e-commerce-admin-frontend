import React from 'react'
import { Card } from 'react-bootstrap'
import './CustomCard.style.css'

const CustomCard = ({ children, icon }) => {
  return (
    <Card className="custom-card text-center mt-3">
      <div className="card-top mb-3">
        <i className={icon}></i>
      </div>
      <hr />
      <div className="card-data">{children}</div>
    </Card>
  )
}

export default CustomCard
