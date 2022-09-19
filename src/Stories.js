function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} alt={props.imagem}/>
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}



export default function Stories() {
    const stories = [
        {imagem: "./9gag.svg", usuario: "9gag"},
        {imagem: "./meowed.svg", usuario: "meowed"},
        {imagem: "./barked.svg", usuario: "barked"},
        {imagem: "./nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
        {imagem: "./wawawicomics.svg", usuario: "wawawicomics"},
        {imagem: "./respondeai.svg", usuario: "respondeai"},
        {imagem: "./filomoderna.svg", usuario: "filomoderna"},
        {imagem: "./memeriagourmet.svg", usuario: "memeriagourmet"}
    ]
    return (
        <div class="stories">
             {stories.map((s) => <Story imagem = {s.imagem} usuario = {s.usuario}/>)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}