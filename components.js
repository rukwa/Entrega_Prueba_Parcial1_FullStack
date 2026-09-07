<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GasPro | Detalle de producto</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
</head>
<body>
<div id="site-header"></div>
<main class="container my-5" id="detalle-cont"></main>
<section class="container mb-5">
  <h4 class="mb-3" style="color:var(--primary-dark);">Productos relacionados</h4>
  <div class="row g-3" id="relacionados"></div>
</section>
<div id="site-footer"></div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/data.js"></script>
<script src="js/auth.js"></script>
<script src="js/components.js"></script>
<script src="js/validations.js"></script>
<script>
  renderHeader('productos'); renderFooter();

  const params = new URLSearchParams(window.location.search);
  const codigo = params.get('codigo');
  const p = productos.find(x => x.codigo === codigo) || productos[0];

  document.getElementById('detalle-cont').innerHTML = `
    <nav class="small text-muted mb-3"><a href="Index.html">Home</a> / <a href="Productos.html">${p.categoria}</a> / ${p.nombre}</nav>
    <div class="row g-4">
      <div class="col-md-6">
        <div class="icono-wrap rounded-4" style="height:320px;">${mediaProducto(p)}</div>
      </div>
      <div class="col-md-6">
        <span class="badge badge-categoria mb-2">${p.categoria}</span>
        <h2 class="fw-bold">${p.nombre}</h2>
        <p class="fs-3 text-primary fw-bold">$${p.precioResidencial.toLocaleString('es-CL')}</p>
        <p class="text-muted">${p.descripcion}</p>
        <p class="small">Precio comercial: $${p.precioComercial.toLocaleString('es-CL')} · Stock disponible: ${p.stock} ${p.unidad}(s)</p>
        ${p.codigo==='AC003' ? '<p class="small"><a href="BlogsDetalles1.html">📖 Lee cómo detectar una fuga de gas a tiempo</a></p>' : ''}
        ${p.categoria==='Reguladores' ? '<p class="small"><a href="BlogsDetalles2.html">📖 ¿Cada cuánto debo cambiar mi regulador?</a></p>' : ''}
        <div class="d-flex align-items-center gap-2 my-3">
          <label class="form-label mb-0">Cantidad</label>
          <input type="number" id="cantidad" value="1" min="1" class="form-control" style="width:90px;">
        </div>
        <button class="btn btn-accent btn-lg" onclick="agregarAlCarrito('${p.codigo}', parseInt(document.getElementById('cantidad').value||1))">Añadir al carrito</button>
      </div>
    </div>`;

  const relCont = document.getElementById('relacionados');
  productos.filter(x=>x.categoria===p.categoria && x.codigo!==p.codigo).slice(0,4).forEach(r=>{
    relCont.innerHTML += `
    <div class="col-6 col-md-3">
      <div class="card card-producto">
        <div class="icono-wrap">${mediaProducto(r)}</div>
        <div class="card-body">
          <h6 class="fw-bold">${r.nombre}</h6>
          <p class="text-primary fw-bold mb-2">$${r.precioResidencial.toLocaleString('es-CL')}</p>
          <a href="DetalleProductos.html?codigo=${r.codigo}" class="btn btn-sm btn-outline-secondary w-100">Ver</a>
        </div>
      </div>
    </div>`;
  });
</script>
</body>
</html>