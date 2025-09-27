import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projectList = [
    { title: "Business Startup", description: "Design & Development", imgurl: "https://media.istockphoto.com/id/1385970223/photo/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=7KQ4ADXJVVpsW23a4kruYYkuRqCFPeXyn8_dZDt3IUo=", category: "backend" },
    { title: "Digital Marketing", description: "SEO & Content Strategy", imgurl: "https://media.istockphoto.com/id/1652679812/photo/digital-marketing-business-technology-website-advertisement-email-social-media-network-seo.webp?a=1&b=1&s=612x612&w=0&k=20&c=J8PY0VM1n_Sw-iUFQOm5AHE57CGsfj_o4-M4AMEmygw=", category: "uiux" },
    { title: "Mobile App", description: "iOS & Android Development", imgurl: "https://media.istockphoto.com/id/981901868/photo/cloud-computing.webp?a=1&b=1&s=612x612&w=0&k=20&c=X8GEgCshYc-GXyiu6ag_mB0l5gV6O6-anGxbBdr8lO0=", category: "uiux" },
    { title: "E-Commerce", description: "Online Store Solutions", imgurl: "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RSUyMENvbW1lcmNlfGVufDB8fDB8fHww", category: "backend" },
    { title: "Brand Identity", description: "Logo & Graphic Design", imgurl: "https://media.istockphoto.com/id/1400557658/photo/brand-management-branding-or-rebranding-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=MssMy9oLZMz3wd42orPMp0232p3pxlwpUOlTDIUKGPI=", category: "uiux" },
    { title: "Web Hosting", description: "Secure & Scalable Servers", imgurl: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2ViJTIwSG9zdGluZ3xlbnwwfHwwfHx8MA%3D%3D", category: "backend" },
    { title: "UI/UX Design", description: "User-Centered Interfaces", imgurl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VUklMkZVWCUyMERlc2lnbnxlbnwwfHwwfHx8MA%3D%3D", category: "uiux" },
    { title: "Cloud Solutions", description: "Migration & Integration", imgurl: "https://media.istockphoto.com/id/2195043685/photo/internet-infrastructure-concept-abstract-technology-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=H4QNVy5uSb5UeHAcMw7i_4NL7jqiyfoNRYl_qNHY_Bw=", category: "backend" },
    { title: "Cyber Security", description: "Risk Assessment & Protection", imgurl: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3liZXIlMjBTZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D", category: "backend" },
    { title: "Data Analytics", description: "Insights & Business Intelligence", imgurl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERhdGElMjBBbmFseXRpY3N8ZW58MHx8MHx8fDA%3D", category: "backend" }
  ];

  const filterProjects = (category) => {
    if (category === "all") return projectList;
    return projectList.filter(project => project.category === category);
  };

  const categories = [
    { key: "all", label: "All" },
    { key: "uiux", label: "UI/UX" },
    { key: "backend", label: "Backend" },
  ];

  return (
    <section className='project' id='projects'>
      <Container fluid>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Here are some of my featured works across web, design, and technology.
            </p>

            <Tab.Container id='projects-tabs' defaultActiveKey='all'>
              <Nav variant="pills" className="justify-content-center mb-4">
                {categories.map(cat => (
                  <Nav.Item key={cat.key}>
                    <Nav.Link eventKey={cat.key}>{cat.label}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              <Tab.Content>
                {categories.map(cat => (
                  <Tab.Pane eventKey={cat.key} key={cat.key}>
                    <Row>
                      {filterProjects(cat.key).map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img className='background-image-right' alt="" />
    </section>
  )
}

export default Projects
