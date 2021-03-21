const ElementoHora = window.document.getElementById('hora');
const ElementoMain = window.document.getElementById('principal');
const ElementoImagem = window.document.getElementById('imagem');
const ElementoDef = window.document.getElementById('definicao');
const ElementoTitulo = window.document.getElementById('titulo');
const corpo = window.document.body;
const hora = new Date().getHours();
const mins = new Date().getMinutes();

relogio();
muda_fundo();
function relogio(){
    if(hora<10&&mins<10){
        ElementoHora.innerHTML = `0${hora}:0${mins}`;
        return
    }
    if(hora<10){
        ElementoHora.innerHTML = `0${hora}:${mins}`;
        return
    };
    if(mins<10){
        ElementoHora.innerHTML = `${hora}:0${mins}`;    
        return
    };
    ElementoHora.innerHTML = `${hora}:${mins}`;
};

function muda_fundo(){
    if(hora >= 0 && hora <6){
        ElementoMain.style.backgroundColor = "#DE8D7C";
        corpo.style.backgroundColor = "#97729D";
        ElementoHora.style.color ='#433673';
        ElementoDef.style.color = '#433673';
        ElementoImagem.innerHTML = '<img src="midias/MuitoCedo.png">';
        return 
    };
    if(hora >=6 && hora <12){
        ElementoMain.style.backgroundColor = "#F27A5E";
        corpo.style.backgroundColor = "#F2AD85";
        ElementoHora.style.color ='#546C8C';
        ElementoDef.style.color = '#546C8C';
        ElementoImagem.innerHTML = '<img src="midias/Manha.png">';
        return
    };
    if(hora >= 12 && hora <17){
        ElementoMain.style.backgroundColor = "#E5C078";
        corpo.style.backgroundColor = "#6AA5D9";
        ElementoHora.style.color ='#000000';
        ElementoDef.style.color = '#000000';
        ElementoTitulo.style.color = '#000000';
        ElementoImagem.innerHTML = '<img src="midias/Tarde.png">';
        return
    };
    if(hora >=17 && hora <18){
        ElementoMain.style.backgroundColor = "#F5DA3F";
        corpo.style.backgroundColor = "#F29A2E";
        ElementoHora.style.color ='#000000';
        ElementoDef.style.color = '#000000';
        ElementoTitulo.style.color = '#000000';
        ElementoImagem.innerHTML = '<img src="midias/MuitoTarde.png">';
        return
    };
    if(hora >=18 && hora <24){
        ElementoMain.style.backgroundColor = "#6B98BF";
        corpo.style.backgroundColor = "#234A59";
        ElementoHora.style.color ='#FFFFFF';
        ElementoDef.style.color = '#FFFFFF';
        ElementoTitulo.style.color = '#63D3FF';
        ElementoTitulo.style.textShadow = '2px 2px #000000';
        ElementoImagem.innerHTML = '<img src="midias/Noite.png">';
        return
    };
    if(hora >=24){
        return
    }
};