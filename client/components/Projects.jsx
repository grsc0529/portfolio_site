import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
//Carousels
import BootketListCarousel from './projects_components/BootketListCarousel';
import SmoveCarousel from './projects_components/SmoveCarousel';

const Projects = () => (
    <>
        <h1>Projects</h1>
        <CardDeck>
            <Card>
                <SmoveCarousel />
                <Card.Body>
                    <Card.Title>Smove</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <BootketListCarousel />
                <Card.Body>
                    <Card.Title>Bootket List</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="./photos/background.jpg" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    </>
);

export default Projects;