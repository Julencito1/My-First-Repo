function actualizarContador() {
    const txtarea = document.getElementById('comment')
    const contadorCaracteres = document.querySelector('.contador')
    const letras = txtarea.value.length
  
    contadorCaracteres.innerHTML = `${letras} / 200`;
} 



let opcion1 = document.querySelector('.comentarios')
let opcion2 = document.querySelector('.comentarios-yo')
let btnimp = document.getElementById('btnimportante')


btnimp.addEventListener('click', function() {
    opcion1.style.display = 'none'
    opcion2.style.display = 'block'
})



const flecder = document.getElementById('flec-der');
const tdscoment = document.querySelector('.tdscoment');
const elementos = tdscoment.children;
const flecizq = document.getElementById('flec-izq')

const displacementAmount = 410
const maxClicks = elementos.length - 2; 

let clicks = 0;

flecder.addEventListener('click', function() {
  if (clicks < maxClicks) {
    clicks++;
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.transform = `translateX(-${displacementAmount * clicks}px)`;
    }
    flecizq.style.display = "block"; 
  }
  if (clicks === maxClicks) {
    flecder.style.display = "none"; 
  }
});

flecizq.addEventListener('click', function() {
  if (clicks > 0) {
    clicks--;
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.transform = `translateX(-${displacementAmount * clicks}px)`;
    }
    flecder.style.display = "block";
  }
  if (clicks === 0) {
    flecizq.style.display = "none"; 
  }
});



