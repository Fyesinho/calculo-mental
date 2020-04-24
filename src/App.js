import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TableSumRes from "./TableSumRes";

function App() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className={'text-center'}>
                        Sumas y restas de Sr. Coso
                    </h1>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col className={'text-left'}>
                    <h5>
                        Nombre:
                    </h5>
                </Col>
                <Col>
                    <h5>
                        Fecha:
                    </h5>
                </Col>
                <Col>
                    <h5>
                        Cantidad 1 minuto:
                    </h5>
                </Col>
                <Col>
                    <h5>
                        Tiempo 60 ejercicios:
                    </h5>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <TableSumRes/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
