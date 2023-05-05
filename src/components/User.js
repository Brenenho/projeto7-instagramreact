import React from "react"



export default function User () {

    const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg")
    const [texto, setTexto] = React.useState("catanacomics")

    function TrocaImagem() {
        let novaImagem = prompt("Insira a nova imagem");
        if (novaImagem === "") {
            setImagem(imagem)
        }else{
        setImagem(novaImagem)}
    }
    
    function TrocaTexto() {
        let novoTexto = prompt("Insira o nome")
        if (novoTexto === "") {
            setTexto(texto)
        }else {setTexto(novoTexto)}
        
        
    }




    return(
    <div class="usuario">
                        <img onClick={TrocaImagem} src={imagem} alt="imagem de perfil" />
                        <div class="texto">
                            <span>
                                <strong>{texto}</strong>
                                <ion-icon onClick={TrocaTexto} name="pencil"></ion-icon>
                            </span>
                        </div>
                    </div>
)}

