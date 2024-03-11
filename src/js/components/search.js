const api = './../data.json'
const stores = []

fetch(api)
    .then(res => res.json())
    .then(data => {
      data.forEach(element => {
        stores.push(element)
      });
    });

function getOptions(word, stores){
  return stores.filter(s => {
    const regex = new RegExp(word, 'gi')
    return s.name.match(regex)
  })
}
const searchInput = document.querySelector('.form__input')
const searchList = document.querySelector('.dropdown')
function displayOptions(e){
  const options = getOptions(e.value, stores)
  const html = options.map(store => {
    return `
    <li class="dropdown__item">
      <a href="${store.url}" class="dropdown__link"></a>
      <div class="dropdown__image">
        <img src="${store.src}" alt="">
      </div>
      <div class="dropdown__name">${store.name}</div>
    </li>
    `
  }).slice(0, 3).join('')

  searchList.innerHTML = html ? html : 'Ничего не найдено'
}


searchInput.addEventListener('input', e => {
  displayOptions(e.target)
})
searchInput.addEventListener('click', e => {
  e.stopPropagation()
  searchList.style.display = 'block'
  displayOptions(e.target)
})
searchList.addEventListener('click', e => {
  e.stopPropagation()
})

document.body.addEventListener('click', e => {
  e.stopPropagation()
  searchList.style.display = null
})
