import React from "react"




export default function Suggestions() {

    let suggestion = [
        <Suggestion imagem="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você"/>,
        <Suggestion imagem="assets/img/chibirdart.svg" nome="chibirdart" razao="Segue você"/>,
        <Suggestion imagem="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" razao="Novo no Instagram"/>,
        <Suggestion imagem="assets/img/adorable_animals.svg" nome="adorable_animals" razao="Segue você"/>,
        <Suggestion imagem="assets/img/smallcutecats.svg" nome="smallcutecats" razao="Segue você"/>
    ]

    return(
    <div class="sugestoes">
                        <div class="titulo">
                            Sugestões para você
                            <div>Ver tudo</div>
                        </div>

                        {suggestion.map(postis => {return postis})}
                        
                    </div>
)}

function Suggestion(props){
    return (
        <div class="sugestao">
                            <div class="usuario">
                                <img src={props.imagem}  />
                                <div class="texto">
                                    <div class="nome">{props.nome}</div>
                                    <div class="razao">{props.razao}</div>
                                </div>
                            </div>

                            <div class="seguir">Seguir</div>
                        </div>
    )
}