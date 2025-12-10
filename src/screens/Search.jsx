import { useEffect, useState } from 'react';
import Buscador from '../Components/Buscador';
import Listado from '../Components/Listado';

/**
 * Pantalla Search: Permite buscar gatos por raza específica
 * Usa The Cat API para buscar razas y luego obtener imágenes de esa raza
 */
function Search() {
  // useState: Guarda el texto que el usuario escribe en el buscador
  const [busquedaTexto, setBusquedaTexto] = useState('');
  // useState: Guarda las imágenes de gatos encontradas
  const [gatos, setGatos] = useState([]);
  // useState: Guarda información de la raza encontrada (nombre y descripción)
  const [infoRaza, setInfoRaza] = useState(null);
  // useState: Indica si está cargando datos
  const [cargando, setCargando] = useState(false);
  // useState: Indica si no se encontraron resultados
  const [sinResultados, setSinResultados] = useState(false);

  /**
   * useEffect: Se ejecuta cada vez que cambia busquedaTexto
   * Realiza la búsqueda en dos pasos:
   * 1. Busca la raza por nombre
   * 2. Obtiene imágenes de esa raza
   */
  useEffect(() => {
    // Limpia espacios en blanco del texto de búsqueda
    const termino = busquedaTexto.trim();
    
    // Si no hay texto, limpia todos los estados y no hace búsqueda
    if (!termino) {
      setGatos([]);
      setInfoRaza(null);
      setSinResultados(false);
      return; // Sale de la función
    }

    // Función asíncrona para realizar la búsqueda
    const buscar = async () => {
      setCargando(true); // Activa indicador de carga
      setSinResultados(false); // Resetea el estado de sin resultados
      
      try {
        // Paso 1: Buscar la raza por nombre en la API
        const resBreed = await fetch(
          `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(termino)}`
        );
        const breeds = await resBreed.json();
        
        // Si no se encontró ninguna raza, muestra mensaje de sin resultados
        if (!breeds || breeds.length === 0) {
          setInfoRaza(null);
          setGatos([]);
          setSinResultados(true);
          return;
        }
        
        // Obtiene el ID de la primera raza encontrada
        const breedId = breeds[0].id;
        // Guarda información de la raza (nombre y descripción)
        setInfoRaza({ name: breeds[0].name, description: breeds[0].description });
        
        // Paso 2: Buscar imágenes de esa raza específica usando el ID
        const resImg = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}&size=med&mime_types=jpg,png`
        );
        const imgs = await resImg.json();
        // Guarda las imágenes encontradas
        setGatos(imgs || []);
        // Verifica si hay imágenes o no
        setSinResultados((imgs && imgs.length === 0) || false);
      } catch (e) {
        // Si hay error, lo muestra y marca como sin resultados
        console.error('Error en búsqueda', e);
        setGatos([]);
        setSinResultados(true);
      } finally {
        // Siempre desactiva el indicador de carga
        setCargando(false);
      }
    };
    
    buscar(); // Ejecuta la búsqueda
  }, [busquedaTexto]); // Se ejecuta cada vez que cambia busquedaTexto

  return (
    <div className="pantalla">
      <h3>Búsqueda por raza</h3>
      <p>Ejemplos: Persian, Siamese, Maine Coon, Bengal.</p>
      
      {/* Componente de búsqueda que actualiza busquedaTexto cuando el usuario escribe */}
      <Buscador setBusquedaTexto={setBusquedaTexto} />
      
      {/* Muestra diferentes estados según el resultado de la búsqueda */}
      {cargando ? (
        <p>Cargando...</p>
      ) : sinResultados ? (
        <p style={{ color: '#a33' }}>Sin resultados para "{busquedaTexto}".</p>
      ) : (
        <Listado 
          busqueda={true} // Indica que SÍ es una búsqueda
          total={gatos.length} 
          arreglo={gatos} 
          infoRaza={infoRaza} // Pasa información de la raza para mostrar descripción
        />
      )}
    </div>
  );
}

export default Search;

