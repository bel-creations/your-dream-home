const img = document.querySelectorAll('.house-img')
const imgLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

img.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'))
    })
})


contenedorLight.addEventListener('click', (e) => {
    if(e.target !== imgLight){
        contenedorLight.classList.toggle('show')
        imgLight.classList.toggle('showImage')
    }
})

const aparecerImagen = (imagen) => {
    imgLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imgLight.classList.toggle('showImage')
}