import { useState } from "react";


function Post(props) {
    const {
        userName,
        userImage,
        contentImage,
        likedByImage,
        likedByText,
        initialLikesAmount,
        isSaved,
        isLiked,
    } = props;

    const [saved, setSaved] = useState(isSaved);
    const [liked, setLiked] = useState(isLiked);
    const [counter, setCounter] = useState(initialLikesAmount);

    function changeBookmark() {
        setSaved(!saved);
    }

    function changeLike() {
        if (!liked) {
            setCounter(counter + 1);
        } else {
            setCounter(counter - 1);
        }
        setLiked(!liked);
    }

    function changeLikeImage() {
        if (!liked) {
            setLiked(true);
            setCounter(counter + 1);
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={userImage} />
                    {userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo" onClick={changeLikeImage}>
                <img src={contentImage} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {liked ? (
                            <ion-icon onClick={changeLike} class="liked" name="heart"></ion-icon>
                        ) : (
                            <ion-icon onClick={changeLike} name="heart-outline"></ion-icon>
                        )}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {saved ? (
                            <ion-icon onClick={changeBookmark} name="bookmark"></ion-icon>
                        ) : (
                            <ion-icon onClick={changeBookmark} name="bookmark-outline"></ion-icon>
                        )}
                    </div>
                </div>

                <div class="curtidas">
                    <img src={likedByImage} />
                    <div class="texto">
                        Curtido por <strong>{likedByText}</strong> e <strong>outras {counter} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function Posts() {
    const post = [
        {
            userName: "meowed",
            userImage: "./meowed.svg",
            contentImage: "./gato-telefone.svg",
            likedByImage: "./respondeai.svg",
            likedByText: "respondeai",
            initialLikesAmount: 101523,
            isSaved: false,
            isLiked: false
        },
        {
            userName: "barked",
            userImage: "./barked.svg",
            contentImage: "./dog.svg",
            likedByImage: "./adorable_animals.svg",
            likedByText: "adorable_animals",
            initialLikesAmount: 200541,
            isSaved: true,
            isLiked: true
        }
    ]
    console.log(post)

    return (
        <div class="posts">
            {post.map((p) => <Post
                userName={p.userName}
                userImage={p.userImage}
                contentImage={p.contentImage}
                likedByImage={p.likedByImage}
                likedByText={p.likedByText}
                initialLikesAmount={p.initialLikesAmount}
                isSaved={p.isSaved}
                isLiked={p.isLiked}
            />)}
        </div>
    )
}