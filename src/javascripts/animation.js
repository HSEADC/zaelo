(function initQuestionArrow() {
  const arrow  = document.querySelector('.question__arrow');
  const target = document.querySelector('.question__text');
  if (!arrow || !target) return;

  if (!('IntersectionObserver' in window)) {
    arrow.classList.remove('is-hidden');
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          arrow.classList.remove('is-hidden');
          io.disconnect();
          return;
        }
      }
    },
    {
      threshold: 0.4,
      rootMargin: '0px 0px -20% 0px',
    }
  );

  io.observe(target);
})();


(function initQuestionsRowStars() {
  const target = document.querySelector('.questions__row');
  if (!target) return;

  // Если браузер не поддерживает IO, просто показываем сразу
  if (!('IntersectionObserver' in window)) {
    target.classList.remove('is-hidden');
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          target.classList.remove('is-hidden');
          io.disconnect(); // отключаем слежку, срабатывает 1 раз
          return;
        }
      }
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  io.observe(target);
})();

(function initWhyActions() {
  const target = document.querySelector('.why__actions__wrapper');
  if (!target) return;

  if (!('IntersectionObserver' in window)) {
    target.classList.remove('is-hidden');
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          target.classList.remove('is-hidden');
          io.disconnect();
          return;
        }
      }
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  io.observe(target);
})();


(function initStatisticsArrows() {
  const arrow1 = document.querySelector('.statistics__arrow-1');
  const arrow2 = document.querySelector('.statistics__arrow-2');
  const target = document.querySelector('.statistics__arrow__wrapper');
  
  if (!arrow1 || !target) return;

  if (!('IntersectionObserver' in window)) {
    arrow1.classList.remove('is-hidden');
    if (arrow2) arrow2.classList.remove('is-hidden');
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          arrow1.classList.remove('is-hidden');
          
          if (arrow2) {
            setTimeout(() => {
              arrow2.classList.remove('is-hidden');
            }, 1500); 
          }
          
          io.disconnect();
          return;
        }
      }
    },
    {
      threshold: 0.4,
      rootMargin: '0px 0px -20% 0px',
    }
  );

  io.observe(target);
})();


(function initPrinciples() {
  const target = document.querySelector('.principles__wrapper');
  if (!target) return;

  if (!('IntersectionObserver' in window)) {
    target.classList.remove('is-hidden');
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          target.classList.remove('is-hidden');
          io.disconnect();
          return;
        }
      }
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  io.observe(target);
})();