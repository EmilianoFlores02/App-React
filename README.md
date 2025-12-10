# Random Cats - Aplicación de Búsqueda de Gatos

Una aplicación web interactiva desarrollada con React que permite a los usuarios explorar imágenes aleatorias de gatos y buscar por razas específicas utilizando The Cat API.

---

## 📋 Información del Proyecto

**Nombre del Estudiante:** [Tu Nombre]  
**Institución:** [Nombre de tu Institución]  
**Clase:** [Nombre de la Clase]  
**Fecha:** [Fecha]

---

## 📖 Introducción

Random Cats es una aplicación web moderna y responsiva que utiliza React y The Cat API para proporcionar una experiencia interactiva de exploración de imágenes de gatos. La aplicación permite a los usuarios:

- Visualizar imágenes aleatorias de gatos al cargar la página
- Buscar imágenes por raza específica de gato
- Ver información detallada sobre las razas de gatos
- Abrir imágenes en tamaño completo en una nueva pestaña
- Disfrutar de una interfaz intuitiva y atractiva

Esta aplicación demuestra el uso de React Hooks, manejo de estado, consumo de APIs REST, y componentes modulares para crear una experiencia de usuario fluida y moderna.

---

## ✨ Características

- 🐱 **Imágenes Aleatorias**: Muestra 10 imágenes aleatorias de gatos al cargar la aplicación
- 🔍 **Búsqueda por Raza**: Permite buscar gatos por raza específica (Persian, Siamese, Maine Coon, etc.)
- 📝 **Información de Razas**: Muestra descripción detallada de la raza cuando se realiza una búsqueda
- 🖼️ **Vista Ampliada**: Al hacer clic en una imagen, se abre un modal con la imagen en tamaño completo
- 🔗 **Abrir en Nueva Pestaña**: Opción para abrir la imagen original en una nueva pestaña del navegador
- 🎨 **Diseño Responsivo**: Interfaz adaptada para diferentes tamaños de pantalla
- ⚡ **Efectos Hover**: Animaciones suaves al pasar el mouse sobre las imágenes

---

## 🛠️ Tecnologías Utilizadas

- **React 19.1.1** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite 7.1.7** - Herramienta de construcción y desarrollo rápida
- **React Bootstrap 2.10.10** - Componentes de Bootstrap para React
- **Bootstrap 5.3.8** - Framework CSS para diseño responsivo
- **The Cat API** - API REST para obtener imágenes e información de gatos
- **JavaScript ES6+** - Lenguaje de programación moderno

---

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos para Instalar

1. Clona el repositorio:
```bash
git clone [URL de tu repositorio]
```

2. Navega al directorio del proyecto:
```bash
cd example17
```

3. Instala las dependencias:
```bash
npm install
```

4. Configura tu API Key de The Cat API:
   - Obtén una API key gratuita en [The Cat API](https://thecatapi.com/)
   - Abre el archivo `src/App.jsx`
   - Reemplaza `"live_4K4WJ9sCWsTYiiyRVJl7XCE8IwdGttGWgM0PD9ojHN2AG8aYy3bfNjgF9phDncnw"` con tu propia API key en la línea 25

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

6. Abre tu navegador en `http://localhost:5173`

---

## 💻 Descripción del Código

### Estructura del Proyecto

```
example17/
├── src/
│   ├── Components/
│   │   ├── Buscador.jsx      # Componente de búsqueda
│   │   ├── Encabezado.jsx     # Encabezado de la aplicación
│   │   ├── Imagen.jsx         # Modal para mostrar imagen ampliada
│   │   └── Listado.jsx         # Lista de imágenes de gatos
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos principales
│   ├── index.css               # Estilos globales
│   └── main.jsx                # Punto de entrada
├── public/                     # Archivos estáticos
├── package.json                # Dependencias del proyecto
└── README.md                   # Documentación
```

### Componentes Principales

#### **App.jsx**
Componente principal que maneja el estado global de la aplicación:
- **Estados**:
  - `busquedaTexto`: Almacena el texto de búsqueda ingresado por el usuario
  - `arreglo`: Array con las imágenes de gatos obtenidas de la API
  - `total`: Número total de resultados
  - `busqueda`: Boolean que indica si hay una búsqueda activa
  - `imagenSeleccionada`: Objeto con la imagen seleccionada para el modal
  - `mostrarImagen`: Controla la visibilidad del modal
  - `infoRaza`: Información de la raza encontrada (nombre y descripción)

- **useEffect**: Se ejecuta cuando cambia `busquedaTexto`:
  - Si hay texto de búsqueda: Busca la raza en The Cat API y luego obtiene imágenes de esa raza
  - Si no hay búsqueda: Obtiene imágenes aleatorias de gatos

#### **Buscador.jsx**
Componente que renderiza el campo de búsqueda:
- Utiliza `InputGroup` de React Bootstrap
- Actualiza el estado `busquedaTexto` mediante `setBusquedaTexto` cuando el usuario escribe

#### **Listado.jsx**
Componente que muestra la lista de imágenes:
- Muestra mensaje informativo cuando no hay búsqueda
- Muestra el número de resultados y la descripción de la raza cuando hay búsqueda
- Renderiza las imágenes en una cuadrícula responsiva
- Cada imagen es clickeable y abre el modal al hacer clic
- Solo muestra información individual de raza en imágenes aleatorias (no en búsquedas)

#### **Imagen.jsx**
Componente modal que muestra la imagen seleccionada:
- Utiliza `Modal` de React Bootstrap
- Muestra la imagen en tamaño completo
- Incluye botones para cerrar y abrir la imagen en nueva pestaña
- Muestra información de la raza si está disponible

#### **Encabezado.jsx**
Componente simple que muestra el título "RANDOM CATS"

### Flujo de Datos

1. El usuario escribe en el buscador → `setBusquedaTexto` actualiza el estado
2. `useEffect` detecta el cambio → Realiza petición a The Cat API
3. La API responde → Se actualizan `arreglo`, `total`, `busqueda` e `infoRaza`
4. `Listado` recibe los nuevos datos → Renderiza las imágenes
5. Usuario hace clic en una imagen → Se abre el modal `Imagen`

### Estilos (App.css)

- Diseño flexbox para layout responsivo
- Efectos hover con `transform: scale()` y sombras
- Transiciones suaves para mejor UX
- Tamaños adaptativos usando unidades viewport (vw)

---

## 🎯 Uso de la Aplicación

1. **Ver Gatos Aleatorios**: Al cargar la aplicación, se muestran automáticamente 10 imágenes aleatorias de gatos.

2. **Buscar por Raza**: 
   - Escribe el nombre de una raza en el buscador (ej: "Persian", "Siamese", "Maine Coon")
   - La aplicación buscará y mostrará imágenes de esa raza específica
   - Se mostrará la descripción de la raza debajo del título de resultados

3. **Ver Imagen Ampliada**:
   - Haz clic en cualquier imagen para abrirla en un modal
   - En el modal puedes cerrar o abrir la imagen en una nueva pestaña

4. **Efectos Interactivos**:
   - Pasa el mouse sobre las imágenes para ver el efecto de resaltado

---

## 📸 Capturas de Pantalla

### [Agrega aquí tus capturas de pantalla]

**Ejemplo de estructura:**

```
### Vista Principal - Gatos Aleatorios
![Vista Principal](screenshots/main-view.png)

### Búsqueda por Raza
![Búsqueda](screenshots/search-view.png)

### Modal de Imagen
![Modal](screenshots/modal-view.png)
```

**Instrucciones para agregar capturas:**
1. Crea una carpeta `screenshots` en la raíz del proyecto
2. Guarda tus capturas de pantalla con nombres descriptivos
3. Reemplaza los ejemplos anteriores con tus propias imágenes usando la sintaxis markdown: `![Descripción](ruta/imagen.png)`

---

## 🎓 Conclusión del Proyecto

[Escribe aquí tu conclusión personal sobre el proyecto. Puedes incluir:]

- Lo que aprendiste durante el desarrollo
- Desafíos que enfrentaste y cómo los resolviste
- Mejoras futuras que te gustaría implementar
- Reflexiones sobre el uso de React y APIs
- Experiencia general con el proyecto

**Ejemplo de estructura:**

```
Este proyecto me permitió profundizar en el uso de React Hooks, especialmente useState y useEffect, 
y entender mejor cómo consumir APIs REST en aplicaciones React. 

Los principales desafíos fueron:
- Manejar el estado asíncrono de las peticiones HTTP
- Optimizar la experiencia del usuario durante las búsquedas
- Implementar un diseño responsivo y atractivo

Mejoras futuras que consideraría:
- Agregar un sistema de favoritos
- Implementar paginación para mostrar más resultados
- Agregar filtros adicionales (tamaño, tipo de imagen, etc.)

En general, fue una experiencia muy enriquecedora que me ayudó a consolidar mis conocimientos 
en desarrollo web con React.
```

---

## 📝 Notas Adicionales

- La aplicación requiere una conexión a internet para funcionar correctamente
- La API de The Cat API tiene límites de uso según el plan (gratuito tiene límites razonables)
- Las imágenes se obtienen en tiempo real desde The Cat API

---

## 📄 Licencia

Este proyecto es de uso educativo y fue desarrollado como parte de un curso académico.

---

## 🙏 Agradecimientos

- [The Cat API](https://thecatapi.com/) por proporcionar la API gratuita
- React y la comunidad de desarrolladores por las herramientas y recursos disponibles
- Bootstrap por los componentes y estilos predefinidos

---

## 📧 Contacto

Para preguntas o comentarios sobre este proyecto, puedes contactarme en:
- Email: [tu-email@ejemplo.com]
- GitHub: [tu-usuario-github]

---

**Desarrollado con ❤️ usando React**
