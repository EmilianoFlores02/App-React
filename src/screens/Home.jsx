import { useEffect, useState } from 'react';
import Listado from '../Components/Listado';

/**
 * Pantalla Home: Muestra gatos aleatorios desde The Cat API
 * Esta es la pantalla principal que se carga al iniciar la aplicación
 */
function Home() {
  // useState: Guarda la lista de gatos obtenidos de la API
  const [gatos, setGatos] = useState([]);
  // useState: Indica si está cargando datos (para mostrar mensaje de carga)
  const [cargando, setCargando] = useState(false);

  /**
   * useEffect: Se ejecuta una sola vez al cargar el componente (array vacío [])
   * Hace una petición a The Cat API para obtener 10 imágenes aleatorias de gatos
   */
  useEffect(() => {
    // Función asíncrona para cargar los gatos
    const cargar = async () => {
      setCargando(true); // Activa el indicador de carga
      try {
        // Hace petición GET a la API de The Cat API
        const res = await fetch(
          'https://api.thecatapi.com/v1/images/search?limit=10&size=med&mime_types=jpg,png'
        );
        // Convierte la respuesta a formato JSON
        const data = await res.json();
        // Guarda los gatos en el estado (si hay datos, sino guarda array vacío)
        setGatos(data || []);
      } catch (e) {
        // Si hay error, lo muestra en consola y guarda array vacío
        console.error('Error cargando gatos', e);
        setGatos([]);
      } finally {
        // Siempre desactiva el indicador de carga (éxito o error)
        setCargando(false);
      }
    };
    cargar(); // Ejecuta la función de carga
  }, []); // Array vacío = se ejecuta solo una vez al montar el componente

  return (
    <div className="pantalla">
      <h3>Inicio</h3>
      <p>Gatos aleatorios para alegrar tu día.</p>
      {/* Muestra "Cargando..." mientras carga, sino muestra el listado de gatos */}
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <Listado 
          busqueda={false} // Indica que NO es una búsqueda, son gatos aleatorios
          total={gatos.length} // Total de gatos obtenidos
          arreglo={gatos} // Array con los datos de los gatos
        />
      )}
    </div>
  );
}

export default Home;

