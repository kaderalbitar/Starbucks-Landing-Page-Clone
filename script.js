const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const linkheaders = document.querySelectorAll('.linkheader');
const linkmenus = document.querySelectorAll('.linkmenu');

function navToggle() {
  btn.classList.toggle('open');
  nav.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

function linkToggle() {
  this.nextElementSibling.classList.toggle('hiddenmenu');
}

btn.addEventListener('click', navToggle);

linkheaders.forEach(linkheader => {
  linkheader.addEventListener('click', linkToggle);
});