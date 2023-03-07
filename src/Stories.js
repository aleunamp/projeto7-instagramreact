function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} alt={props.image} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}

export default function Stories() {
    const stories = [
        { image: "./9gag.svg", user: "9gag" },
        { image: "./meowed.svg", user: "meowed" },
        { image: "./barked.svg", user: "barked" },
        { image: "./nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
        { image: "./wawawicomics.svg", user: "wawawicomics" },
        { image: "./respondeai.svg", user: "respondeai" },
        { image: "./filomoderna.svg", user: "filomoderna" },
        { image: "./memeriagourmet.svg", user: "memeriagourmet" }
    ]
    return (
        <div class="stories">
            {stories.map((s) => <Story image={s.image} user={s.user} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}