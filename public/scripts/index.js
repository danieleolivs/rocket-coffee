function mudaImagem(){
    var input = document.getElementById('control-nav')
    var imagem = document.getElementById('imagem')

    if(input.checked){
        
        imagem.src="./public/assets/menu-buguer-close.svg"
    
    }else{
        imagem.src="./public/assets/menu-buguer-open.svg"
    }
}
