const refs = {
    btnContainer: document.querySelector('.customer_swipe_container'),
    articleContainer: document.querySelector('.customer__box'),
  };
  
  refs.btnContainer.addEventListener('click', swipeComment);
  
  function swipeComment (e) {
  
    if (e.target.type === 'button') {
      const chosenBtn = e.target;
      const btnList = [...e.currentTarget.children];
      const articleList = [...refs.articleContainer.children];
  
      removeClass(btnList, 'chosen');
      removeClass(articleList, 'card_shown');
  
      chosenBtn.classList.add('chosen');
      const chosenBtnIndex = btnList.indexOf(chosenBtn);
  
      articleList[chosenBtnIndex].classList.add('card_shown');
    }
  };
  
  function removeClass(list, className) {
    const listArray = [...list];
    listArray.forEach(listEl => {
      if (listEl.classList.contains(className)) {
        listEl.classList.remove(className);
      };
    });
  };