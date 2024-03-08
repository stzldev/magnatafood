function toogleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  const image = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/logo site roxa.png")
  } else {
    image.setAttribute("src", "./assets/logo site amarela.png")
  }
}
