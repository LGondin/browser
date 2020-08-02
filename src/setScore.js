function setScore(response) {
  const elementSubTitle = document.querySelector('h2')
  const points = Number(elementSubTitle.innerText)
  if (response) {
    // success - True
    elementSubTitle.innerText = points + 10
  } else {
    // failure - False
    elementSubTitle.innerText = points - 10
  }
}

export default setScore
