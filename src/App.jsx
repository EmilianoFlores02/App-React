// Importaciones de estilos y componentes necesarios
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Encabezado from './Components/Encabezado';
import Home from './screens/Home';
import Search from './screens/Search';
import Favorites from './screens/Favorites';
import About from './screens/About';

/**
 * Stack Navigator: Navegación tipo pila (como historial de navegación)
 * Permite navegar hacia adelante y volver atrás usando un botón "Volver"
 * 
 * @param {string} currentRoute - La ruta actual seleccionada desde las tabs
 * @param {object} screens - Objeto con todas las pantallas disponibles
 */
const StackNavigator = ({ currentRoute, screens }) => {
  // Estado que guarda el historial de navegación (pila de pantallas)
  const [stack, setStack] = useState([currentRoute]);
  
  // useEffect: Se ejecuta cuando cambia currentRoute (cuando cambias de tab)
  // Sincroniza el stack con la nueva ruta seleccionada
  React.useEffect(() => {
    if (stack[stack.length - 1] !== currentRoute) {
      // Si la ruta cambió, resetea el stack con la nueva ruta
      setStack([currentRoute]);
    }
  }, [currentRoute]);

  // Obtiene la pantalla actual (la última del stack)
  const current = stack[stack.length - 1];
  // Selecciona el componente de pantalla correspondiente
  const Screen = screens[current] || screens[currentRoute];

  // Función para navegar a una nueva pantalla (agrega a la pila)
  const push = (route) => setStack((s) => [...s, route]);
  // Función para volver atrás (quita la última pantalla de la pila)
  const pop = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));

  return (
    <div>
      {/* Muestra botón "Volver" solo si hay más de una pantalla en el stack */}
      {stack.length > 1 && (
        <button onClick={pop} style={{ margin: '10px' }}>
          ◀ Volver
        </button>
      )}
      {/* Renderiza la pantalla actual y le pasa la función navigate */}
      <Screen navigate={push} />
    </div>
  );
};

/**
 * Bottom Tab Navigator: Barra de navegación inferior con tabs
 * Permite cambiar entre las 4 pantallas principales del app
 * 
 * @param {string} current - Tab actualmente seleccionada
 * @param {function} onChange - Función que se ejecuta al cambiar de tab
 */
const BottomTabs = ({ current, onChange }) => (
  <div className="bottom-nav">
    {/* Crea un botón por cada tab disponible */}
    {['Home', 'Search', 'Favorites', 'About'].map((tab) => (
      <button
        key={tab}
        onClick={() => onChange(tab)} // Al hacer clic, cambia la tab actual
        className={current === tab ? 'tab-active' : 'tab-btn'} // Estilo diferente si está activa
      >
        {tab}
      </button>
    ))}
  </div>
);

/**
 * Componente principal de la aplicación
 * Maneja la navegación entre pantallas usando Stack Navigator y Bottom Tabs
 */
function App() {
  // Objeto que mapea nombres de pantallas con sus componentes
  const screens = {
    Home: Home,
    Search: Search,
    Favorites: Favorites,
    About: About,
  };

  // Estado que guarda la tab actualmente seleccionada (inicia en 'Home')
  const [tab, setTab] = useState('Home');

  return (
    <div className="App">
      {/* Encabezado fijo de la aplicación */}
      <Encabezado />

      {/* Stack Navigator: muestra la pantalla actual y permite navegación */}
      <StackNavigator currentRoute={tab} screens={screens} />

      {/* Bottom Tabs: barra de navegación inferior para cambiar entre pantallas */}
      <BottomTabs current={tab} onChange={setTab} />
    </div>
  );
}

export default App;