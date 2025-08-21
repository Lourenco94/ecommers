//Conectar com a API utilizando o FETCH
function enviar1(){
    Swal.fire({
        title: "Comprado!",
        text: "Você Comprou The Last of Us",
        icon: "success"
      });
}

function enviar2(){
    Swal.fire({
        title: "Comprado!",
        text: "Você Comprou The Last of Us Part I",
        icon: "success"
      });
}

function enviar3(){
    Swal.fire({
        title: "Comprado!",
        text: "Você Comprou The Last of Us Part II",
        icon: "success"
      });
}

function enviar4(){
    Swal.fire({
        title: "Comprado!",
        text: "Você Comprou The Last of Us Part II Remastered",
        icon: "success"
      });
}

fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    //FRONT END
    document.getElementById('imagem').innerHTML = corpo.imagem;
    document.getElementById('nome').innerHTML = corpo.nome;
    document.getElementById('empresa').innerHTML = corpo.empresa;
    document.getElementById('estilo').innerHTML = corpo.estilo;
    document.getElementById('preco').innerHTML = corpo.preco;
    document.getElementById('imagem2').innerHTML = corpo.imagem2;
    document.getElementById('nome2').innerHTML = corpo.nome2;
    document.getElementById('empresa2').innerHTML = corpo.empresa2;
    document.getElementById('estilo2').innerHTML = corpo.estilo2;
    document.getElementById('preco2').innerHTML = corpo.preco2;
    document.getElementById('imagem3').innerHTML = corpo.imagem3;
    document.getElementById('nome3').innerHTML = corpo.nome3;
    document.getElementById('empresa3').innerHTML = corpo.empresa3;
    document.getElementById('estilo3').innerHTML = corpo.estilo3;
    document.getElementById('preco3').innerHTML = corpo.preco3;
    document.getElementById('imagem4').innerHTML = corpo.imagem4;
    document.getElementById('nome4').innerHTML = corpo.nome4;
    document.getElementById('empresa4').innerHTML = corpo.empresa4;
    document.getElementById('estilo4').innerHTML = corpo.estilo4;
    document.getElementById('preco4').innerHTML = corpo.preco4;
})