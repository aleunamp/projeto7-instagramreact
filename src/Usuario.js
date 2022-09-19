import React from "react"

function Perfil(props){
    const [nome, setNome] = React.useState(props.nome)
    const [foto, setFoto] = React.useState(props.imagem)

    function novoNome(){
        const nomePrompt = prompt("Digite o seu novo nome:")
            setNome(nomePrompt)
    }

    function novaFoto(){
        const fotoPrompt = prompt("Digite o link da sua nova foto:")
        setFoto(fotoPrompt)
    }

    return (
        <div class="usuario">
        <img onClick={novaFoto} src={(foto === "" || foto === null) ? props.imagem : foto} alt={(foto === "" || foto === null) ? props.imagem : foto}/>
        <div class="texto">
            <strong>{props.usuario}</strong>
            <span>
                {(nome === "" || nome === null) ? props.nome : nome}
                <ion-icon onClick={novoNome} name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
}


export default function Usuario(){
    return (
        <Perfil imagem = "./catanacomics.svg" usuario = "catanacomics" nome = "Catana"/>
    )
}