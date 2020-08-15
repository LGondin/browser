const setScore = response => {
  const elementSubTitle = document.querySelector('h2')
  const points = Number(elementSubTitle.innerText)
  elementSubTitle.innerText = response ? points + 10 : points - 10
}

export default setScore
