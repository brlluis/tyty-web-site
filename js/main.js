/**
 * ESCRITÓRIO DE ADVOCACIA MANUEL LUÍS - JAVASCRIPT
 * Interaction & Motion Design Layer
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Cabeçalho Dinâmico (Glassmorphism)
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 1b. Vídeo Hero → Fade para imagem estática ao terminar
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    heroVideo.addEventListener('ended', () => {
      heroVideo.classList.add('fade-out');
    });
  }

  // 2. Scroll Reveal (Animações de entrada profissionais)
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 3. Formulário Simplificado — Nome + Assunto → WhatsApp
  const bookingForm = document.getElementById('bookingForm');
  const WHATSAPP_NUMBER = '244922473668';

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName')?.value.trim();
      const subject = document.getElementById('caseSubject')?.value.trim();

      if (!name || !subject) {
        alert('Por favor, preencha o seu nome e o assunto.');
        return;
      }

      const whatsappMessage = 
`*SOLICITAÇÃO DE ASSESSORIA JURÍDICA*
*Escritório de Advocacia Manuel Luís - Malanje*

Olá, Dr. Manuel Luís. Gostaria de solicitar um agendamento de assessoria jurídica.

📋 *Nome:* ${name}

📝 *Assunto:*
${subject}

_Mensagem enviada a partir do website oficial._`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    });
  }
});
