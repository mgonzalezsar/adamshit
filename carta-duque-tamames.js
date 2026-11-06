const posterSources = {
  productos: 'menu chufi 1.jpeg',
  menus: 'menu chufi 2 t.jpeg',
};

const product = (id, name, price, description, source, crop) => ({
  id,
  name,
  price,
  description,
  source,
  crop,
});

const crop = (centerX, centerY, w = 0.13, h = 0.035) => ({
  x: Math.max(0, centerX - w / 2),
  y: Math.max(0, centerY - h / 2 + (0.5 - centerX) * 0.035),
  w,
  h,
});

const catalog = {
  productos: [
    {
      title: 'Entrantes',
      items: [
        product('samosa', 'Samosa', 4, 'Samosas crujientes servidas con salsa.', 'productos', crop(0.33, 0.35)),
        product('arroz-basmati', 'Arroz basmati', 4, 'Ración de arroz basmati.', 'productos', crop(0.42, 0.35)),
        product('nuggets', 'Nuggets', 4, 'Nuggets crujientes con salsa.', 'productos', crop(0.52, 0.35)),
        product('croquetas', 'Croquetas', 4, 'Ración de croquetas.', 'productos', crop(0.64, 0.33)),
        product('patatas-fritas-mediana', 'Patatas fritas medianas', 2, 'Ración mediana de patatas fritas.', 'productos', crop(0.75, 0.33)),
        product('patatas-fritas-grande', 'Patatas fritas grandes', 3.5, 'Ración grande de patatas fritas.', 'productos', crop(0.75, 0.33)),
        product('patatas-gratinadas', 'Patatas gratinadas', 4.5, 'Patatas gratinadas con queso visible.', 'productos', crop(0.95, 0.35)),
        product('pinchos-kefta', 'Pinchos de kefta', 4, 'Pinchos de carne especiada con salsa.', 'productos', crop(0.27, 0.40)),
        product('dedos-queso', 'Dedos de queso', 4, 'Dedos de queso rebozados.', 'productos', crop(0.40, 0.40)),
        product('tiras-pollo', 'Tiras de pollo crujiente', 4, 'Tiras de pollo rebozadas y crujientes.', 'productos', crop(0.53, 0.40)),
        product('aros-cebolla', 'Aros de cebolla', 4, 'Aros de cebolla crujientes.', 'productos', crop(0.67, 0.40)),
        product('alitas-solas', 'Alitas de pollo', 4, 'Ración de alitas de pollo.', 'productos', crop(0.81, 0.40)),
        product('alitas-combo', 'Alitas con patatas y ensalada', 6, 'Alitas de pollo con patatas y ensalada.', 'productos', crop(0.81, 0.42)),
        product('ensalada', 'Ensalada', 4, 'Ensalada con vegetales visibles.', 'productos', crop(0.95, 0.40)),
      ],
    },
    {
      title: 'Kebabs y especialidades',
      items: [
        product('pan-pita', 'Pan pita', 4.5, 'Pan pita con carne de kebab, vegetales y salsa.', 'productos', crop(0.29, 0.49)),
        product('rollo', 'Rollo', 5, 'Rollo con relleno de kebab, vegetales y salsa.', 'productos', crop(0.4, 0.49)),
        product('rollo-falafel', 'Rollo falafel', 6, 'Rollo de falafel con vegetales y salsa.', 'productos', crop(0.5, 0.49)),
        product('rollo-gratinado', 'Rollo gratinado', 7, 'Rollo de kebab con queso gratinado.', 'productos', crop(0.6, 0.49)),
        product('taco-frances', 'Taco francés', 7, 'Tortilla rellena con carne, patatas y salsa.', 'productos', crop(0.7, 0.49)),
        product('rollo-xl', 'Rollo XL', 7, 'Rollo XL con relleno de kebab, vegetales y salsa.', 'productos', crop(0.88, 0.49)),
        product('rollo-especial', 'Rollo especial', 7, 'Rollo de kebab con vegetales y salsa.', 'productos', crop(0.27, 0.565)),
        product('pizza-turca', 'Pizza turca', 7, 'Pizza turca con ingredientes visibles en el cartel.', 'productos', crop(0.39, 0.565)),
        product('bocadillo', 'Bocadillo', 5, 'Bocadillo con carne, vegetales y salsa.', 'productos', crop(0.5, 0.565)),
        product('plato-kebab', 'Plato kebab', 6.5, 'Kebab con patatas o arroz, a elegir.', 'productos', crop(0.61, 0.565)),
        product('plato-gratinado-normal', 'Plato gratinado normal', 7, 'Plato de kebab gratinado con queso.', 'productos', crop(0.74, 0.565)),
        product('plato-gratinado-grande', 'Plato gratinado grande', 10, 'Ración grande de plato gratinado.', 'productos', crop(0.74, 0.565)),
        product('kebab-box-pequeno', 'Kebab box pequeño', 3.5, 'Box pequeño de kebab con complementos visibles.', 'productos', crop(0.88, 0.565)),
        product('kebab-box-grande', 'Kebab box grande', 4.5, 'Box grande de kebab con complementos visibles.', 'productos', crop(0.88, 0.565)),
      ],
    },
    {
      title: 'Hamburguesas',
      items: [
        product('hamburguesa-clasica', 'Hamburguesa clásica', 4, 'Hamburguesa con pan, carne y vegetales visibles.', 'productos', crop(0.16, 0.645)),
        product('hamburguesa-doble', 'Hamburguesa doble', 6.5, 'Hamburguesa con doble carne y pan.', 'productos', crop(0.32, 0.645)),
      ],
    },
    {
      title: 'Salsas y extras',
      items: [
        product('salsa-pequena', 'Tarrina de salsa pequeña', 0.5, 'Tarrina pequeña de salsa.', 'productos', crop(0.55, 0.69)),
        product('salsa-mediana', 'Tarrina de salsa mediana', 1, 'Tarrina mediana de salsa.', 'productos', crop(0.69, 0.69)),
        product('salsa-grande', 'Tarrina de salsa grande', 1.5, 'Tarrina grande de salsa.', 'productos', crop(0.83, 0.69)),
        product('extra-ensalada', 'Extra ensalada', 0.5, 'Suplemento de ensalada.', 'productos', crop(0.92, 0.41)),
        product('extra-queso-feta', 'Extra queso feta', 1, 'Suplemento de queso feta.', 'productos', crop(0.92, 0.41)),
        product('extra-solo-carne', 'Extra solo carne', 1, 'Suplemento de carne, sin ensalada.', 'productos', crop(0.31, 0.49)),
        product('extra-carne', 'Extra carne', 1, 'Suplemento de carne.', 'productos', crop(0.51, 0.49)),
        product('extra-pan', 'Pan extra', 0.5, 'Suplemento de pan.', 'productos', crop(0.51, 0.565)),
      ],
    },
  ],
  menus: [
    {
      title: 'Menús completos',
      items: [
        product('menu-pan-pita', 'Menú pan pita', 6.5, 'Pan pita de kebab con patatas y bebida.', 'menus', crop(0.1, 0.33)),
        product('menu-rollo', 'Menú rollo', 7.5, 'Rollo de kebab con patatas y bebida.', 'menus', crop(0.22, 0.33)),
        product('menu-rollo-gratinado', 'Menú rollo gratinado', 9, 'Rollo gratinado con patatas y bebida.', 'menus', crop(0.35, 0.33)),
        product('menu-taco-frances', 'Menú taco francés', 9, 'Taco francés con patatas y bebida.', 'menus', crop(0.49, 0.33)),
        product('menu-plato', 'Menú plato', 8.5, 'Plato kebab con patatas o arroz y bebida.', 'menus', crop(0.64, 0.33)),
        product('menu-rollo-xl', 'Menú rollo XL', 9, 'Rollo XL con patatas y bebida.', 'menus', crop(0.9, 0.33)),
        product('menu-bocadillo', 'Menú bocadillo', 7.5, 'Bocadillo con patatas y bebida.', 'menus', crop(0.17, 0.43)),
        product('menu-plato-gratinado', 'Menú plato gratinado', 8.5, 'Plato gratinado con bebida.', 'menus', crop(0.32, 0.43)),
        product('menu-plato-gratinado-grande', 'Menú plato gratinado grande', 11.5, 'Plato gratinado grande con bebida.', 'menus', crop(0.49, 0.43)),
        product('menu-box-pequeno', 'Menú box pequeño', 5.5, 'Box pequeño con patatas y bebida.', 'menus', crop(0.67, 0.43)),
        product('menu-box-grande', 'Menú box grande', 6.5, 'Box grande con patatas y bebida.', 'menus', crop(0.85, 0.43)),
        product('menu-rollo-especial', 'Menú rollo especial', 9, 'Rollo especial con patatas y bebida.', 'menus', crop(0.13, 0.53)),
        product('menu-pizza-turca', 'Menú pizza turca', 9, 'Pizza turca con patatas y bebida.', 'menus', crop(0.36, 0.53)),
        product('menu-hamburguesa-clasica', 'Menú hamburguesa clásica', 6.5, 'Hamburguesa con patatas y bebida.', 'menus', crop(0.61, 0.53)),
        product('menu-hamburguesa-doble', 'Menú hamburguesa doble', 9, 'Hamburguesa doble con patatas y bebida.', 'menus', crop(0.85, 0.53)),
        product('menu-alitas', 'Menú alitas', 8.5, 'Alitas con patatas y bebida.', 'menus', crop(0.13, 0.6)),
        product('menu-entrante-especial', 'Menú entrante especial', 10, 'Entrante variado con patatas y bebida.', 'menus', crop(0.36, 0.6)),
        product('menu-infantil-hamburguesa', 'Menú infantil hamburguesa', 6, 'Hamburguesa con patatas y zumo.', 'menus', crop(0.68, 0.64)),
        product('menu-infantil-nuggets', 'Menú infantil nuggets', 6, 'Nuggets con patatas y zumo.', 'menus', crop(0.88, 0.64)),
      ],
    },
  ],
  bebidas: [
    {
      title: 'Bebidas',
      items: [
        product('refresco-grande', 'Refresco grande', 3, 'Refresco en formato grande.', 'productos', crop(0.16, 0.71)),
        product('refresco-lata', 'Refresco lata', 1.5, 'Refresco en lata.', 'productos', crop(0.29, 0.71)),
        product('zumo', 'Zumo', 1.5, 'Zumo en formato individual.', 'productos', crop(0.43, 0.71)),
        product('agua-pequena', 'Agua pequeña', 1, 'Botella de agua pequeña.', 'productos', crop(0.59, 0.71)),
        product('agua-grande', 'Agua grande', 1.5, 'Botella de agua grande.', 'productos', crop(0.77, 0.71)),
      ],
    },
  ],
};

const productIndex = new Map();
Object.values(catalog).flat().forEach((group) => group.items.forEach((entry) => productIndex.set(entry.id, entry)));

const cartState = new Map();
const posterCache = new Map();
const euroFormatter = new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'});
const formatEuro = (value) => euroFormatter.format(value);
const formatPdfDate = (date) => new Intl.DateTimeFormat('es-ES', {dateStyle: 'short', timeStyle: 'short'}).format(date);
const createPdfFilename = (date) => `pedido-sufi-duque-tamames-${date.toISOString().slice(0, 10)}.pdf`;

const elements = {
  catalog: document.querySelector('[data-catalog]'),
  cartFab: document.querySelector('#cart-fab'),
  cartCount: document.querySelector('#cart-count'),
  cartFabTotal: document.querySelector('#cart-fab-total'),
  cartPanel: document.querySelector('#cart-panel'),
  cartClose: document.querySelector('#cart-close'),
  cartItems: document.querySelector('#cart-items'),
  cartEmpty: document.querySelector('#cart-empty'),
  cartTotal: document.querySelector('#cart-total'),
  cartPrint: document.querySelector('#cart-print'),
  cartStatus: document.querySelector('#cart-status'),
};

const loadPoster = (source) => {
  if (posterCache.has(source)) return posterCache.get(source);
  const promise = new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`No se pudo cargar ${source}`));
    image.src = posterSources[source];
  });
  posterCache.set(source, promise);
  return promise;
};

const drawProductCrop = (canvas, image, region) => {
  const context = canvas.getContext('2d');
  let sx = Math.round(image.naturalWidth * region.x);
  let sy = Math.round(image.naturalHeight * region.y);
  let sw = Math.round(image.naturalWidth * region.w);
  let sh = Math.round(image.naturalHeight * region.h);
  const targetRatio = 640 / 328;
  const sourceRatio = sw / sh;

  if (sourceRatio > targetRatio) {
    const croppedWidth = Math.round(sh * targetRatio);
    sx += Math.round((sw - croppedWidth) / 2);
    sw = croppedWidth;
  } else {
    const croppedHeight = Math.round(sw / targetRatio);
    sy += Math.round((sh - croppedHeight) / 2);
    sh = croppedHeight;
  }

  canvas.width = 640;
  canvas.height = 328;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
};

const renderProductCard = (entry) => {
  const article = document.createElement('article');
  article.className = 'product-card';
  article.dataset.productId = entry.id;
  article.innerHTML = `
    <figure class="product-card__media">
      <canvas class="product-card__canvas" role="img" aria-label="Imagen recortada de ${entry.name}"></canvas>
      <span class="product-card__fallback" hidden>Imagen no disponible</span>
    </figure>
    <div class="product-card__body">
      <span class="product-card__eyebrow mono">SUFI KEBAB · C. Duque de Tamames</span>
      <h3>${entry.name}</h3>
      <p class="product-card__description">${entry.description}</p>
      <div class="product-card__footer">
        <strong class="product-card__price">${formatEuro(entry.price)}</strong>
        <button class="product-card__add" type="button" data-add-to-cart="${entry.id}" aria-label="Añadir ${entry.name} al carrito">Añadir</button>
      </div>
    </div>
  `;

  const canvas = article.querySelector('canvas');
  const fallback = article.querySelector('.product-card__fallback');
  loadPoster(entry.source)
    .then((image) => drawProductCrop(canvas, image, entry.crop))
    .catch(() => {
      canvas.hidden = true;
      fallback.hidden = false;
    });
  return article;
};

const slugify = (value) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const renderCatalog = () => {
  Object.entries(catalog).forEach(([sectionId, groups]) => {
    const content = document.querySelector(`[data-catalog-content="${sectionId}"]`);
    const count = document.querySelector(`[data-section-count="${sectionId}"]`);
    if (!content) return;
    const totalItems = groups.reduce((total, group) => total + group.items.length, 0);
    if (count) count.textContent = `${totalItems} opciones`;

    groups.forEach((group) => {
      const headingId = `${sectionId}-${slugify(group.title)}`;
      const subsection = document.createElement('section');
      subsection.className = 'catalog-subsection';
      subsection.setAttribute('aria-labelledby', headingId);
      subsection.innerHTML = `<h3 class="catalog-subsection__heading" id="${headingId}">${group.title}</h3><div class="product-grid"></div>`;
      const grid = subsection.querySelector('.product-grid');
      group.items.forEach((entry) => {
        productIndex.set(entry.id, entry);
        grid.append(renderProductCard(entry));
      });
      content.append(subsection);
    });
  });
};

const calculateTotals = () => {
  const lines = [...cartState.entries()].map(([productId, quantity]) => {
    const entry = productIndex.get(productId);
    const subtotal = Math.round(entry.price * 100) * quantity;
    return {product: entry, quantity, subtotal: subtotal / 100};
  });
  return {
    lines,
    totalUnits: lines.reduce((sum, line) => sum + line.quantity, 0),
    total: lines.reduce((sum, line) => sum + Math.round(line.subtotal * 100), 0) / 100,
  };
};

const announce = (message) => {
  elements.cartStatus.textContent = message;
};

const renderCart = () => {
  const {lines, totalUnits, total} = calculateTotals();
  elements.cartCount.textContent = String(totalUnits);
  elements.cartCount.setAttribute('aria-label', `${totalUnits} ${totalUnits === 1 ? 'producto' : 'productos'}`);
  elements.cartFabTotal.textContent = formatEuro(total);
  elements.cartTotal.textContent = formatEuro(total);
  elements.cartPrint.disabled = lines.length === 0;

  if (lines.length === 0) {
    elements.cartItems.replaceChildren(elements.cartEmpty);
    return;
  }

  elements.cartItems.innerHTML = lines.map(({product: entry, quantity, subtotal}) => `
    <div class="cart-line" data-cart-line="${entry.id}">
      <div>
        <span class="cart-line__name">${entry.name}</span>
        <span class="cart-line__meta">${formatEuro(entry.price)} unidad</span>
        <div class="cart-line__controls">
          <button class="cart-line__control" type="button" data-cart-decrement="${entry.id}" aria-label="Disminuir cantidad de ${entry.name}">−</button>
          <span class="cart-line__quantity" aria-label="Cantidad ${quantity}">${quantity}</span>
          <button class="cart-line__control" type="button" data-cart-increment="${entry.id}" aria-label="Aumentar cantidad de ${entry.name}">+</button>
          <button class="cart-line__remove" type="button" data-cart-remove="${entry.id}">Eliminar</button>
        </div>
      </div>
      <strong class="cart-line__subtotal">${formatEuro(subtotal)}</strong>
    </div>
  `).join('');
};

const addToCart = (productId) => {
  cartState.set(productId, (cartState.get(productId) || 0) + 1);
  renderCart();
  announce(`${productIndex.get(productId).name} añadido al carrito.`);
};

const decrementItem = (productId) => {
  const quantity = cartState.get(productId) || 0;
  if (quantity <= 1) cartState.delete(productId);
  else cartState.set(productId, quantity - 1);
  renderCart();
};

const removeItem = (productId) => {
  const entry = productIndex.get(productId);
  cartState.delete(productId);
  renderCart();
  announce(`${entry.name} eliminado del carrito.`);
};

const setCartOpen = (isOpen) => {
  elements.cartPanel.classList.toggle('is-open', isOpen);
  elements.cartPanel.setAttribute('aria-hidden', String(!isOpen));
  elements.cartFab.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) elements.cartClose.focus();
  else elements.cartFab.focus();
};

const wrapPdfText = (doc, text, maxWidth) => doc.splitTextToSize(text, maxWidth);

const downloadOrderPdf = () => {
  const {lines, total} = calculateTotals();
  if (!lines.length) return;

  const PdfConstructor = window.jspdf?.jsPDF;
  if (!PdfConstructor) {
    announce('No se pudo cargar el PDF; se abrirá la impresión del navegador.');
    window.print();
    return;
  }

  const doc = new PdfConstructor({unit: 'mm', format: 'a4'});
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const left = 18;
  const right = pageWidth - 18;
  let y = 20;

  const drawHeader = () => {
    doc.setFillColor(9, 9, 8);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(241, 238, 230);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('SUFI KEBAB', left, 17);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('PEDIDO · C. DUQUE DE TAMAMES', left, 27);
    doc.setTextColor(180, 180, 180);
    doc.text(formatPdfDate(new Date()), right, 27, {align: 'right'});
  };

  const drawTableHeader = () => {
    doc.setFillColor(239, 185, 35);
    doc.rect(left, y, right - left, 8, 'F');
    doc.setTextColor(9, 9, 8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('PRODUCTO', left + 3, y + 5.5);
    doc.text('UD.', right - 78, y + 5.5);
    doc.text('PRECIO', right - 53, y + 5.5);
    doc.text('SUBTOTAL', right - 3, y + 5.5, {align: 'right'});
    y += 14;
  };

  drawHeader();
  y = 55;
  doc.setTextColor(35, 35, 35);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('Datos del local', left, y);
  y += 7;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('C. Duque de Tamames, 20 · 03300 Orihuela', left, y);
  y += 14;
  drawTableHeader();
  doc.setFontSize(10);

  lines.forEach(({product: entry, quantity, subtotal}) => {
    const productLines = wrapPdfText(doc, entry.name, 88);
    const rowHeight = Math.max(10, productLines.length * 5 + 4);
    if (y + rowHeight > pageHeight - 35) {
      doc.addPage();
      drawHeader();
      y = 55;
      drawTableHeader();
    }
    doc.setTextColor(35, 35, 35);
    doc.setFont('helvetica', 'normal');
    doc.text(productLines, left + 3, y);
    doc.text(String(quantity), right - 78, y);
    doc.text(formatEuro(entry.price), right - 53, y);
    doc.setFont('helvetica', 'bold');
    doc.text(formatEuro(subtotal), right - 3, y, {align: 'right'});
    doc.setDrawColor(220, 220, 220);
    doc.line(left, y + rowHeight - 3, right, y + rowHeight - 3);
    y += rowHeight;
  });

  if (y + 38 > pageHeight - 20) {
    doc.addPage();
    drawHeader();
    y = 55;
  }
  y += 10;
  doc.setFillColor(9, 9, 8);
  doc.rect(left, y, right - left, 18, 'F');
  doc.setTextColor(241, 238, 230);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('TOTAL DEL PEDIDO', left + 4, y + 11);
  doc.setTextColor(239, 185, 35);
  doc.setFontSize(15);
  doc.text(formatEuro(total), right - 4, y + 11, {align: 'right'});
  doc.save(createPdfFilename(new Date()));
  announce('PDF descargado correctamente.');
};

renderCatalog();
renderCart();

document.addEventListener('click', (event) => {
  const addButton = event.target.closest('[data-add-to-cart]');
  if (addButton) {
    addToCart(addButton.dataset.addToCart);
    return;
  }
  const incrementButton = event.target.closest('[data-cart-increment]');
  if (incrementButton) {
    addToCart(incrementButton.dataset.cartIncrement);
    return;
  }
  const decrementButton = event.target.closest('[data-cart-decrement]');
  if (decrementButton) {
    decrementItem(decrementButton.dataset.cartDecrement);
    return;
  }
  const removeButton = event.target.closest('[data-cart-remove]');
  if (removeButton) removeItem(removeButton.dataset.cartRemove);
});

elements.cartFab.addEventListener('click', () => {
  setCartOpen(!elements.cartPanel.classList.contains('is-open'));
});
elements.cartClose.addEventListener('click', () => setCartOpen(false));
elements.cartPrint.addEventListener('click', downloadOrderPdf);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && elements.cartPanel.classList.contains('is-open')) setCartOpen(false);
});
