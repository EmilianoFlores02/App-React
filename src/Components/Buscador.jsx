import {Form,InputGroup} from 'react-bootstrap';

/**
 * Componente Buscador: Campo de texto para buscar razas de gatos
 * 
 * @param {function} setBusquedaTexto - Función que actualiza el estado del texto de búsqueda
 *                                      Se ejecuta cada vez que el usuario escribe
 */
function Buscador({setBusquedaTexto}){
    return(
        <div className="Buscador">
          {/* Grupo de input de Bootstrap con etiqueta */}
          <InputGroup size="lg">
            {/* Etiqueta del buscador */}
            <InputGroup.Text id="inputGroup-sizing-lg">Buscador</InputGroup.Text>
            {/* Campo de texto donde el usuario escribe */}
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder='¿Qué raza de gato quieres buscar?'
              // onChange: Se ejecuta cada vez que el usuario escribe algo
              // Actualiza el estado en el componente padre con el nuevo valor
              onChange={(e) => setBusquedaTexto(e.target.value)}
            />
          </InputGroup>
        </div>
    );
}

export default Buscador;