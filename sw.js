const arquivosCache = [
  './',                 // Ponto crucial para o GitHub Pages
  'index.html',
  'style.css',
  'manifest.json'
];
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js') // Certo: sem barra no início!
    .then(() => console.log('Service Worker registrado com sucesso!'))
    .catch(err => console.log('Erro ao registrar:', err));
}
