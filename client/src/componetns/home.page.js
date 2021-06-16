import React from 'react';
import {Direct} from "./content.page"
import { Container, Card, Row, InputGroup, FormControl, Button} from "react-bootstrap";
export class HomePage extends React.Component{
    render(){
        return(
            <Container>
                <Card  bg="dark" text="white" className="mt-3">
                    <Card.Header>Nueva Carpeta</Card.Header>
                    <Card.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                        className="bg-dark text-white"
                        placeholder="Nombre de la carpeta"
                        aria-label="Nombre de su carpeta"
                        aria-describedby="basic-addon2"
                        />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Crear!</Button>
                            </InputGroup.Append>
                    </InputGroup>
                    </Card.Body>
                </Card>
                <Button variant="info" size="lg" className="mt-4 w-100" block>
                    Subir Archivo            
                </Button>
                <Direct/>
            </Container>
        )
    }
}