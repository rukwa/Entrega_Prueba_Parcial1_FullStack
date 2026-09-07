:root{
  --primary:#0d1321;
  --primary-dark:#060911;
  --primary-light:#1f2a3d;
  --accent:#ff4d1c;
  --accent-dark:#d93c10;
  --bg:#f4f5f7;
  --text:#1b1f27;
  --gray:#6c757d;
  --danger:#d93025;
  --success:#1e8f4e;
}

*{box-sizing:border-box;}
body{
  font-family:'Segoe UI',Roboto,Arial,sans-serif;
  background:var(--bg);
  color:var(--text);
  padding-top:70px;
}

/* ===== NAVBAR ===== */
.navbar-gas{
  background:linear-gradient(90deg,var(--primary-dark),var(--primary));
  box-shadow:0 2px 10px rgba(0,0,0,.35);
  border-bottom:2px solid var(--accent);
}
.navbar-gas .navbar-brand{
  font-weight:800;
  letter-spacing:.5px;
  color:#fff !important;
  display:flex;align-items:center;gap:.6rem;
}
.navbar-gas .nav-link{
  color:#c7ccd6 !important;
  font-weight:500;
  transition:color .2s;
}
.navbar-gas .nav-link:hover,
.navbar-gas .nav-link.active{
  color:var(--accent) !important;
}
.cart-link{position:relative;}
#cart-badge{
  position:absolute;top:-6px;right:-12px;
  background:var(--accent);color:#fff;
  border-radius:50%;font-size:.7rem;
  padding:2px 6px;font-weight:700;
}

/* ===== HERO ===== */
.hero{
  background:linear-gradient(120deg,var(--primary-dark) 0%,var(--primary) 60%,var(--primary-light) 100%);
  color:#fff;border-radius:0 0 40px 40px;
  padding:60px 0;
  position:relative;
  overflow:hidden;
}
.hero::after{
  content:'';position:absolute;right:-80px;top:-80px;width:300px;height:300px;
  background:var(--accent);opacity:.15;border-radius:50%;
}
.hero h1{font-weight:800;font-size:2.6rem;}
.hero .btn-accent{font-size:1.05rem;padding:.7rem 1.6rem;}

.btn-accent{
  background:var(--accent);border:none;color:#fff;font-weight:700;
  transition:transform .15s,background .2s;
}
.btn-accent:hover{background:var(--accent-dark);color:#fff;transform:translateY(-2px);}

/* ===== CARDS PRODUCTO ===== */
.card-producto{
  border:none;border-radius:14px;overflow:hidden;
  box-shadow:0 4px 14px rgba(13,19,33,.12);
  transition:transform .2s,box-shadow .2s;
  height:100%;
}
.card-producto:hover{transform:translateY(-6px);box-shadow:0 10px 26px rgba(13,19,33,.25);}
.card-producto .icono-wrap{
  background:linear-gradient(135deg,#eef0f3,#f8f9fa);
  display:flex;align-items:center;justify-content:center;
  padding:14px;
  height:170px;
  border-bottom:3px solid var(--accent);
}
.card-producto .icono-wrap svg{width:70px;height:70px;}
.card-producto .icono-wrap img.img-producto{max-width:100%;max-height:100%;object-fit:contain;}
img.img-producto{max-width:100%;max-height:100%;object-fit:contain;display:block;margin:0 auto;}
.badge-categoria{background:var(--primary-light);}
.badge-critico{background:var(--danger);}

/* ===== FOOTER ===== */
footer.footer-gas{
  background:var(--primary-dark);color:#c7ccd6;margin-top:60px;padding:36px 0 18px;
  border-top:3px solid var(--accent);
}
footer.footer-gas a{color:#c7ccd6;text-decoration:none;}
footer.footer-gas a:hover{color:var(--accent);}
footer.footer-gas h6{color:#fff;font-weight:700;letter-spacing:.5px;}

/* ===== FORMULARIOS ===== */
.card-form{
  border:none;border-radius:16px;box-shadow:0 6px 24px rgba(13,19,33,.18);
}
.card-form .card-header{
  background:var(--primary);color:#fff;border-radius:16px 16px 0 0 !important;
  font-weight:700;border-bottom:3px solid var(--accent);
}
.form-label{font-weight:600;color:var(--primary);}
.form-text.sugerencia{color:var(--primary-light);}
.was-validated .form-control:invalid,
.form-control.is-invalid{border-color:var(--danger);}
.form-control.is-valid{border-color:var(--success);}

/* ===== ADMIN ===== */
.admin-wrapper{display:flex;min-height:calc(100vh - 70px);}
.admin-sidebar{
  width:230px;background:var(--primary-dark);color:#fff;padding:20px 0;flex-shrink:0;
  border-right:3px solid var(--accent);
}
.admin-sidebar a{
  display:block;padding:.65rem 1.4rem;color:#c7ccd6;text-decoration:none;font-weight:500;
}
.admin-sidebar a:hover,.admin-sidebar a.active{background:var(--primary-light);color:#fff;border-left:3px solid var(--accent);}
.admin-content{flex:1;padding:30px;}
@media(max-width:768px){
  .admin-wrapper{flex-direction:column;}
  .admin-sidebar{width:100%;display:flex;overflow-x:auto;border-right:none;border-bottom:3px solid var(--accent);}
  .admin-sidebar a{white-space:nowrap;}
}

/* ===== BLOGS / NOSOTROS ===== */
.blog-card{border:none;border-radius:14px;overflow:hidden;box-shadow:0 4px 14px rgba(13,19,33,.12);}
.blog-card .blog-icon{background:var(--primary);color:#fff;height:180px;display:flex;align-items:center;justify-content:center;border-bottom:3px solid var(--accent);}

/* ===== ZONAS ===== */
.tabla-zonas th{background:var(--primary);color:#fff;}

/* ===== CARRITO ===== */
.carrito-item{border-bottom:1px solid #e2e4e8;padding:14px 0;}
.qty-btn{width:32px;height:32px;border-radius:50%;}

/* Toast */
.toast-gas{
  position:fixed;bottom:20px;right:20px;background:var(--primary-dark);color:#fff;
  border-left:4px solid var(--accent);
  padding:12px 20px;border-radius:8px;box-shadow:0 4px 14px rgba(0,0,0,.3);
  z-index:9999;opacity:0;transform:translateY(20px);transition:.3s;
}
.toast-gas.show{opacity:1;transform:translateY(0);}