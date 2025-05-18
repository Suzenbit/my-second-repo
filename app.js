/* ========= Helpers ========= */
const qs = sel => document.querySelector(sel);
const qsa = sel => [...document.querySelectorAll(sel)];

/* ========= Theme Toggle ========= */
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const root = document.documentElement;
if (localStorage.theme === 'dark' || (!localStorage.theme && prefersDark)) {
  root.classList.add('dark');
}
qs('#themeBtn').onclick = () => {
  root.classList.toggle('dark');
  localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
  qs('#themeBtn').textContent = root.classList.contains('dark') ? '☀️' : '🌙';
};

/* ========= Drawer ========= */
const drawer = qs('#drawer');
const overlay = qs('#overlay');
qs('#menuBtn').onclick = () => openDrawer(true);
qs('#closeDrawer').onclick = () => openDrawer(false);
overlay.onclick = () => { openDrawer(false); closeModal(); };

function openDrawer(open) {
  drawer.classList.toggle('open', open);
  overlay.classList.toggle('show', open);
  overlay.classList.toggle('hidden', !open);
}

/* ========= Demo Cards & Search ========= */
const data = Array.from({ length: 30 }, (_, i) => ({
  title: `Card #${i + 1}`,
  body: 'Lorem ipsum dolor sit amet consectetur.'
}));
const grid = qs('#cardGrid');
data.forEach(obj => {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `<h3>${obj.title}</h3><p>${obj.body}</p>`;
  grid.appendChild(card);
});
qs('#search').addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  qsa('.card').forEach(c =>
    c.classList.toggle('hidden', !c.textContent.toLowerCase().includes(term))
  );
});

/* ========= Modal ========= */
const aboutModal = qs('#aboutModal');
qs('#aboutLink').onclick = e => { e.preventDefault(); aboutModal.showModal(); overlay.classList.add('show'); };
qs('#closeModal').onclick = closeModal;
function closeModal() {
  if (aboutModal.open) aboutModal.close();
  overlay.classList.remove('show'); overlay.classList.add('hidden');
}
