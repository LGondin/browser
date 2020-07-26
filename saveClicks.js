const elementsCardStyle = document.querySelectorAll('.card-style') // Const que me criou um array com todos os itens que tem classe card-style

// array anterior rodando com um loop e usando a function para criar um evento click a click que da um log de?
elementsCardStyle.forEach(function listCardStyle(currentItem) {
  currentItem.addEventListener('click', function saveClick(event) {
    console.log(event.target.className)
  })
})
