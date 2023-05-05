import React from "react"


export default function Posts() {

    const posts = [
        <Post imagemperfil="assets/img/meowed.svg" texto="meowed" imagempost="assets/img/gato-telefone.svg" />,
        <Post imagemperfil="assets/img/barked.svg" texto="barked" imagempost="assets/img/dog.svg" />,
        <Post imagemperfil="assets/img/meowed.svg" texto="meowed" imagempost="assets/img/gato-telefone.svg" />
    ]





    return (
        <div class="posts">
            {posts.map(postis => <div>{postis}</div>)}
        </div>


    )
}

function Post(props) {

    const [coracao, setCoracao] = React.useState("heart-outline")
    const [classe, setClasse] = React.useState("")
    const [curtidas, setCurtidas] = React.useState(parseInt("99159"))
    const [salvo, setSalvo] = React.useState("bookmark-outline")


    function coracaomudar() {
        if (coracao === "heart-outline") {
            setCoracao("heart")
            setClasse("vermelho")
            let curtidanova = curtidas + 1
            setCurtidas(curtidanova)

        }else {
            setCoracao("heart-outline")
            setClasse("")
            setCurtidas(curtidas - 1)
        }
        
    
    }

    function coracaomudarfoto() {
         
            setCoracao("heart")
            setClasse("vermelho")
            setCurtidas("99.160")
        
        }
        
    function salvar() {
         
        if (salvo === "bookmark-outline") {
            setSalvo("bookmark")

        }else {
            setSalvo("bookmark-outline")
        }
        
        }
    


    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img data-test="post-image" src={props.imagemperfil} />
                    {props.texto}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={coracaomudarfoto} src={props.imagempost}  />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={coracaomudar} name={coracao} class={classe} ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={salvar} name={salvo}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
                    <div class="texto">
                        Curtido por <strong>adorable_animals</strong> e <strong data-test="likes-number">outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}

