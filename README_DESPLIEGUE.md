# Market Nukemaleu — Sitio completo

Este paquete contiene la versión actualizada con el catálogo del 9 de octubre de 2026: 19 fichas de productos, filtros por categoría, las 33 páginas del catálogo y contacto por WhatsApp e Instagram.

## Cómo instalarlo

1. Descomprime el archivo ZIP.
2. Sube su contenido al directorio donde se sirve tu web (por ejemplo, `public_html`, `www` o la carpeta configurada por tu proveedor).
3. Deja `index.html` directamente en esa carpeta, junto a `catalogo.html`, `privacidad.html`, los archivos CSS/JavaScript y `assets/`.
4. Abre la dirección correspondiente y comprueba la portada, las categorías, el catálogo y los enlaces de contacto.

No necesitas instalar dependencias, compilar ni configurar una base de datos. Se sirve como HTML, CSS, JavaScript e imágenes estáticas. Las rutas internas son relativas, por lo que también funciona dentro de una subcarpeta de tu sitio.

Para GitHub Pages, coloca estos mismos archivos en la carpeta configurada como origen de publicación y conserva `.nojekyll`. Si el explorador oculta ese archivo, utiliza una opción que muestre archivos ocultos al copiar el contenido.

## Archivos incluidos

- `index.html`: portada, 19 fichas de productos, información de la tienda y contacto.
- `catalogo.html`: catálogo completo de 33 páginas.
- `privacidad.html`: información de privacidad y canales externos de contacto.
- `styles.css`, `product-framing.css` y `app.js`: diseño responsive, imágenes y navegación/filtros.
- `assets/`: logo, fotografías de productos y páginas del catálogo en WebP.
- `content/productos.json`: datos de referencia de las fichas. Es un archivo de apoyo; editarlo por sí solo no actualiza el HTML de las fichas.
- `robots.txt` y `_headers`: directivas de indexación y cabeceras para alojamientos compatibles.
- `.nojekyll`: archivo auxiliar para servir el contenido estático en GitHub Pages.

## Privacidad al trasladar el sitio

El control de acceso privado de la versión alojada no forma parte de estos archivos. Si quieres conservar acceso restringido, configúralo en el nuevo proveedor antes de subirlos.

El paquete conserva `noindex` en las páginas, el bloqueo de rastreo en `robots.txt` y las cabeceras equivalentes en `_headers`. Estas directivas no son una contraseña ni un mecanismo de acceso privado. El soporte de `_headers` depende del proveedor.

## Productos y contacto

Los precios se tomaron del catálogo del 9 de octubre de 2026 y están expresados en COP. Dos referencias sin precio en la fuente se muestran como “Consultar precio”. Confirma precios, variantes, disponibilidad y costo de envío antes de vender.

WhatsApp: 305 244 3283 (Colombia).
Instagram: https://www.instagram.com/market_nukemaleu/

El sitio no contiene carrito ni pagos en línea. Los botones abren los canales de contacto para que la persona usuaria coordine su pedido.

El PDF original no es necesario para ejecutar el sitio: todas sus 33 páginas están incluidas como imágenes optimizadas. Se preservan los productos y el contenido de la versión entregada.
