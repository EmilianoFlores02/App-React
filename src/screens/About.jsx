/**
 * Pantalla About: Muestra información sobre la aplicación
 * Explica qué hace la app y qué tecnologías usa
 */
function About() {
  return (
    <div className="pantalla">
      <h3>Acerca de Random Cats</h3>
      <p>App React que consume The Cat API para mostrar gatos aleatorios y por raza.</p>
      <p>Usa un Stack Navigator simple y un Bottom Tab Navigator para 4 pantallas.</p>
      <p>Ideas futuras: favoritos persistentes, filtros y paginación.</p>
    </div>
  );
}

export default About;

