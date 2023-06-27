function abricard1(){
    let BarraMenuAberto = document.getElementsByClassName ('iframe1');
    let ClickPraFechar = document.getElementById ('card-aberto1');
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "100%";
    }else{
        BarraMenuAberto.style.width = "0px";
    }

    if (ClickPraFechar.style.width == "0px"){
        ClickPraFechar.style.width = "45%";
    }else{
        ClickPraFechar.style.width = "0px";
    }
}