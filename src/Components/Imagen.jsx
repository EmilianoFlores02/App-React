import { Modal, Button } from 'react-bootstrap';

/**
 * Componente Imagen: Modal que muestra una imagen de gato en tamaño completo
 * Permite ver la imagen ampliada y abrirla en una nueva pestaña
 * 
 * @param {boolean} mostrar - Controla si el modal está visible o no
 * @param {function} cerrar - Función que se ejecuta para cerrar el modal
 * @param {object} gato - Objeto con la información del gato (URL, raza, etc.)
 */
function Imagen({ mostrar, cerrar, gato }) {
  
  /**
   * Función que abre la imagen en una nueva pestaña del navegador
   * Usa window.open para abrir la URL en una nueva ventana
   */
  const abrirImagen = () => {
    // Verifica que exista el gato y su URL antes de abrir
    if (!gato || !gato.url) return;
    // Abre la URL en una nueva pestaña (_blank)
    window.open(gato.url, '_blank');
  };

  // Si no hay gato, no renderiza nada (evita errores)
  if (!gato) return null;

  return (
    // Modal de Bootstrap: ventana emergente centrada
    <Modal show={mostrar} onHide={cerrar} size="lg" centered>
      {/* Encabezado del modal con título y botón de cerrar */}
      <Modal.Header closeButton>
        <Modal.Title>
          {/* Muestra el nombre de la raza si está disponible, sino "Gato" */}
          {gato.breeds && gato.breeds.length > 0 ? gato.breeds[0].name : 'Gato'}
        </Modal.Title>
      </Modal.Header>
      
      {/* Cuerpo del modal: contiene la imagen */}
      <Modal.Body style={{ textAlign: 'center', padding: '20px' }}>
        <img 
          src={gato.url} // URL de la imagen
          alt={gato.breeds && gato.breeds.length > 0 ? gato.breeds[0].name : 'Gato'}
          style={{ 
            maxWidth: '100%', // No más ancho que el contenedor
            maxHeight: '70vh', // No más alto que 70% de la altura de la ventana
            borderRadius: '8px',
            objectFit: 'contain' // Mantiene proporción sin recortar
          }}
        />
        {/* Muestra descripción de la raza si está disponible */}
        {gato.breeds && gato.breeds.length > 0 && gato.breeds[0].description && (
          <p style={{ marginTop: '15px', color: '#666', fontSize: '0.95em' }}>
            {gato.breeds[0].description}
          </p>
        )}
      </Modal.Body>
      
      {/* Pie del modal: botones de acción */}
      <Modal.Footer>
        {/* Botón para cerrar el modal */}
        <Button variant="secondary" onClick={cerrar}>
          Cerrar
        </Button>
        {/* Botón para abrir la imagen en nueva pestaña */}
        <Button variant="primary" onClick={abrirImagen}>
          Abrir Imagen
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Imagen;

