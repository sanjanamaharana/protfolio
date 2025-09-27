import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({ title, description, imgurl }) => {
  return (
    <Col xs={6} sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgurl} alt={title} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard
