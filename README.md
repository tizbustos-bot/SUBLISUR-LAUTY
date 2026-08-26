# SUBLISUR LAUTY — Landing page

Landing comercial estática (HTML + CSS + JavaScript puro, sin frameworks ni build) para
**SUBLISUR LAUTY**, proveedor de insumos para sublimación y estampado en Quilmes Oeste.
El objetivo de la página es **mostrar los productos y canalizar consultas por WhatsApp**.

## Contenido

```
SUBLISUR LAUTY/
├── index.html          # Estructura y contenido de todas las secciones
├── styles.css          # Estilos, paleta de marca, responsive y animaciones
├── script.js           # Menú mobile, FAQ, reveal al scroll, links de WhatsApp
├── robots.txt
├── assets/
│   ├── logo.png        # Logo de la marca (usado en header, footer y favicon)
│   └── images/         # Imágenes de producto/galería (PLACEHOLDERS a reemplazar)
├── Logo, baja calidad.png   # Original entregado por el cliente
└── INstagram.png            # Captura de referencia del Instagram
```

## Secciones incluidas

Header sticky · Hero · Productos (6 categorías) · Emprendimiento · Nosotros ·
Cómo comprar (3 pasos) · Envíos · Ubicación con mapa · Preguntas frecuentes · CTA final ·
Footer · Botón flotante de WhatsApp.

## Cómo editar lo importante

### WhatsApp (número y mensaje)
Están centralizados al inicio de **`script.js`**. Cambiá solo estas dos líneas y se
actualizan **todos** los botones de la página a la vez:

```js
const WA_NUMBER  = "5491139031751"; // formato internacional, sin + ni espacios
const WA_MESSAGE = "Hola SUBLISUR LAUTY 👋 Vi su página web y quería consultar por sus productos.";
```

### Instagram
Buscá `sublimarsurr` en `index.html` (aparece en Ubicación y en el footer) y reemplazá el
usuario si cambia.

### Dirección y mapa
La dirección (**Emilio Torres 1634, Quilmes Oeste**) y el mapa de Google están en la
sección `#contacto` de `index.html`. El mapa es un `<iframe>` de Google Maps; si querés
otro punto, cambiá la dirección en el `src` del iframe y en el link "Cómo llegar".

### Colores de marca
Están al inicio de **`styles.css`** como variables (`:root`). Cambiando ahí se actualiza
toda la web:

```css
--fucsia: #E5007E;  --violeta: #7B2FF7;  --azul: #1E5BE6;
--celeste: #22B8E6; --verde: #2FB84A;    --rojo: #E63946;  --rosa: #FF6FB5;
```

### Textos
Todo el texto es editable directamente en `index.html`.

## Imágenes

Ya están cargadas las **fotos reales de producto** que envió el cliente (en `assets/images/`).
Si querés cambiar alguna, guardá la nueva foto con el **mismo nombre de archivo**.

| Archivo | Dónde aparece | Contenido |
|---|---|---|
| `hero-mochila.jpg` | Hero (portada) | Mochilas de colores para sublimar (producto estrella) |
| `hero-botellas.jpg` | Hero (portada) | Botellas deportivas personalizadas |
| `hero-remera.jpg` | Hero (portada) | Remera negra para estampar |
| `mochilas-bolsos.jpg` | Productos | Bolsos deportivos de colores |
| `tazas.jpg` | Productos | Botellas/artículos sublimables |
| `textiles.jpg` | Productos | Remeras deportivas fluor |
| `insumos.jpg` | Productos | Plancha térmica portátil para sublimación |
| `accesorios.jpg` | Productos | Rompecabezas + posavasos sublimables |
| `mas-productos.jpg` | Productos | Soportes de celular sublimados |
| `emprendimiento.jpg` | Sección emprendedores | Pijama personalizado (trabajo terminado) |

### ⚠️ Pendientes (siguen como placeholder SVG)

| Archivo | Dónde aparece | Qué falta |
|---|---|---|
| `local.svg` | Nosotros | Foto real del local en Quilmes Oeste |
| `envios.svg` | Envíos | Foto de paquetes / envíos |

### Extras (guardadas, sin usar en la página)

`extra-guante-cocina.jpg`, `extra-neceser-floral.jpg`, `extra-neceser-rosa.jpg` — quedaron
disponibles por si se quieren sumar más adelante.

> **Logo:** `assets/logo.png` es el archivo entregado, en **baja calidad**. En
> `assets/images/logo-hd.jpg` hay una versión de mejor definición pero **recortada** (sin la
> dirección de la parte inferior). Lo ideal es una versión en alta resolución del logo completo.

## Datos pendientes / a confirmar con el cliente

- Fotos reales de productos, local y trabajos (hoy son placeholders).
- Logo en alta resolución.
- Horarios de atención (no se publican por ahora; el Instagram los comunica por historias).

> No se inventaron precios, testimonios, años de experiencia ni cantidades de clientes.

## Desplegar en Render (sitio estático)

1. Subí esta carpeta a un repositorio de GitHub.
2. En [Render](https://render.com) → **New** → **Static Site**.
3. Conectá el repo.
4. **Build Command:** dejar vacío. **Publish Directory:** `.` (la raíz).
5. **Create Static Site**. Render te da una URL pública (podés conectar un dominio propio después).

También funciona en cualquier hosting estático (Netlify, Vercel, GitHub Pages, Hostinger)
simplemente subiendo los archivos: no requiere compilación.
