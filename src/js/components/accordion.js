const faqItems = document.querySelectorAll('.promos-chars__item')

if(faqItems && faqItems.length > 0){
  faqItems.forEach(el => {
    const btn = el.querySelector('.promos-chars__heading')
    const content = el.querySelector('.promos-chars__text')
    btn.addEventListener('click', e => {
      e.preventDefault()
      let isActive = el.classList.toggle('active')

      content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null

    })
  })
}
