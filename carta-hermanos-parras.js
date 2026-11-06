const posterSources = {
  posterA: 'menu chufi.jpeg',
  posterB: 'menu chufi 2.jpeg',
};

const item = (id, name, price, description, source, crop) => ({
  id,
  name,
  price,
  description,
  source,
  crop,
});

const catalog = {
  productos: [
    {
      title: 'Entrantes',
      items: [
        item('samosa', 'Samosa', 4, 'Masa rellena de verduras y especias, servida con salsa visible.', 'posterA', {x: 0.01, y: 0.19, w: 0.19, h: 0.12}),
        item('arroz-basmati', 'Arroz basmati', 4, 'Arroz basmati con hierbas y acompañamiento visible.', 'posterA', {x: 0.205, y: 0.19, w: 0.19, h: 0.12}),
        item('nuggets-pollo', 'Nuggets de pollo', 4, 'Nuggets de pollo crujientes con salsa.', 'posterA', {x: 0.4, y: 0.19, w: 0.19, h: 0.12}),
        item('patatas-fritas', 'Patatas fritas', 4, 'Ración de patatas fritas.', 'posterA', {x: 0.595, y: 0.19, w: 0.19, h: 0.12}),
        item('patatas-fritas-pequenas', 'Patatas fritas pequeñas', 2, 'Ración pequeña de patatas fritas.', 'posterA', {x: 0.595, y: 0.19, w: 0.19, h: 0.12}),
        item('patatas-bravas', 'Patatas bravas', 4, 'Patatas con salsa brava.', 'posterA', {x: 0.79, y: 0.19, w: 0.19, h: 0.12}),
        item('pinchos-kefta', 'Pinchos de kefta', 4, 'Pinchos de carne especiada.', 'posterA', {x: 0.01, y: 0.305, w: 0.16, h: 0.105}),
        item('dedos-queso', 'Dedos de queso', 4, 'Fingers de queso con salsa.', 'posterA', {x: 0.175, y: 0.305, w: 0.16, h: 0.105}),
        item('tiras-pollo', 'Tiras de pollo crujiente', 4, 'Tiras de pollo rebozadas y crujientes, con salsa.', 'posterA', {x: 0.34, y: 0.305, w: 0.16, h: 0.105}),
        item('aros-cebolla', 'Aros de cebolla', 4, 'Aros de cebolla crujientes.', 'posterA', {x: 0.505, y: 0.305, w: 0.16, h: 0.105}),
        item('alitas-pollo', 'Alitas de pollo', 4, 'Alitas de pollo con salsa.', 'posterA', {x: 0.67, y: 0.305, w: 0.16, h: 0.105}),
        item('ensalada', 'Ensalada', 4, 'Ensalada fresca con vegetales visibles.', 'posterA', {x: 0.835, y: 0.305, w: 0.15, h: 0.105}),
      ],
    },
    {
      title: 'Kebabs y especialidades',
      items: [
        item('pan-pita', 'Pan pita', 4.5, 'Pan pita con carne, ensalada y salsa.', 'posterA', {x: 0.01, y: 0.425, w: 0.19, h: 0.125}),
        item('kebab-rollo', 'Kebab rollo', 5, 'Rollo de kebab con carne, vegetales y salsa.', 'posterA', {x: 0.205, y: 0.425, w: 0.19, h: 0.125}),
        item('rollo-falafel', 'Rollo falafel', 6, 'Rollo de falafel con vegetales y salsa.', 'posterA', {x: 0.4, y: 0.425, w: 0.19, h: 0.125}),
        item('rollo-gratinado', 'Rollo gratinado', 6.5, 'Rollo de kebab gratinado con queso visible.', 'posterA', {x: 0.595, y: 0.425, w: 0.19, h: 0.125}),
        item('taco-frances', 'Taco francés', 6.5, 'Taco relleno con carne, patatas y salsa.', 'posterA', {x: 0.79, y: 0.425, w: 0.19, h: 0.125}),
        item('kebab-bocadillo', 'Kebab bocadillo', 5, 'Bocadillo de kebab con ensalada y salsa.', 'posterA', {x: 0.01, y: 0.55, w: 0.135, h: 0.14}),
        item('bocadillo-pechuga', 'Bocadillo pechuga', 6, 'Bocadillo de pechuga de pollo con vegetales.', 'posterA', {x: 0.15, y: 0.55, w: 0.135, h: 0.14}),
        item('plato-kebab', 'Plato kebab', 6.5, 'Kebab con patatas o arroz, como indica el póster.', 'posterA', {x: 0.29, y: 0.55, w: 0.135, h: 0.14}),
        item('plato-gratinado-normal', 'Plato gratinado normal', 7, 'Plato gratinado con queso visible.', 'posterA', {x: 0.43, y: 0.55, w: 0.135, h: 0.14}),
        item('plato-gratinado-grande', 'Plato gratinado grande', 10, 'Ración grande de plato gratinado.', 'posterA', {x: 0.57, y: 0.55, w: 0.135, h: 0.14}),
        item('pollo-biryani', 'Pollo biryani', 8, 'Arroz especiado con pollo.', 'posterA', {x: 0.71, y: 0.55, w: 0.135, h: 0.14}),
        item('pollo-biryani-dos', 'Pollo biryani 2 personas', 13, 'Bandeja de biryani para compartir entre dos.', 'posterA', {x: 0.85, y: 0.55, w: 0.14, h: 0.14}),
      ],
    },
    {
      title: 'Hamburguesas y brasa',
      items: [
        item('hamburguesa-clasica', 'Hamburguesa clásica', 4, 'Hamburguesa con carne, pan, lechuga, tomate y salsas visibles.', 'posterA', {x: 0.01, y: 0.7, w: 0.16, h: 0.14}),
        item('hamburguesa-doble', 'Hamburguesa doble', 6.5, 'Hamburguesa con doble carne y queso visible.', 'posterA', {x: 0.175, y: 0.7, w: 0.16, h: 0.14}),
        item('cuarto-pollo-patatas', '1/4 pollo + patatas', 6.5, 'Cuarto de pollo asado con patatas.', 'posterA', {x: 0.34, y: 0.7, w: 0.16, h: 0.14}),
        item('medio-pollo-patatas', '1/2 pollo + patatas', 9.5, 'Medio pollo asado con patatas.', 'posterA', {x: 0.505, y: 0.7, w: 0.16, h: 0.14}),
        item('pollo-entero-patatas', 'Pollo entero + patatas', 12.5, 'Pollo entero asado con patatas.', 'posterA', {x: 0.67, y: 0.7, w: 0.16, h: 0.14}),
        item('carne-brasa', 'Carne a la brasa', 8, 'Carne a la brasa con patatas y ensalada.', 'posterA', {x: 0.835, y: 0.7, w: 0.15, h: 0.14}),
      ],
    },
    {
      title: 'Box, bebidas y extras',
      items: [
        item('box-kebab-pequeno', 'Box kebab pequeño', 4, 'Box de kebab con patatas y complementos visibles.', 'posterA', {x: 0.01, y: 0.84, w: 0.12, h: 0.12}),
        item('box-kebab-grande', 'Box kebab grande', 5, 'Box grande de kebab con patatas y complementos visibles.', 'posterA', {x: 0.14, y: 0.84, w: 0.12, h: 0.12}),
        item('salsa-pequena', 'Salsa pequeña', 0.5, 'Tarrina pequeña de salsa.', 'posterA', {x: 0.8, y: 0.84, w: 0.19, h: 0.12}),
        item('salsa-mediana', 'Salsa mediana', 1, 'Tarrina mediana de salsa.', 'posterA', {x: 0.8, y: 0.84, w: 0.19, h: 0.12}),
        item('salsa-grande', 'Salsa grande', 1.5, 'Tarrina grande de salsa.', 'posterA', {x: 0.8, y: 0.84, w: 0.19, h: 0.12}),
        item('extra-carne', 'Extra carne', 1, 'Extra de carne para añadir al pedido.', 'posterA', {x: 0.8, y: 0.91, w: 0.19, h: 0.07}),
        item('extra-queso', 'Extra queso', 1, 'Extra de queso para añadir al pedido.', 'posterA', {x: 0.8, y: 0.91, w: 0.19, h: 0.07}),
      ],
    },
  ],
  menus: [
    {
      title: 'Menús completos',
      items: [
        item('menu-pan-pita', 'Menú pan pita', 6.5, 'Pan pita con patatas y bebida.', 'posterB', {x: 0.01, y: 0.205, w: 0.15, h: 0.14}),
        item('menu-kebab-rollo', 'Menú kebab rollo', 7.5, 'Kebab rollo con patatas y bebida.', 'posterB', {x: 0.17, y: 0.205, w: 0.15, h: 0.14}),
        item('menu-rollo-falafel', 'Menú kebab rollo falafel', 8, 'Rollo falafel con patatas y bebida.', 'posterB', {x: 0.33, y: 0.205, w: 0.15, h: 0.14}),
        item('menu-rollo-gratinado', 'Menú kebab rollo gratinado', 8.5, 'Rollo gratinado con patatas y bebida.', 'posterB', {x: 0.49, y: 0.205, w: 0.15, h: 0.14}),
        item('menu-rollo-xl', 'Menú rollo XL', 9.5, 'Rollo XL con patatas y bebida.', 'posterB', {x: 0.65, y: 0.205, w: 0.15, h: 0.14}),
        item('menu-rollo-falafel', 'Menú rollo falafel', 8.5, 'Rollo falafel con patatas y bebida.', 'posterB', {x: 0.81, y: 0.205, w: 0.17, h: 0.14}),
        item('menu-taco-frances', 'Menú taco francés', 8.5, 'Taco francés con patatas y bebida.', 'posterB', {x: 0.01, y: 0.35, w: 0.15, h: 0.13}),
        item('menu-plato', 'Menú plato', 9, 'Plato kebab con patatas o arroz y bebida.', 'posterB', {x: 0.17, y: 0.35, w: 0.15, h: 0.13}),
        item('menu-box-pequeno', 'Menú box pequeño', 5.5, 'Box pequeño con patatas y bebida.', 'posterB', {x: 0.33, y: 0.35, w: 0.15, h: 0.13}),
        item('menu-box-grande', 'Menú box grande', 6.5, 'Box grande con patatas y bebida.', 'posterB', {x: 0.49, y: 0.35, w: 0.15, h: 0.13}),
        item('menu-hamburguesa-normal', 'Menú hamburguesa normal', 6.5, 'Hamburguesa con patatas y bebida.', 'posterB', {x: 0.65, y: 0.35, w: 0.15, h: 0.13}),
        item('menu-hamburguesa-doble', 'Menú hamburguesa doble', 9.5, 'Hamburguesa doble con patatas y bebida.', 'posterB', {x: 0.81, y: 0.35, w: 0.17, h: 0.13}),
        item('menu-pizza-normal', 'Menú pizza normal', 9.5, 'Pizza normal con bebida.', 'posterB', {x: 0.01, y: 0.49, w: 0.15, h: 0.13}),
        item('menu-pizza-grande', 'Menú pizza grande', 14.5, 'Pizza grande con bebida.', 'posterB', {x: 0.17, y: 0.49, w: 0.15, h: 0.13}),
        item('menu-bocadillo-pechuga', 'Menú bocadillo pechuga', 7, 'Bocadillo de pechuga con patatas y bebida.', 'posterB', {x: 0.33, y: 0.49, w: 0.15, h: 0.13}),
        item('menu-bocadillo-kebab', 'Menú bocadillo kebab', 6.5, 'Bocadillo de kebab con patatas y bebida.', 'posterB', {x: 0.49, y: 0.49, w: 0.15, h: 0.13}),
        item('menu-gratinado-pequeno', 'Menú gratinado pequeño', 8.5, 'Gratinado pequeño con bebida.', 'posterB', {x: 0.65, y: 0.49, w: 0.15, h: 0.13}),
        item('menu-gratinado-grande', 'Menú gratinado grande', 11.5, 'Gratinado grande con bebida.', 'posterB', {x: 0.81, y: 0.49, w: 0.17, h: 0.13}),
        item('menu-cuarto-pollo', '1/4 de pollo a la brasa', 8, 'Cuarto de pollo a la brasa con patatas y bebida.', 'posterB', {x: 0.01, y: 0.63, w: 0.15, h: 0.13}),
        item('menu-medio-pollo', '1/2 pollo a la brasa', 11, 'Medio pollo a la brasa con patatas y bebida.', 'posterB', {x: 0.17, y: 0.63, w: 0.15, h: 0.13}),
        item('menu-pollo-entero', 'Pollo entero', 15.5, 'Pollo entero a la brasa con patatas y bebida.', 'posterB', {x: 0.33, y: 0.63, w: 0.15, h: 0.13}),
        item('plato-familiar-kebab', 'Plato familiar kebab', 14.5, 'Plato familiar con arroz y patatas.', 'posterB', {x: 0.49, y: 0.63, w: 0.15, h: 0.13}),
        item('menu-infantil', 'Menú infantil', 6, 'Hamburguesa o nuggets con patatas y bebida.', 'posterB', {x: 0.65, y: 0.63, w: 0.15, h: 0.13}),
        item('pollo-baryani-bebida', 'Pollo baryani con bebida', 10, 'Pollo baryani con bebida.', 'posterB', {x: 0.81, y: 0.63, w: 0.17, h: 0.13}),
      ],
    },
  ],
  bebidas: [
    {
      title: 'Bebidas',
      items: [
        item('agua-pequena', 'Agua pequeña', 1, 'Botella de agua pequeña.', 'posterB', {x: 0.21, y: 0.76, w: 0.1, h: 0.13}),
        item('agua-grande', 'Agua grande', 2, 'Botella de agua grande.', 'posterB', {x: 0.31, y: 0.76, w: 0.1, h: 0.13}),
        item('zumo', 'Zumo', 1.5, 'Zumo en formato individual.', 'posterB', {x: 0.41, y: 0.76, w: 0.1, h: 0.13}),
        item('refresco-lata-menu', 'Refresco lata', 1.5, 'Refresco en lata.', 'posterB', {x: 0.01, y: 0.76, w: 0.1, h: 0.13}),
        item('refresco-botella-menu', 'Refresco botella', 3, 'Refresco en botella.', 'posterB', {x: 0.11, y: 0.76, w: 0.1, h: 0.13}),
      ],
    },
  ],
  postres: [
    {
      title: 'Postres',
      items: [
        item('milfay', 'Milfay', 2.5, 'Postre de hojaldre y crema visible en el póster.', 'posterB', {x: 0.42, y: 0.76, w: 0.1, h: 0.13}),
        item('arroz-leche', 'Arroz con leche', 2.5, 'Arroz con leche.', 'posterB', {x: 0.53, y: 0.76, w: 0.1, h: 0.13}),
        item('helado', 'Helado', 2.5, 'Helado.', 'posterB', {x: 0.64, y: 0.76, w: 0.1, h: 0.13}),
      ],
    },
  ],
};

const productIndex = new Map();
Object.values(catalog).flat().forEach((group) => group.items.forEach((product) => productIndex.set(product.id, product)));

const cartState = new Map();
const posterCache = new Map();
const euroFormatter = new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'});

const formatEuro = (value) => euroFormatter.format(value);

const formatPdfDate = (date) => new Intl.DateTimeFormat('es-ES', {
  dateStyle: 'short',
  timeStyle: 'short',
}).format(date);

const createPdfFilename = (date) => {
  const isoDate = date.toISOString().slice(0, 10);
  return `pedido-sufi-hermanos-parras-${isoDate}.pdf`;
};

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

const drawProductCrop = (canvas, image, crop) => {
  const context = canvas.getContext('2d');
  const sourceX = Math.round(image.naturalWidth * crop.x);
  const sourceY = Math.round(image.naturalHeight * crop.y);
  const sourceWidth = Math.round(image.naturalWidth * crop.w);
  const sourceHeight = Math.round(image.naturalHeight * crop.h);

  canvas.width = 640;
  canvas.height = 328;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height);
};

const renderProductCard = (product) => {
  const article = document.createElement('article');
  article.className = 'product-card';
  article.dataset.productId = product.id;
  article.innerHTML = `
    <figure class="product-card__media">
      <canvas class="product-card__canvas" role="img" aria-label="Imagen recortada de ${product.name}"></canvas>
      <span class="product-card__fallback" hidden>Imagen no disponible</span>
    </figure>
    <div class="product-card__body">
      <span class="product-card__eyebrow mono">SUFI KEBAB · selección</span>
      <h3>${product.name}</h3>
      <p class="product-card__description">${product.description}</p>
      <div class="product-card__footer">
        <strong class="product-card__price">${formatEuro(product.price)}</strong>
        <button class="product-card__add" type="button" data-add-to-cart="${product.id}">Añadir</button>
      </div>
    </div>
  `;

  const canvas = article.querySelector('canvas');
  const fallback = article.querySelector('.product-card__fallback');
  loadPoster(product.source)
    .then((image) => drawProductCrop(canvas, image, product.crop))
    .catch(() => {
      canvas.hidden = true;
      fallback.hidden = false;
    });

  return article;
};

const renderCatalog = () => {
  Object.entries(catalog).forEach(([sectionId, groups]) => {
    const content = document.querySelector(`[data-catalog-content="${sectionId}"]`);
    const count = document.querySelector(`[data-section-count="${sectionId}"]`);
    const totalItems = groups.reduce((total, group) => total + group.items.length, 0);
    if (!content) return;

    if (count) count.textContent = `${totalItems} opciones`;

    groups.forEach((group) => {
      const subsection = document.createElement('section');
      subsection.className = 'catalog-subsection';
      subsection.setAttribute('aria-labelledby', `${sectionId}-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
      subsection.innerHTML = `
        <h3 class="catalog-subsection__heading" id="${sectionId}-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">${group.title}</h3>
        <div class="product-grid"></div>
      `;
      const grid = subsection.querySelector('.product-grid');
      group.items.forEach((product) => {
        productIndex.set(product.id, product);
        grid.append(renderProductCard(product));
      });
      content.append(subsection);
    });
  });
};

const calculateTotals = () => {
  const lines = [...cartState.entries()].map(([productId, quantity]) => {
    const product = productIndex.get(productId);
    return {
      product,
      quantity,
      subtotal: product.price * quantity,
    };
  });

  return {
    lines,
    totalUnits: lines.reduce((sum, line) => sum + line.quantity, 0),
    total: lines.reduce((sum, line) => sum + line.subtotal, 0),
  };
};

const announce = (message) => {
  if (elements.cartStatus) elements.cartStatus.textContent = message;
};

const renderCart = () => {
  const {lines, totalUnits, total} = calculateTotals();
  elements.cartCount.textContent = String(totalUnits);
  elements.cartCount.setAttribute('aria-label', `${totalUnits} ${totalUnits === 1 ? 'producto' : 'productos'}`);
  elements.cartFabTotal.textContent = formatEuro(total);
  elements.cartTotal.textContent = formatEuro(total);
  elements.cartPrint.disabled = lines.length === 0;

  if (lines.length === 0) {
    elements.cartItems.innerHTML = '';
    elements.cartItems.append(elements.cartEmpty);
    return;
  }

  elements.cartItems.innerHTML = lines.map(({product, quantity, subtotal}) => `
    <div class="cart-line" data-cart-line="${product.id}">
      <div>
        <span class="cart-line__name">${product.name}</span>
        <span class="cart-line__meta">${formatEuro(product.price)} unidad</span>
        <div class="cart-line__controls">
          <button class="cart-line__control" type="button" data-cart-decrement="${product.id}" aria-label="Disminuir cantidad de ${product.name}">−</button>
          <span class="cart-line__quantity" aria-label="Cantidad ${quantity}">${quantity}</span>
          <button class="cart-line__control" type="button" data-cart-increment="${product.id}" aria-label="Aumentar cantidad de ${product.name}">+</button>
          <button class="cart-line__remove" type="button" data-cart-remove="${product.id}">Eliminar</button>
        </div>
      </div>
      <strong class="cart-line__subtotal">${formatEuro(subtotal)}</strong>
    </div>
  `).join('');
};

const addToCart = (productId) => {
  cartState.set(productId, (cartState.get(productId) || 0) + 1);
  const product = productIndex.get(productId);
  renderCart();
  announce(`${product.name} añadido al carrito.`);
};

const decrementItem = (productId) => {
  const currentQuantity = cartState.get(productId) || 0;
  if (currentQuantity <= 1) cartState.delete(productId);
  else cartState.set(productId, currentQuantity - 1);
  renderCart();
};

const removeItem = (productId) => {
  const product = productIndex.get(productId);
  cartState.delete(productId);
  renderCart();
  announce(`${product.name} eliminado del carrito.`);
};

const setCartOpen = (isOpen) => {
  elements.cartPanel.classList.toggle('is-open', isOpen);
  elements.cartPanel.setAttribute('aria-hidden', String(!isOpen));
  elements.cartFab.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) elements.cartClose.focus();
};

const wrapPdfText = (doc, text, maxWidth) => doc.splitTextToSize(text, maxWidth);

const downloadOrderPdf = () => {
  const {lines, total} = calculateTotals();
  if (lines.length === 0) return;

  const PdfConstructor = window.jspdf?.jsPDF;
  if (!PdfConstructor) {
    announce('No se pudo cargar el PDF. Usa la impresión del navegador como alternativa.');
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
    doc.text('PEDIDO · C. HERMANOS PARRAS', left, 27);
    doc.setTextColor(120, 120, 120);
    doc.text(formatPdfDate(new Date()), right, 27, {align: 'right'});
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
  doc.text('C. Hermanos Parras 10 · Callosa de Segura 03360', left, y);
  y += 14;

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

  drawTableHeader();
  doc.setFontSize(10);

  lines.forEach(({product, quantity, subtotal}) => {
    const productLines = wrapPdfText(doc, product.name, 88);
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
    doc.text(formatEuro(product.price), right - 53, y);
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
  y += 32;
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Pedido preparado para mostrar en tienda. Confirma ingredientes, alérgenos y disponibilidad.', left, y);
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
  if (removeButton) {
    removeItem(removeButton.dataset.cartRemove);
  }
});

elements.cartFab.addEventListener('click', () => {
  const isOpen = elements.cartPanel.classList.contains('is-open');
  setCartOpen(!isOpen);
});

elements.cartClose.addEventListener('click', () => setCartOpen(false));
elements.cartPrint.addEventListener('click', downloadOrderPdf);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && elements.cartPanel.classList.contains('is-open')) {
    setCartOpen(false);
    elements.cartFab.focus();
  }
});
