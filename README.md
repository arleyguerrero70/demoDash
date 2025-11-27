# Dashboard Comercial

Dashboard interactivo para visualización de datos comerciales por clusters y categorías.

## 📋 Características

- ✅ **Sin dependencias de APIs externas** - Funciona completamente offline
- ✅ **HTML/CSS/JS puro** - No requiere React ni herramientas de build
- ✅ **Compatible con GitHub Pages** - Listo para publicar directamente
- ✅ **Gráficos interactivos** - Usando Chart.js desde CDN
- ✅ **Responsive** - Se adapta a diferentes tamaños de pantalla
- ✅ **Fácil de actualizar** - Los datos están en un archivo JavaScript separado

## 🚀 Cómo usar

### Opción 1: GitHub Pages (Recomendado)

1. Sube todos los archivos a tu repositorio de GitHub
2. Ve a **Settings** > **Pages**
3. Selecciona la rama `main` (o `master`) y la carpeta `/ (root)`
4. Guarda los cambios
5. Tu dashboard estará disponible en: `https://tu-usuario.github.io/tu-repositorio/`

### Opción 2: Servidor local

1. Abre una terminal en la carpeta del proyecto
2. Si tienes Python instalado:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
3. Abre tu navegador en: `http://localhost:8000`

### Opción 3: Abrir directamente

Simplemente abre el archivo `index.html` en tu navegador (puede tener limitaciones con algunos navegadores).

## 📁 Estructura de archivos

```
.
├── index.html      # Estructura HTML del dashboard
├── styles.css      # Estilos CSS (reemplaza Tailwind)
├── script.js       # Lógica JavaScript del dashboard
├── data.js         # Datos del dashboard (clusters, métricas, etc.)
└── README.md       # Este archivo
```

## 🔧 Actualizar datos

Para actualizar los datos del dashboard:

1. Abre el archivo `data.js`
2. Modifica el objeto `DATASETS` con tus nuevos datos
3. La estructura debe mantenerse igual (clusters, segments, insights, tactics, etc.)
4. Guarda y sube los cambios a GitHub Pages

### Ejemplo de estructura de datos:

```javascript
const DATASETS = {
  general: {
    title: "Visión General",
    source: "Archivo: datos.xlsx",
    metrics: { clients: 9397, avg_freq: 1.9 },
    top3_metrics: { /* ... */ },
    clusters: [ /* ... */ ],
    segments: [ /* ... */ ],
    cluster_segments: { /* ... */ },
    insights: [ /* ... */ ],
    tactics: [ /* ... */ ]
  }
};
```

## 📊 Funcionalidades

- **Navegación entre categorías**: Clic en las pestañas superiores
- **Filtrado por cluster**: Clic en una barra del gráfico de barras
- **Compartir enlace**: Botón "Compartir" copia la URL con filtros aplicados
- **Gráficos interactivos**: 
  - Gráfico de barras (RSV y Volumen por cluster)
  - Gráfico de pastel (Mix de segmentos)
  - Gráfico de línea (Frecuencia de visitas)

## 🎨 Personalización

### Cambiar colores

Los colores están definidos en:
- `styles.css`: Colores generales y temas
- `data.js`: Array `COLORS` para los gráficos de pastel

### Modificar estilos

Edita `styles.css` directamente. Los estilos están organizados por secciones:
- Utilidades generales
- Layout y spacing
- Colores y temas
- Componentes personalizados

## ⚠️ Notas importantes

1. **Datos desde Excel**: Los datos deben ser convertidos manualmente a formato JSON en `data.js`. No hay importación automática de Excel.

2. **Navegadores compatibles**: 
   - Chrome/Edge (recomendado)
   - Firefox
   - Safari
   - Opera

3. **Sin conexión a internet**: El dashboard funciona offline, pero necesita conexión la primera vez para cargar Chart.js y Lucide Icons desde CDN.

## 🔄 Migración desde React

Este dashboard fue convertido desde React a HTML/CSS/JS puro:
- ❌ Eliminado: React, Recharts, ReactMarkdown, Gemini API
- ✅ Reemplazado: Chart.js (desde CDN), Lucide Icons (desde CDN)
- ✅ Mantenido: Toda la funcionalidad visual e interactiva

## 📝 Licencia

Este proyecto es de uso libre. Puedes modificarlo y usarlo según tus necesidades.

## 🤝 Soporte

Si tienes preguntas o necesitas ayuda:
1. Revisa la estructura de datos en `data.js`
2. Verifica la consola del navegador para errores
3. Asegúrate de que todos los archivos estén en la misma carpeta

# demoDash
