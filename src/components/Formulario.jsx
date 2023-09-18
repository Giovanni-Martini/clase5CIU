import React, { Fragment, useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

const Formulario = ({agregarSocio}) => {

    //Creo un socio vacío con un state
    const [socio, editarSocio] = useState({
        nombre:"",
        dni:""
    })

    //Creamos un hook de estado para el error en el formulario
    const [error, setError] = useState(false);

    //Extraer los valores
    const {nombre, dni} = socio;

    //Recolectar lo que el usuario escribe en el formulario
    const handleChange = (e) => {
        //console.log(e.target.value)
        editarSocio({
            ...socio,
            [e.target.name]: e.target.value
        });
    };

    //Función que se ejecuta cuando enviamos el formulario
    const submitForm = (e) => {
        //console.log("Formulario enviado");
        e.preventDefault();

        //Validar el formulario
        if(nombre.trim() === '' || dni.trim() === ''){
            setError(true);
            return;
        }

        //Lógica para mensaje de error (quitar)
        setError(false);

        //Ponerle un id al socio
        socio.id = uuid();
        console.log(socio);

        //Guardar el socio
        agregarSocio(socio);

        //Limpiar el formulario
        editarSocio({
            nombre:"",
            dni:""
        });
    };

    return ( 
        <Fragment>
            <h3 className="text-center">Formulario de ingreso</h3>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre completo"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre} />
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Label>DNI:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Sin puntos ni espacios"
                        name="dni"
                        onChange={handleChange} 
                        value={dni} />
                </Form.Group>

                <Button 
                    className="mt-2"
                    variant="success" 
                    type="submit">
                    Ingresar socio
                </Button>

                </Form>
                {
                    error
                    ? <h4>Completá los campos</h4>
                    : null
                }
        </Fragment>
     );
}
 
export default Formulario;