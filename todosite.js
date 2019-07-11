$(function(){
    //Pesquisar da serie sem refresh na página
    $("#pesquisa").keyup(function(){

        var pesquisa = $(this).val();

        //Verificar se há algo digitado
        if(pesquisa != ''){
            var dados = {
                palavra : pesquisa
            }
            $.post('buscar.php', dados, function(retorna){
                //Mostra dentro da ul os resultado obtidos
                $(".resultado").html(retorna);
            });
        }else{
            $(".resultado").html('');
        }
    });
});

function clicar1(){
    var temporada1 = document.getElementsByClassName("temporada1");
    if (temporada1[0].style.display == "block"){
        for(var v1 = 0; v1 < temporada1.length; v1++)
        temporada1[v1].style.display = "none";}

    else{
        for(var vb = 0; vb < temporada1.length; vb++)
        temporada1[vb].style.display = "block";

    }

}
function clicar2(){
    var temporada2 = document.getElementsByClassName("temporada2");
    if (temporada2[0].style.display == "block"){
        for(var v2 = 0; v2 < temporada2.length; v2++)
        temporada2[v2].style.display = "none";}

    else{
        for (var v2b = 0; v2b < temporada2.length; v2b++)
        temporada2[v2b].style.display = "block";
    }

}function clicar3(){
    var temporada3 = document.getElementsByClassName("temporada3");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
        temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
        temporada3[v3b].style.display = "block";
    }

}function clicar4(){
    var temporada4 = document.getElementsByClassName("temporada4");
    if (temporada4[0].style.display == "block"){
        for(var v3 =0; v3 < temporada4.length; v3++)
            temporada4[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada4.length; v3b++)
            temporada4[v3b].style.display = "block";
    }

}function clicar5(){
    var temporada3 = document.getElementsByClassName("temporada5");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}function clicar6(){
    var temporada3 = document.getElementsByClassName("temporada6");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}function clicar7(){
    var temporada3 = document.getElementsByClassName("temporada7");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}function clicar8(){
    var temporada3 = document.getElementsByClassName("temporada8");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}
function clicar9(){
    var temporada3 = document.getElementsByClassName("temporada9");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}function clicar10(){
    var temporada3 = document.getElementsByClassName("temporada10");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}function clicar11(){
    var temporada3 = document.getElementsByClassName("temporada11");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}function clicar12(){
    var temporada3 = document.getElementsByClassName("temporada12");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}function clicar13(){
    var temporada3 = document.getElementsByClassName("temporada13");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}function clicar14(){
    var temporada3 = document.getElementsByClassName("temporada14");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}
function clicar15(){
    var temporada3 = document.getElementsByClassName("temporada15");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}

function closer() {
    var iframe = document.getElementById('janela');
    var fechar = document.getElementById('assistir');
        fechar.style.display='none';
        iframe.src = iframe.src ;

}

function torrent(){
    var temporada3 = document.getElementsByClassName("torrent");
    if (temporada3[0].style.display == "block"){
        for(var v3 =0; v3 < temporada3.length; v3++)
            temporada3[v3].style.display = "none";}

    else{
        for(var v3b = 0; v3b < temporada3.length; v3b++)
            temporada3[v3b].style.display = "block";
    }

}

function t1e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t1e1.html";

}function t1e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t1e2.html";
}function t1e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t1e3.html";
}function t1e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t1e4.html";
}function t1e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t1e5.html";
}function t1e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t1e6.html";
}function t1e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t1e7.html";
}function t1e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t1e8.html";
}function t1e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t1e9.html";
}
function t2e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e1.html";
}function t2e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e2.html";
}function t2e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e3.html";
}function t2e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e4.html";
}function t2e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e5.html";
}function t2e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e6.html";
}function t2e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e7.html";
}function t2e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e8.html";
}function t2e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e9.html";
}function t2e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e10.html";
}function t2e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e11.html";
}function t2e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e12.html";
}function t2e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e13.html";
}function t2e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e14.html";
}function t2e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e15.html";
}function t2e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e16.html";
}function t2e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e17.html";
}function t2e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e18.html";
}function t2e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e19.html";
}function t2e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e20.html";
}function t2e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e21.html";
}function t2e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e22.html";
}function t2e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e23.html";
}function t2e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e24.html";
}function t2e25() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e25.html";
}function t2e26() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e26.html";
}function t2e27() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t2e27.html";}
function t3e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e1.html";
}function t3e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e2.html";
}function t3e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e3.html";
}function t3e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e4.html";
}function t3e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e5.html";
}function t3e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e6.html";
}function t3e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e7.html";
}function t3e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e8.html";
}function t3e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e9.html";
}function t3e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e10.html";
}function t3e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e11.html";
}function t3e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e12.html";
}function t3e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e13.html";
}function t3e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e14.html";
}function t3e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e15.html";
}function t3e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e16.html";
}function t3e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e17.html";
}function t3e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e18.html";
}function t3e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e19.html";
}function t3e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e20.html";
}function t3e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e21.html";
}function t3e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e22.html";
}function t3e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e23.html";
}function t3e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e24.html";
}function t3e25() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t3e25.html";
}
function t4e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e1.html";
}function t4e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e2.html";
}function t4e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e3.html";
}function t4e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e4.html";
}function t4e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e5.html";
}function t4e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e6.html";
}function t4e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e7.html";
}function t4e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e8.html";
}function t4e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e9.html";
}function t4e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e10.html";
}function t4e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e11.html";
}function t4e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e12.html";
}function t4e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e13.html";
}function t4e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e14.html";
}function t4e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e15.html";
}function t4e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e16.html";
}function t4e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t4e17.html";
}
function t5e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e1.html";
}function t5e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e2.html";
}function t5e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e3.html";
}function t5e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e4.html";
}function t5e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e5.html";
}function t5e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e6.html";
}function t5e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e7.html";
}function t5e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e8.html";
}function t5e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e9.html";
}function t5e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e10.html";
}function t5e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e11.html";
}function t5e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e12.html";
}function t5e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e13.html";
}function t5e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e14.html";
}function t5e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e15.html";
}function t5e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e16.html";
}function t5e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e17.html";
}function t5e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e18.html";
}function t5e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e19.html";
}function t5e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e20.html";
}function t5e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e21.html";
}function t5e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e22.html";
}function t5e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e23.html";
}function t5e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t5e24.html";
}
function t6e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e1.html";
}function t6e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e2.html";
}function t6e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e3.html";
}function t6e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e4.html";
}function t6e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e5.html";
}function t6e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e6.html";
}function t6e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e7.html";
}function t6e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e8.html";
}function t6e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e9.html";
}function t6e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e10.html";
}function t6e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e11.html";
}function t6e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e12.html";
}function t6e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e13.html";
}function t6e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e14.html";
}function t6e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e15.html";
}function t6e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e16.html";
}function t6e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e17.html";
}function t6e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e18.html";
}function t6e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e19.html";
}function t6e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e20.html";
}function t6e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e21.html";
}function t6e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e22.html";
}function t6e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e23.html";
}function t6e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t6e24.html";
}
function t7e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e1.html";
}function t7e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e2.html";
}function t7e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e3.html";
}function t7e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e4.html";
}function t7e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e5.html";
}function t7e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e6.html";
}function t7e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e7.html";
}function t7e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e8.html";
}function t7e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e9.html";
}function t7e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e10.html";
}function t7e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e11.html";
}function t7e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e12.html";
}function t7e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e13.html";
}function t7e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e14.html";
}function t7e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e15.html";
}function t7e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e16.html";
}function t7e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e17.html";
}function t7e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e18.html";
}function t7e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e19.html";
}function t7e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e20.html";
}function t7e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e21.html";
}function t7e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t7e22.html";
}
function t8e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e1.html";
}function t8e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e2.html";
}function t8e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e3.html";
}function t8e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e4.html";
}function t8e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e5.html";
}function t8e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e6.html";
}function t8e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e7.html";
}function t8e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e8.html";
}function t8e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e9.html";
}function t8e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e10.html";
}function t8e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e11.html";
}function t8e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e12.html";
}function t8e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e13.html";
}function t8e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e14.html";
}function t8e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e15.html";
}function t8e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e16.html";
}function t8e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e17.html";
}function t8e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e18.html";
}function t8e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e19.html";
}function t8e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e20.html";
}function t8e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e21.html";
}function t8e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e22.html";
}function t8e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e23.html";
}function t8e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t8e24.html";
}
function t9e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e1.html";
}function t9e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e2.html";
}function t9e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e3.html";
}function t9e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e4.html";
}function t9e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e5.html";
}function t9e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e6.html";
}function t9e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e7.html";
}function t9e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e8.html";
}function t9e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e9.html";
}function t9e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e10.html";
}function t9e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e11.html";
}function t9e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e12.html";
}function t9e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e13.html";
}function t9e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e14.html";
}function t9e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e15.html";
}function t9e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e16.html";
}function t9e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e17.html";
}function t9e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e18.html";
}function t9e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e19.html";
}function t9e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e20.html";
}function t9e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e21.html";
}function t9e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e22.html";
}function t9e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e23.html";
}function t9e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t9e24.html";
}
function t10e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e1.html";
}function t10e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e2.html";
}function t10e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e3.html";
}function t10e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e4.html";
}function t10e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e5.html";
}function t10e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e6.html";
}function t10e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e7.html";
}function t10e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e8.html";
}function t10e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e9.html";
}function t10e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e10.html";
}function t10e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e11.html";
}function t10e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e12.html";
}function t10e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e13.html";
}function t10e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e14.html";
}function t10e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e15.html";
}function t10e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e16.html";
}function t10e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e17.html";
}function t10e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e18.html";
}function t10e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e19.html";
}function t10e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e20.html";
}function t10e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e21.html";
}function t10e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e22.html";
}function t10e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e23.html";
}function t10e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t10e24.html";
}
function t11e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e1.html";
}function t11e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e2.html";
}function t11e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e3.html";
}function t11e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e4.html";
}function t11e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e5.html";
}function t11e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e6.html";
}function t11e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e7.html";
}function t11e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e8.html";
}function t11e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e9.html";
}function t11e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e10.html";
}function t11e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e11.html";
}function t11e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e12.html";
}function t11e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e13.html";
}function t11e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e14.html";
}function t11e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e15.html";
}function t11e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e16.html";
}function t11e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e17.html";
}function t11e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e18.html";
}function t11e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e19.html";
}function t11e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e20.html";
}function t11e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e21.html";
}function t11e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e22.html";
}function t11e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e23.html";
}function t11e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e24.html";
}function t11e25() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t11e25.html";
}
function t12e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e1.html";
}function t12e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e2.html";
}function t12e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e3.html";
}function t12e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e4.html";
}function t12e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e5.html";
}function t12e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e6.html";
}function t12e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e7.html";
}function t12e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e8.html";
}function t12e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e9.html";
}function t12e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e10.html";
}function t12e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e11.html";
}function t12e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e12.html";
}function t12e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e13.html";
}function t12e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e14.html";
}function t12e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e15.html";
}function t12e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e16.html";
}function t12e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e17.html";
}function t12e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e18.html";
}function t12e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e19.html";
}function t12e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e20.html";
}function t12e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e21.html";
}function t12e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e22.html";
}function t12e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e23.html";
}function t12e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t12e24.html";
}
function t13e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e1.html";
}function t13e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e2.html";
}function t13e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e3.html";
}function t13e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e4.html";
}function t13e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e5.html";
}function t13e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e6.html";
}function t13e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e7.html";
}function t13e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e8.html";
}function t13e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e9.html";
}function t13e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e10.html";
}function t13e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e11.html";
}function t13e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e12.html";
}function t13e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e13.html";
}function t13e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e14.html";
}function t13e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e15.html";
}function t13e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e16.html";
}function t13e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e17.html";
}function t13e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e18.html";
}function t13e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e19.html";
}function t13e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e20.html";
}function t13e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e21.html";
}function t13e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e22.html";
}function t13e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e23.html";
}function t13e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t13e24.html";
}
function t14e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e1.html";
}function t14e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e2.html";
}function t14e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e3.html";
}function t14e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e4.html";
}function t14e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e5.html";
}function t14e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e6.html";
}function t14e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e7.html";
}function t14e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e8.html";
}function t14e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e9.html";
}function t14e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e10.html";
}function t14e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e11.html";
}function t14e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e12.html";
}function t14e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e13.html";
}function t14e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e14.html";
}function t14e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e15.html";
}function t14e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e16.html";
}function t14e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e17.html";
}function t14e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e18.html";
}function t14e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e19.html";
}function t14e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e20.html";
}function t14e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e21.html";
}function t14e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e22.html";
}function t14e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e23.html";
}function t14e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t14e24.html";
}

function t15e1() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e1.html";
}function t15e2() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e2.html";
}function t15e3() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e3.html";
}function t15e4() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e4.html";
}function t15e5() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e5.html";
}function t15e6() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e6.html";
}function t15e7() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e7.html";
}function t15e8() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e8.html";
}function t15e9() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e9.html";
}function t15e10() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e10.html";
}function t15e11() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e11.html";
}function t15e12() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e12.html";
}function t15e13() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e13.html";
}function t15e14() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e14.html";
}function t15e15() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e15.html";
}function t15e16() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e16.html";
}function t15e17() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e17.html";
}function t15e18() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e18.html";
}function t15e19() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e19.html";
}function t15e20() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e20.html";
}function t15e21() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e21.html";
}function t15e22() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e22.html";
}function t15e23() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e23.html";
}function t15e24() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e24.html";
}function t15e25() {
    document.getElementById("assistir").style.display = "block";
    document.getElementById("janela").src = "t15e25.html";
}