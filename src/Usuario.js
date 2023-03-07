import React from "react";

function Perfil(props) {
    const [name, setName] = React.useState(props.name);
    const [photo, setPhoto] = React.useState(props.image);

    function newName() {
        const promptName = prompt("Digite o seu novo nome:")
        setName(promptName);
    }

    function newPhoto() {
        const promptPhoto = prompt("Digite o link da sua nova foto:");
        setPhoto(promptPhoto);
    }

    return (
        <div class="usuario">
            <img onClick={newPhoto} src={(photo === "" || photo === null) ? props.image : photo} alt={(photo === "" || photo === null) ? props.image : photo} />
            <div class="texto">
                <strong>{props.user}</strong>
                <span>
                    {(name === "" || name === null) ? props.name : name}
                    <ion-icon onClick={newName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}


export default function Usuario() {
    return (
        <Perfil image="./catanacomics.svg" user="catanacomics" name="Catana" />
    )
}