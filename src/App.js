import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Socio from './components/Socio';

function App() {

  //Generamos un state vacío con los socios del gym
  const [asociados, editarAsociados] = useState([]);

  //Creamos una función para recibir un socio nuevo y agregarlo
  //a la lista de asociados
  const agregarSocio = (socio) => {
    editarAsociados([
      ...asociados,
      socio
    ])
  };

  //Función para borrar el socio
  //No se olviden el id como parámetro
  const borrarSocio = (id) => {
    const nuevosSocios = asociados.filter(socio => socio.id !== id);
    editarAsociados(nuevosSocios);
  };

  //Función para modificar un socio
  const modificarSocio = (id) => {
    //Filtrar y quedarte con el usuario a modificar

    //Modificarle los datos al usuario filtrado
    
    //Actualizar la lista de asociados con el socio modificado

  };

  return (
    <div>
      <Container>
        <Row className="m-5">
          <Col><h1 className="text-center titulo">Gimnasio Unahur</h1></Col>
        </Row>
        <Row>
          <Col className="mb-4" md>
            <Formulario
              agregarSocio={agregarSocio}/>
          </Col>
          <Col md>
            <h3 className="text-center">Lista de asociados</h3>
            {
              asociados.map( socio => 
                  <Socio
                    socio={socio}
                    key={socio.id}
                    borrarSocio={borrarSocio}
                  />
                )
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;