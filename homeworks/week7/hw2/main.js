const question = document.querySelector('.section__faq');
// const answer = document.querySelector(".section__answer hidden")

question.addEventListener('click', (e) => {
  // console.log(e.target)
  // console.log(e.target.children)
  // e.target.children[2].classList.toggle("hidden")

  /* 看完作業檢討後，知道怎麼抓祖先元素，進行下列修改 */

  const element = e.target.closest('.section__question');
  if (element) {
    element.children[2].classList.toggle('hidden');
  }
});
