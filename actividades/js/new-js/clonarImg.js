/****
 uso 
 .boxPegarImg {
        width: 80px; /// el ancho y alto de la imagen 
        height: 80px; /// el ancho y alto de la imagen 
        border: solid 1px silver;
        text-align: center;
    }

<img src="img/i2_p88_act1.png" alt="" class="cloneImg"> /// imagen que se va a pegar

<div class="boxPegarImg"></div> /// lugar donde se va a pegar la imagen seleccionada
// para validar la iamgen correcta se debe agregar un id a cada boxPegarImg y dentro de cada id obtener el scr de la imagen y comparar si es la imagen correcta

 */

// Seleccionamos todas las imágenes con la clase 'cloneImg'
let images = document.querySelectorAll('.cloneImg');

let srcImg = '';

// Agregamos un evento de clic a cada imagen
images.forEach(image => {
   image.addEventListener('click', function () {
      images.forEach(img => img.classList.remove('selected'));
      image.classList.add('selected');
      srcImg = image.getAttribute('src');

      let cajaInfo = document.querySelectorAll('.boxPegarImg');
      cajaInfo.forEach(caja => {
         caja.classList.add('pegar_imagen');
      });
   });

});


// Seleccionamos todas las cajas con la clase 'boxPegarImg'
let boxPegarImg = document.querySelectorAll('.boxPegarImg');

// Agregamos un evento de clic a cada caja
boxPegarImg.forEach(caja => {
   caja.addEventListener('click', function () {
      if (srcImg === '') {

         caja.classList.add('error-imagen');
         setTimeout(() => {
            caja.classList.remove('error-imagen');
         }, 500);
      } else {
         let newImg = document.createElement('img');
         newImg.setAttribute('src', srcImg);
         caja.innerHTML = '';
         caja.appendChild(newImg);
         srcImg = '';
         images.forEach(img => img.classList.remove('selected'));
         boxPegarImg.forEach(caja => {
            caja.classList.remove('pegar_imagen');
         });
      }
   });
});
