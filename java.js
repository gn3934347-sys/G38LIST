

let deferredPrompt;
const btnInstalar = document.getElementById('btnInstalar');

window.addEventListener('beforeinstallprompt', (e) => {
  // Impede que o navegador mostre o aviso padrão imediatamente
  e.preventDefault();
  // Salva o evento para ser disparado depois
  deferredPrompt = e;
  // Mostra o seu botão centralizado
  btnInstalar.style.display = 'block';
});

btnInstalar.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Mostra o prompt de instalação do navegador
    deferredPrompt.prompt();
    // Aguarda a escolha do usuário
    const { outcome } = await deferredPrompt.userChoice;
    // Limpa o prompt para que não possa ser usado novamente
    deferredPrompt = null;
    // Esconde o botão novamente
  }
});

// Esconde o botão se o app já estiver instalado
window.addEventListener('appinstalled', () => {
  btnInstalar.style.display = 'none';
  deferredPrompt = null;
  alert('Aplicativo instalado com sucesso!');
});
