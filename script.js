document.addEventListener('DOMContentLoaded', function () {
  const dobasGomb = document.getElementById('dobasGomb')
  const elsoDobokocka = document.getElementById('elsoDobokocka')
  const masodikDobokocka = document.getElementById('masodikDobokocka')
  const osszegSpan = document.getElementById('osszeg')

  dobasGomb.addEventListener('click', function () {
    // Első dobókocka eredménye (1 és 6 között)
    const elsoDobas = Math.floor(Math.random() * 6) + 1
    elsoDobokocka.textContent = generateDice(elsoDobas)

    // Második dobókocka eredménye (1 és 6 között)
    const masodikDobas = Math.floor(Math.random() * 6) + 1
    masodikDobokocka.textContent = generateDice(masodikDobas)

    // Összeg kiszámítása
    const osszeg = elsoDobas + masodikDobas
    osszegSpan.textContent = osszeg
  })

  // Segédfunkció a kocka generálásához
  function generateDice(value) {
    const diceFaces = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
    return diceFaces[value]
  }
})
