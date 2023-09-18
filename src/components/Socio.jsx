import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const Socio = ({ socio, borrarSocio }) => {
    return (
        <Fragment>
            <span className="badge bg-success m-1">
                <p style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>Socio: {socio.id}</p>
                <p style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>Nombre: {socio.nombre}</p>
                <p style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>DNI: {socio.dni}</p>
                <Button
                    variant="light"
                    onClick={() => borrarSocio(socio.id)}
                >Borrar</Button>
            </span>
        </Fragment>
    );
}

export default Socio;