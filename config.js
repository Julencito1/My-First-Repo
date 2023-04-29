let tema1 = document.getElementById('bla-1')
let tema2 = document.getElementById('neg-1')
let icon = document.querySelector('.material-symbols-outlined')
let icon1 = document.getElementById('icono1')
let icon2 = document.getElementById('icono2')
let icon3 = document.getElementById('icono3')
let icon4 = document.getElementById('icono4')
let icon5 = document.getElementById('icono5')
let icon6 = document.getElementById('icono6')
let icon7 = document.getElementById('icono7')
let icon8 = document.getElementById('icono8')
let nav3 = document.getElementById('idi')
let nav4 = document.getElementById('tem')
let nav5 = document.getElementById('prefer')
let nav6 = document.getElementById('cuent')
let nav7 = document.getElementById('notis')
let nav8 = document.getElementById('ayud')
let nav9 = document.getElementById('acer-de')
let nav10 = document.getElementById('susc')
let icon9 = document.getElementById('icoapp')
let icon10 = document.getElementById('icobus')
let icon11 = document.getElementById('icoacc')
let flecbtn = document.getElementById('flecbtn')
let flecha = document.getElementById('flecha')
let actividadR = document.getElementById('actividad')
let flecbtn2 = document.getElementById('flecbtn2')
let flecha2 = document.getElementById('flecha2')
let informacionC = document.getElementById('informacion')
let btnturquesa = document.getElementById('tur-1')



var rotar = false;

var rotar2 = false;

flecbtn.addEventListener('click', function() {
    if(rotar) {
        actividadR.style.display = 'none'
        flecha.style.transform = 'rotateX(0deg)'
        rotar = false
    } else {
        actividadR.style.display = 'block'
        flecha.style.transform = 'rotateX(180deg)'
        rotar = true;
    }
})

flecbtn2.addEventListener('click', function() {
    if(rotar2) {
        informacionC.style.display = 'none'
        flecha2.style.transform = 'rotateX(0deg)'
        rotar2 = false;
    } else {
        informacionC.style.display = 'block'
        flecha2.style.transform = 'rotateX(180deg)'
        rotar2 = true;
    }
})



tema2.onclick = function() {
    document.body.style.color = 'white';
    document.body.style.backgroundColor = 'black';
    icon.style.color = 'white'
    nav3.style.color = 'white'
    nav4.style.color = 'white'
    nav5.style.color = 'white'
    nav6.style.color = 'white'
    nav7.style.color = 'white'
    nav8.style.color = 'white'
    nav9.style.color = 'white'
    nav10.style.color = 'white'
    icon1.style.color = 'white'
    icon2.style.color = 'white'
    icon3.style.color = 'white'
    icon4.style.color = 'white'
    icon5.style.color = 'white'
    icon6.style.color = 'white'
    icon7.style.color = 'white'
    icon8.style.color = 'white'
    icon9.style.color = 'white'
    icon10.style.color = 'white'
    icon11.style.color = 'white'
    flecha.style.color = 'white'
    flecha2.style.color = 'white'
    contTex.style.color = 'black'
    
}

tema1.onclick = function() {
    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'white';
    icon.style.color = 'black'
    nav3.style.color = 'black'
    nav4.style.color = 'black'
    nav5.style.color = 'black'
    nav6.style.color = 'black'
    nav7.style.color = 'black'
    nav8.style.color = 'black'
    nav9.style.color = 'black'
    nav10.style.color = 'black'
    icon1.style.color = 'black'
    icon2.style.color = 'black'
    icon3.style.color = 'black'
    icon4.style.color = 'black'
    icon5.style.color = 'black'
    icon6.style.color = 'black'
    icon7.style.color = 'black'
    icon8.style.color = 'black'
    icon9.style.color = 'black'
    icon10.style.color = 'black'
    icon11.style.color = 'black'
    flecha.style.color = 'black'
    flecha2.style.color = 'black'

}

let botTema = document.getElementById('btn2')
let Temaseccion = document.querySelector('.tema')
let Idiomaseccion = document.querySelector('.idioma')
let Notificacionesseccion = document.querySelector('.notificaciones')
let Cuentaseccion = document.querySelector('.cuenta')
let Suscripcionseccion = document.querySelector('.suscripciones')
let idiomabtn = document.getElementById('btn1')
let susbtn = document.getElementById('btn6')
let cuentabtn = document.getElementById('btn4')
let notibtn = document.getElementById('btn3')
let acercade = document.getElementById('btn8')
let acercadeccion = document.querySelector('.acercade')
 

acercade.addEventListener('click', function() {
    Idiomaseccion.style.display = 'none'
    Notificacionesseccion.style.display = 'none'
    Cuentaseccion.style.display = 'none'
    Suscripcionseccion.style.display = 'none'
    Temaseccion.style.display = 'none'
    acercadeccion.style.display = 'block'
})


notibtn.onclick = function() {
    Idiomaseccion.style.display = 'none'
    Notificacionesseccion.style.display = 'block'
    Cuentaseccion.style.display = 'none'
    Suscripcionseccion.style.display = 'none'
    Temaseccion.style.display = 'none'
    acercadeccion.style.display = 'none'
}


cuentabtn.onclick = function() {
    Idiomaseccion.style.display = 'none'
    Notificacionesseccion.style.display = 'none'
    Cuentaseccion.style.display = 'block'
    Suscripcionseccion.style.display = 'none'
    Temaseccion.style.display = 'none'
    acercadeccion.style.display = 'none'
}


susbtn.onclick = function() {
    Idiomaseccion.style.display = 'none'
    Notificacionesseccion.style.display = 'none'
    Cuentaseccion.style.display = 'none'
    Suscripcionseccion.style.display = 'block'
    Temaseccion.style.display = 'none'
    acercadeccion.style.display = 'none'

}



idiomabtn.onclick = function() {
    Idiomaseccion.style.display = 'block'
    Notificacionesseccion.style.display = 'none'
    Cuentaseccion.style.display = 'none'
    Suscripcionseccion.style.display = 'none'
    Temaseccion.style.display = 'none'
    acercadeccion.style.display = 'none'
    
}

botTema.onclick = function() {
    Temaseccion.style.display = 'block'
    Idiomaseccion.style.display = 'none'
    Notificacionesseccion.style.display = 'none'
    Cuentaseccion.style.display = 'none'
    Suscripcionseccion.style.display = 'none'
    acercadeccion.style.display = 'none'
}

let borrarCuenta = document.getElementById('borrar-cuenta')
let borrarbtn = document.getElementById('borrar')
let cruzbtn = document.getElementById('cruzce')
let cancelarbtn = document.getElementById('can')
let continuarbtn = document.getElementById('cont-')
let borrartTex = document.getElementById('borrar-cuenta-t')
let contTex = document.getElementById('satis-1')


borrarbtn.addEventListener('click', function() {
    borrarCuenta.style.display = 'block'
    borrartTex.style.display = 'block'
    contTex.style.display = 'none'
    cancelarbtn.style.display = 'block'
    continuarbtn.style.display = 'block'
})

cruzce.onclick = function() {
    borrarCuenta.style.display = 'none'
}

cancelarbtn.onclick = function() {
    borrarCuenta.style.display = 'none'
}

continuarbtn.addEventListener('click', function() {
    borrartTex.style.display = 'none'
    contTex.style.display = 'block'
    cancelarbtn.style.display = 'none'
    continuarbtn.style.display = 'none'
})

let appsmenu = document.getElementById('apps1')
let appsmenu1 = document.querySelector('.apps-menu')
var menuAparecer = false

appsmenu.addEventListener('click', function() {
    if(menuAparecer) {
        appsmenu1.style.display = 'none'
        menuAparecer = false;
    } else {
        appsmenu1.style.display = 'block'
        menuAparecer = true;
    }
})


let textoimagenes = document.getElementById('txtimgs')
let imagen1 = document.getElementById('img1-1')
let imagenPersona = document.getElementById('persona1')


imagen1.addEventListener('mouseover', function() {
    textoimagenes.style.display = 'block'
    imagenPersona.style.opacity = '1'
})

imagen1.addEventListener('mouseout', function() {
    textoimagenes.style.display = 'none'
    imagenPersona.style.opacity = '0'
    imagenPersona.style.marginTop = '00px'
})