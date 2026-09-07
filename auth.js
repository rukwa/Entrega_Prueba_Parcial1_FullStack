<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GasPro | Nosotros</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
</head>
<body>
<div id="site-header"></div>
<main class="container my-5">
  <section class="row align-items-center g-4 mb-5">
    <div class="col-md-6">
      <h1 style="color:var(--primary-dark);font-weight:800;">Quiénes somos</h1>
      <p><p>GasPro es una distribuidora de gas licuado a domicilio ubicada en Chillán, Región de Ñuble, con más de 25 años de trayectoria. Entregamos cilindros, reguladores y accesorios a clientes residenciales y comerciales en Chillán y comunas aledañas.</p></p>
      <p>Contamos con 2 camiones de reparto, 3 repartidores, una operadora de llamadas y una administrador, atendiendo entre 80 y 120 pedidos diarios.</p>
      <p>Si quieres conocer más consejos de seguridad, visita nuestro <a href="Blogs.html">blog de noticias</a>, o si tienes dudas sobre algún pedido, puedes <a href="Contacto.html">contactarnos aquí</a>.</p>
    </div>
    <div class="col-md-6 text-center">
      <div style="width:220px;height:220px;margin:0 auto;" id="icon-nosotros"></div>
    </div>
  </section>

  <section class="mb-5">
    <h3 class="mb-3" style="color:var(--primary-dark);">Video: seguridad en el uso del gas licuado</h3>
    <p class="text-muted">Te invitamos a ver este video con recomendaciones clave para el uso seguro de tus cilindros de gas en el hogar.</p>
    <div class="ratio ratio-16x9" style="max-width:720px;">
      <iframe src="https://www.youtube.com/embed/uDAa0skqdBA" title="Recomendaciones de seguridad para gas LP" allowfullscreen></iframe>
    </div>
  </section>

  <section>
    <h3 class="mb-3" style="color:var(--primary-dark);">Nuestro equipo</h3>
    <div class="row g-3">
      <div class="col-md-3 col-6"><div class="card p-3 text-center h-100"><strong>Matias Humberto Quinchen</strong><br><span class="text-muted small">Administrador</span></div></div>
      <div class="col-md-3 col-6"><div class="card p-3 text-center h-100"><strong>Pedro Salazar</strong><br><span class="text-muted small">Operador de despacho</span></div></div>
      <div class="col-md-3 col-6"><div class="card p-3 text-center h-100"><strong>Equipo de reparto</strong><br><span class="text-muted small">3 repartidores</span></div></div>
      <div class="col-md-3 col-6"><div class="card p-3 text-center h-100"><strong>Equipo encargado del desarrollo de esta pagina web</strong><br><span class="text-muted small">Integrantes: Matias Echeverria, Jorge Zarate y Enzo Morales</span></div></div>
    </div>
  </section>
</main>
<div id="site-footer"></div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/data.js"></script>
<script src="js/auth.js"></script>
<script src="js/components.js"></script>
<script>
  renderHeader('nosotros'); renderFooter();
  document.getElementById('icon-nosotros').innerHTML = iconoCilindro('#4b1f7a');
</script>
</body>
</html>