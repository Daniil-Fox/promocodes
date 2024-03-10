const promoItems = document.querySelectorAll('.promo-more')


promoItems.forEach(el => {
  const header = el.querySelector('.promo-more__header')
  const desc = el.querySelector('.promo-more__desc')
  header.addEventListener('click', e => {

    let isActive = desc.classList.toggle('active')

    desc.style.maxHeight = isActive ? desc.scrollHeight + 'px' : null
  })
})
