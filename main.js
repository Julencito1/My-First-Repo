let change1 = document.getElementById('flec-der')
let change2 = document.getElementById('flec-izq')
let img2 = document.getElementById('img2')
let img1 = document.getElementById('img1')
let imag = document.getElementById('kd')


change1.onclick = function() {
    img2.style.backgroundColor = 'black'
    img1.style.backgroundColor = 'white'
    imag.src = 'img/bel.jpg'
    change2.style.opacity = '1'
    change2.style.display = 'initial'
    change2.style.cursor = 'pointer'
    change1.style.opacity = '0'
    change1.style.display = 'none'
    change1.style.cursor = 'default'
}

change2.onclick = function() {
    img2.style.backgroundColor = 'white'
    img1.style.backgroundColor = 'black'
    imag.src = 'img/kids.jpg'
    change2.style.display = 'none'
    change1.style.display = 'initial'
    change2.style.opacity = '0'
    change2.style.cursor = 'default'
    change1.style.opacity = '1'
    change1.style.cursor = 'pointer'
}


let arbolito1 = document.getElementById('btn1')
let arbolito2 = document.getElementById('btn2')
let arbolito3 = document.getElementById('btn3')
let arbolx = document.getElementById('par1')
let arboly = document.getElementById('par2')
let arbolz = document.getElementById('par3')
let prox = document.getElementById('pro1')
let proy = document.getElementById('pro2')
let proz = document.getElementById('pro3')

arbolito1.onclick = function() {

    arbolx.style.opacity = '1'
    prox.style.opacity = '1'
    arboly.style.opacity = '0'
    proy.style.opacity = '0'
    arbolz.style.opacity = '0'
    proz.style.opacity = '0'
    prox.style.display = 'initial'
    proy.style.display = 'none'
    proz.style.display = 'none'
}

arbolito2.onclick = function() {

    arboly.style.opacity = '1'
    proy.style.opacity = '1'
    arbolx.style.opacity = '0'
    prox.style.opacity = '0'
    arbolz.style.opacity = '0'
    proz.style.opacity = '0'
    prox.style.display = 'none'
    proy.style.display = 'initial'
    proz.style.display = 'none'
}

arbolito3.onclick = function() {

    arbolz.style.opacity = '1'
    proz.style.opacity = '1'
    arbolx.style.opacity = '0'
    prox.style.opacity = '0'
    arboly.style.opacity = '0'
    proy.style.opacity = '0'
    prox.style.display = 'none'
    proy.style.display = 'none'
    proz.style.display = 'initial'
}




img1.onclick = function() {
 img1.style.backgroundColor = 'black'
 img2.style.backgroundColor = 'transparent'   
 imag.src = 'kids.jpg'
 change1.style.display = 'initial'
 change2.style.display = 'none'
}

img2.onclick = function() {
    img1.style.backgroundColor = 'transparent'
    img2.style.backgroundColor = 'black'
    imag.src = 'bel.jpg'
    change2.style.display = 'initial'
    change2.style.opacity = '1'
    change1.style.display = 'none'
}