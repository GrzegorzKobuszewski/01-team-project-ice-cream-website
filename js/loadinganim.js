const refs = {
    cardList: document.querySelector('.customer__box'),
  };


  window.addEventListener('load', (event) => {
    removeClass(refs.cardList,"unloaded")
  });


  function removeClass(list, className) {
    list.classList.remove(className);
  };