/**
 * Pantalla Favorites: Pantalla placeholder para futuras funcionalidades
 * Por ahora solo muestra información sobre mejoras futuras
 * 
 * Ideas para implementar:
 * - Guardar imágenes favoritas en localStorage
 * - Sincronizar con backend o Firebase
 * - Compartir enlaces de imágenes favoritas
 */
function Favorites() {
  return (
    <div className="pantalla">
      <h3>Favoritos</h3>
      <p>Espacio para futuras mejoras: guardar y listar tus imágenes favoritas.</p>
      <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
        <li>Persistir en localStorage</li>
        <li>Sincronizar con backend o Firebase</li>
        <li>Compartir enlaces</li>
      </ul>
    </div>
  );
}

export default Favorites;

