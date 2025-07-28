# ToDo App 📝

Una aplicación de lista de tareas simple y funcional construida con HTML, CSS y JavaScript vanilla. Permite a los usuarios crear, editar, completar y eliminar tareas de manera intuitiva.

## 🚀 Características

- ✅ **Agregar tareas**: Crea nuevas tareas con título y descripción
- ✏️ **Editar tareas**: Modifica tareas existentes
- ✔️ **Marcar como completadas**: Cambia el estado visual de las tareas
- 🗑️ **Eliminar tareas**: Remueve tareas no deseadas
- 📅 **Fecha de creación**: Muestra automáticamente cuándo se creó cada tarea
- 📱 **Diseño responsive**: Adaptable a diferentes tamaños de pantalla
- ♿ **Accesibilidad**: Implementado con etiquetas ARIA y semántica HTML

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos y diseño responsive
- **JavaScript ES6+**: Funcionalidad interactiva y manipulación del DOM

## 📁 Estructura del proyecto

```
todo-project/
├── index.html          # Archivo principal HTML
├── assets/
│   ├── css/
│   │   └── styles.css   # Estilos de la aplicación
│   └── js/
│       └── script.js    # Lógica de la aplicación
└── README.md           # Documentación del proyecto
```

## 🎯 Instalación y uso

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/AlexanderManriquez/todo-project.git
   ```

2. **Navega al directorio del proyecto**:
   ```bash
   cd todo-project
   ```

3. **Abre el archivo en tu navegador**:
   - Opción 1: Abre `index.html` directamente en tu navegador
   - Opción 2: Usa un servidor local (recomendado):
     ```bash
     # Con Node.js (si tienes http-server instalado)
     npx http-server
     ```

4. **¡Comienza a usar la aplicación!** 🎉

## 🎮 Cómo usar

1. **Agregar una tarea**:
   - Completa el campo "Título de la tarea"
   - Agrega una descripción en el área de texto
   - Haz clic en "Agregar Tarea"

2. **Editar una tarea**:
   - Haz clic en el botón "Editar" de la tarea que deseas modificar
   - Los campos se llenarán automáticamente
   - Modifica la información y haz clic en "Actualizar Tarea"

3. **Completar una tarea**:
   - Haz clic en "Completar" para marcar la tarea como terminada
   - La tarea se mostrará tachada con un fondo verde claro
   - Haz clic en "Deshacer" para revertir el estado

4. **Eliminar una tarea**:
   - Haz clic en "Eliminar" para remover permanentemente la tarea

## 🎨 Características visuales

- **Tema verde**: Diseño con fondo verde y texto en color `oldlace`
- **Tarjetas de tareas**: Cada tarea se muestra en una tarjeta individual
- **Efectos hover**: Los botones tienen efectos visuales al pasar el cursor
- **Transiciones suaves**: Animaciones CSS para una mejor experiencia de usuario
- **Layout flexible**: Diseño que se adapta a diferentes tamaños de pantalla

## 🔧 Funcionalidades técnicas

- **Event Delegation**: Uso eficiente de eventos para elementos dinámicos
- **Form Validation**: Validación nativa HTML5 con campos requeridos
- **DOM Manipulation**: Creación y manipulación dinámica de elementos
- **State Management**: Manejo del estado de edición de tareas
- **Accessibility**: Implementación de ARIA labels y roles semánticos

## 🚀 Posibles mejoras futuras

- [ ] Persistencia de datos con LocalStorage
- [ ] Categorías de tareas
- [ ] Filtros (todas, completadas, pendientes)
- [ ] Búsqueda de tareas
- [ ] Fechas de vencimiento
- [ ] Modo oscuro/claro
- [ ] Arrastrar y soltar para reordenar
- [ ] Exportar tareas a JSON/CSV

## 📝 Contexto del proyecto

Este proyecto fue desarrollado como parte del **Módulo 3** del **Bootcamp Full-Stack JS**, demostrando competencias en:

- Manipulación del DOM con JavaScript
- Manejo de eventos
- Diseño responsive con CSS
- Buenas prácticas de accesibilidad web
- Estructura de proyecto organizada

## 👨‍💻 Autor

**Alexander Manríquez**
- GitHub: [@AlexanderManriquez](https://github.com/AlexanderManriquez)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

⭐ Si te gustó este proyecto, ¡no olvides darle una estrella!
