import React from "react"

function Post(props) {
    const [bookmark, setBookmark] = React.useState("bookmark-outline")
    const [heart, setHeart] = React.useState("heart-outline")
    const [colorHeart, setColorHeart] = React.useState("disliked")
    const [contador1, setContador1] = React.useState(props.numcurtidas)
    const [contador2, setContador2] = React.useState(0)

    function like() {
        setContador1(Number(props.numcurtidas))

        if (contador1 == props.numcurtidas) {
            setHeart("heart")
            setColorHeart("liked")
            setContador1(Number(contador1) + 1)
        }
        else {
            setHeart("heart-outline")
            setColorHeart("disliked")
            setContador1(Number(contador1) - 1)
        }
    }

    function salvo() {
        if (contador2 === 0){
        setBookmark("bookmark")
        setContador2(contador2 + 1)
    } else {
            setBookmark("bookmark-outline")
            setContador2(contador2 - 1)
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagemusuariodopost} alt={props.imagemusuariodopost}/>
                    {props.usuariodopost}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.foto} alt={props.foto}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon
                            name={heart} class={colorHeart}
                            onClick={like}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvo}
                            name={bookmark}
                        ></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemusuariocurtida} alt={props.imagemusuariocurtida}/>
                    <div class="texto">
                        Curtido por <strong>{props.usuariocurtida}</strong> e <strong>outras {contador1} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function Posts() {
    const post = [
        { imagemusuariodopost: "./meowed.svg", usuariodopost: "meowed", foto: "./gato-telefone.svg", imagemusuariocurtida: "./respondeai.svg", usuariocurtida: "respondeai", numcurtidas: "101523" },
        { imagemusuariodopost: "./barked.svg", usuariodopost: "barked", foto: "./dog.svg", imagemusuariocurtida: "./adorable_animals.svg", usuariocurtida: "adorable_animals", numcurtidas: "200541" }
    ]
    console.log(post)

    return (
        <div class="posts">
            {post.map((p) => <Post
                imagemusuariodopost={p.imagemusuariodopost}
                usuariodopost={p.usuariodopost}
                foto={p.foto}
                imagemusuariocurtida={p.imagemusuariocurtida}
                usuariocurtida={p.usuariocurtida}
                numcurtidas={p.numcurtidas} />)}
        </div>
    )
}