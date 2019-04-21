const FontFaceObserver = require('fontfaceobserver')

export function loadFonts() {
  loadFont(
    'Roboto',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900',
  )
  // Moved this to _document to be in the head
  // loadFont('Anton', 'https://fonts.googleapis.com/css?family=Anton')
}

function loadFont(name, url) {
  const link = document.createElement('link')
  link.href = url
  link.rel = 'stylesheet'
  document.head.appendChild(link)

  const font = new FontFaceObserver(name)
  font.load().then(() => {
    document.documentElement.classList.add(name)
  })
}
