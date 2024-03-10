import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

var elem = document.querySelector('.grid');
if(elem){
  var iso = new Isotope( elem, {
    // options
    itemSelector: '.grid-item',
    // layoutMode: 'masonry',
    percentPosition: true,
    masonry : {
      columnWidth: '.grid-sizer',
    }
  });


  function checkSize(){
    if(window.matchMedia('(max-width: 850px)').matches){
      iso.destroy()
    } else {
      document.querySelector('.promos-container').addEventListener('click', e => {
        iso.layout()
      })
    }
  }
  window.addEventListener('resize', checkSize)
  checkSize()
}
const textBlocks = document.querySelectorAll('.text-block')
textBlocks.forEach(el => {
  const btn = el.querySelector('.read-more')

  btn.addEventListener('click', e => {
    const dots = el.querySelector(".dots");
    const moreText = el.querySelector(".more");

    let isActive = moreText.classList.toggle('active')

    if(isActive){
      moreText.style.display = 'inline'
      dots.style.display = 'none'
      btn.textContent = 'Скрыть'
    } else {
      moreText.style.display = null
      dots.style.display = null
      btn.textContent = 'Читать далее'
    }
  })
})
