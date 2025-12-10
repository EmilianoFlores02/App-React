/**
 * Componente Listado: Muestra una lista de imágenes de gatos en formato de cuadrícula
 * 
 * @param {boolean} busqueda - Indica si es una búsqueda (true) o gatos aleatorios (false)
 * @param {number} total - Número total de resultados
 * @param {array} arreglo - Array con los datos de los gatos (imágenes)
 * @param {function} onImagenClick - Función que se ejecuta al hacer clic en una imagen
 * @param {object} infoRaza - Información de la raza (nombre y descripción) cuando hay búsqueda
 */
function Listado({busqueda, total, arreglo, onImagenClick, infoRaza}){
    return(
        <div className="Lista">
           {/* Muestra diferentes mensajes según si es búsqueda o gatos aleatorios */}
           {
                busqueda === false
                    ? // Si NO es búsqueda (gatos aleatorios)
                    <div>
                        <h3>Este sitio web te mostrará imágenes aleatorias de gatos para alegrar tu día</h3>
                        <p style={{color: '#666', fontSize: '1.1em', marginTop: '10px'}}>
                            Busca por raza de gato. Ejemplos: <strong>Persian</strong>, <strong>Siamese</strong>, <strong>Maine Coon</strong>, <strong>British Shorthair</strong>, <strong>Ragdoll</strong>, <strong>Bengal</strong>, <strong>Scottish Fold</strong>, <strong>Sphynx</strong>
                        </p>
                    </div>
                    : // Si SÍ es búsqueda
                    <div>
                        <h3>{total} resultados de búsqueda</h3>
                        {/* Muestra la descripción de la raza solo una vez cuando hay búsqueda */}
                        {infoRaza && infoRaza.description && (
                            <p style={{color: '#666', fontSize: '1em', marginTop: '10px', maxWidth: '800px', margin: '10px auto', textAlign: 'left', padding: '0 20px'}}>
                                {infoRaza.description}
                            </p>
                        )}
                    </div>
            }

            {/* Contenedor de la cuadrícula de imágenes */}
            <div className="Lista-contenido">
                {
                    // map: Recorre cada gato en el array y crea una tarjeta por cada uno
                    arreglo.map((gato, i) => {
                        return (
                            <div 
                                className="Lista-gato" 
                                key={gato.id || i} // key única para React (usa ID del gato o índice)
                                onClick={() => onImagenClick && onImagenClick(gato)} // Al hacer clic, ejecuta la función pasada como prop
                            >
                                {/* Imagen del gato */}
                                <img 
                                    width='100%' 
                                    src={gato.url} // URL de la imagen desde la API
                                    alt={gato.breeds && gato.breeds.length > 0 ? gato.breeds[0].name : 'Gato'} // Texto alternativo
                                    style={{objectFit: 'cover', borderRadius: '8px'}}
                                />
                                {/* Muestra información de la raza solo si NO es búsqueda (para evitar repetición) */}
                                {!busqueda && gato.breeds && gato.breeds.length > 0 && (
                                    <div style={{padding: '10px'}}>
                                        <h5>{gato.breeds[0].name}</h5>
                                        <p style={{fontSize: '0.9em', color: '#666'}}>{gato.breeds[0].description || ''}</p>
                                    </div>
                                )}
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}


export default Listado;