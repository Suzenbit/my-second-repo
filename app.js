/* ===== Root & Theme ===== */
:root{--bg:#f9fafa;--fg:#111;--card:#fff;--accent:#0066ff;--shadow:0 4px 12px rgb(0 0 0 /.08);}
.dark{--bg:#111827;--fg:#f9fafb;--card:#1f2937;--shadow:0 4px 12px rgb(0 0 0 /.32);}
*,*:before,*:after{box-sizing:border-box;margin:0}
body{background:var(--bg);color:var(--fg);font-family:system-ui,sans-serif;line-height:1.55;min-height:100dvh;display:flex;flex-direction:column;transition:background .3s,color .3s}

/* ===== Top Bar ===== */
.topbar{display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;background:var(--card);box-shadow:var(--shadow)}
.topbar h1{font-size:1.2rem;margin-right:auto}
.topbar button,.back{font-size:1.3rem;background:none;border:none;color:var(--fg);cursor:pointer;text-decoration:none}

/* ===== Tile Menu (home) ===== */
.tile‑menu{display:grid;gap:1.25rem;padding:2rem;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));justify-items:center}
.tile{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;width:160px;height:160px;background:var(--card);border-radius:1rem;box-shadow:var(--shadow);text-decoration:none;color:var(--fg);transition:transform .25s}
.tile:hover{transform:translateY(-6px)}
.tile .emoji{font-size:3rem}
.tile .label{font-weight:600}

/* ===== Topic Page ===== */
.content{padding:2rem 1.25rem;max-width:720px;margin:auto}
.content h2{font-size:1.8rem;margin-bottom:.5rem}
.content h3{margin-top:1.5rem;margin-bottom:.5rem}
.content ul{padding-left:1.2rem}
.back‑link{margin-top:2rem}
a{color:var(--accent)}

/* Auto‑dark if user prefers */
@media (prefers-color-scheme:dark){
  :root:not(.light){--bg:#111827;--fg:#f9fafb;--card:#1f2937;--shadow:0 4px 12px rgb(0 0 0 /.32);}
}
