# Auditoría de accesibilidad

Fecha: 2026-09-18
Página revisada: `index.html`

## Resultado

La segunda revisión automatizada no reportó violaciones activas de accesibilidad.

## Comprobaciones relevantes

- Documento con `lang="es"`, título y meta viewport.
- Página con un `h1` identificable y jerarquía de headings válida.
- Imagen hero con texto alternativo descriptivo.
- Enlaces telefónicos, Instagram e indicaciones con nombres discernibles.
- Botón de disclosure con `aria-expanded` y `aria-controls`.
- Panel de selección con `aria-hidden` sincronizado con su estado visual.
- Controles de teclado con estados `:focus-visible` visibles.
- Contraste revisado tras ajustar los tonos secundarios de horario, footer y metadatos.
- Sin overflow horizontal en 1440px ni 390px.

## Interacciones revisadas

- “Ver detalles +” abre y cierra el panel de selección.
- “Guardar dirección” muestra “Dirección copiada” cuando el portapapeles está disponible.
- Los enlaces `tel:` y las indicaciones externas conservan destinos funcionales.
