const popup = document.querySelector('.popup')
const popupBody = document.querySelector('.popup__body')
const popupBtns = document.querySelectorAll('[data-popup-btn]')
const popupClose = document.querySelector('.popup__close')
popupBtns.forEach(btn => {
  const btnRed = btn.querySelector('.promo-item__use')
  const btnPromo = btn.querySelector('.promo-item__promo')
  let activeRed = null;
  btn.addEventListener('click', e => {
    popup.classList.add('active')
    btnRed.style.display = 'none'

    activeRed = btnRed.classList.add('active')
  })
  // if(window.matchMedia('(min-width: 768px)').matches){
  //   btn.addEventListener('mouseenter', e => {
  //     if(activeRed) return
  //     btnRed.textContent = 'Открыть промкод'
  //   })
  //   btn.addEventListener('mouseleave', e => {
  //     if(activeRed) return
  //     btnRed.textContent = 'Воспользоваться'
  //   })
  // }

})
popup.addEventListener('click', e => {
  e.preventDefault()
  e.stopPropagation()

  popup.classList.remove('active')
})
popupClose.addEventListener('click', e => {
  e.preventDefault()
  e.stopPropagation()

  popup.classList.remove('active')
})
popupBody.addEventListener('click', e => {
  e.stopPropagation()
})

const copyBtn = document.querySelector("[data-popup-copy]")

import ClipboardJS from "clipboard"
var clipboard = new ClipboardJS(copyBtn);
clipboard.on('success', function (e) {
  copyBtn.textContent = 'Скопировано!'
  copyBtn.classList.add('active')
  e.clearSelection();
});

clipboard.on('error', function (e) {
  console.error('Error:', error);
});


