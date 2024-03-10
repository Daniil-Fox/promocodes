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
    btnPromo.style.justifyContent = 'center'
    activeRed = btnRed.classList.add('active')
  })

    btn.addEventListener('mouseenter', e => {
      if(activeRed) return
      btnRed.textContent = 'Открыть промкод'
    })
    btn.addEventListener('mouseleave', e => {
      if(activeRed) return
      btnRed.textContent = 'Воспользоваться'
    })

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
copyBtn.addEventListener("click", function() {
  const value = document.querySelector("[data-popup-value]")
  navigator.clipboard.writeText(value.innerText).then(function() {
    copyBtn.textContent = 'Скопировано!'
    copyBtn.classList.add('active')
  }).catch(function(error) {
      console.error('Error:', error);
  });
});
