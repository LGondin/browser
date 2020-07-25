// Ao clicar em qualquer um dos botoes no html
// o objetivo é que o texto do h1 se torne o valor dentro do botão

// 🌟 bonus: o texto do h1 se tornar: "O clicado foi: [numero do botao aqui]"

const title = document.querySelector('h1')
const allButtons = document.querySelectorAll('button')
allButtons.forEach(function(button){
  button.addEventListener('click', function clickButton() {
    title.innerText = `O clidado foi: ${button.innerText}`
  })
})
