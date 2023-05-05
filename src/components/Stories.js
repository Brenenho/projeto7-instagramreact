import React from "react"



export default function Stories() {

    let stories = [
        <Story storiesimagem="assets/img/9gag.svg" textostories="9gag" />,
        <Story storiesimagem="assets/img/meowed.svg" textostories="meowed" />,
        <Story storiesimagem="assets/img/barked.svg" textostories="barked" />,
        <Story storiesimagem="assets/img/nathanwpylestrangeplanet.svg" textostories="nathanwpylestrangeplanet" />,
        <Story storiesimagem="assets/img/wawawicomics.svg" textostories="wawawicomics" />,
        <Story storiesimagem="assets/img/respondeai.svg" textostories="respondeai" />,
        <Story storiesimagem="assets/img/filomoderna.svg" textostories="filomoderna" />,
        <Story storiesimagem="assets/img/memeriagourmet.svg" textostories="memeriagourmet" />
    ]



    return(
        <div class="stories">
                            
                            {stories.map(postis => {return postis})}
    
                            <div class="setinha">
                                <ion-icon name="chevron-forward-circle"></ion-icon>
                            </div>
                        </div>
    )}

function Story(props){
    return (
        <div class="story">
                            <div class="imagem">
                                <img src={props.storiesimagem}  />
                            </div>
                            <div class="usuario">
                                {props.textostories}
                            </div>
                        </div>
    )
}