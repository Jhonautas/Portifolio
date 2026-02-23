function ativaletra(elemento) {
    const arrText = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrText.forEach((Letra, i)=>{
        setTimeout(()=>{ 
            elemento.innerHTML += Letra;
        }, 75 * i);
    })
}


const titulo = document.querySelector('.digitando');
ativaletra(titulo);