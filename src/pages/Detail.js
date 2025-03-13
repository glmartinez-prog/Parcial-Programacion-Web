import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import '../assets/styles.css'; // Asegúrate de importar los estilos

function Detail() {
  const [menuData, setMenuData] = useState({ carousel: [], items: [] });

  useEffect(() => {
    fetch('/assets/menuData.json')
      .then(response => response.json())
      .then(data => setMenuData(data))
      .catch(error => console.error('Error al cargar el menú:', error));
  }, []);

  return (
    <Container className="detail-container">
      {/* Encabezado */}
      <div className="menu-header">
        <h1>MENU</h1>
        <img src="/assets/menu-icon.png" alt="Menu Icon" className="menu-icon"/>
      </div>

      {/* Carrusel de imágenes */}
      <Carousel className="menu-carousel">
        {menuData.carousel.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Lista de productos */}
      <Row className="menu-items">
        {menuData.items.map((item, index) => (
          <Col key={index} md={3} className="text-center">
            <Card className="menu-card">
              <Card.Img variant="top" src={item.image} className="menu-image"/>
              <Card.Body>
                <Card.Title className="menu-title">{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Detail;

