const menu = document.querySelector('.menu-hamburguer');
const navMenu = document.querySelector('.navigation');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

content.addEventListener('click', () =>{
    if(navMenu.classList.contains('ativo')) {
        menu.classList.remove('ativo');
        navMenu.classList.remove('ativo');
    }
});

function abricard1(){
    let BarraMenuAberto = document.getElementById ('iframe1');
    let ClickPraFechar = document.getElementById ('card-aberto1');
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "50%";
    }else{
        BarraMenuAberto.style.width = "0px";
    }

    if (ClickPraFechar.style.width == "0px"){
        ClickPraFechar.style.width = "45%";
    }else{
        ClickPraFechar.style.width = "0px";
    }
}

function abricard2(){
    let BarraMenuAberto = document.getElementById ('iframe2');
    let ClickPraFechar = document.getElementById ('card-aberto2');
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "50%";
    }else{
        BarraMenuAberto.style.width = "0px";
    }

    if (ClickPraFechar.style.width == "0px"){
        ClickPraFechar.style.width = "45%";
    }else{
        ClickPraFechar.style.width = "0px";
    }
}

function abricard3(){
    let BarraMenuAberto = document.getElementById ('iframe3');
    let ClickPraFechar = document.getElementById ('card-aberto3');
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "50%";
    }else{
        BarraMenuAberto.style.width = "0px";
    }

    if (ClickPraFechar.style.width == "0px"){
        ClickPraFechar.style.width = "45%";
    }else{
        ClickPraFechar.style.width = "0px";
    }
}

function abricard4(){
    let BarraMenuAberto = document.getElementById ('iframe4');
    let ClickPraFechar = document.getElementById ('card-aberto4');
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "50%";
    }else{
        BarraMenuAberto.style.width = "0px";
    }

    if (ClickPraFechar.style.width == "0px"){
        ClickPraFechar.style.width = "45%";
    }else{
        ClickPraFechar.style.width = "0px";
    }
}