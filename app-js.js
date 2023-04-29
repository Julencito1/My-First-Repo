let btn = document.getElementById('inicio-b')
let img = document.getElementById('inicio')
let txt1 = document.getElementById('inicio-h')
let txt2 = document.getElementById('inicio-t')
let nuevoT = document.querySelector('.trabajo1')
let comentarios = document.querySelector('.comentarios')
let sug = document.getElementById('btn6')
let comentarios2 = document.querySelector('.coments')

var visible = false;


btn.onclick = function() {
    img.style.display = 'none'
    txt1.style.display = 'none'
    txt2.style.display = 'none'
    btn.style.display = 'none'
    nuevoT.style.display = 'initial'
    
   
}


sug.addEventListener('click', function() {
    if(visible) {
        comentarios.style.display = 'none'
        visible = false;
    } else {
        comentarios.style.display = 'block'
        visible = true;
    }
})

let nuevac = document.querySelector('.nuevac')
let btn1 = document.getElementById('btn1')
var observable = false;

btn1.addEventListener('click', function() {
    if(observable) {
        nuevac.style.display = 'none'
        observable = false;
    } else {
        nuevac.style.display = 'block'
        observable = true;
    }
})


