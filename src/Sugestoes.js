
function Sugestao(props){
    return(
        <div class="sugestao">
                <div class="usuario">
                    <img src={props.imagem} alt={props.imagem}/>
                    <div class="texto">
                        <div class="nome">{props.usuario}</div>
                        <div class="razao">{props.status}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
    )
}

export default function Sugestoes (){
    const sugestoes = 
    [{imagem: "./bad.vibes.memes.svg", usuario: "bad.vibes.memes", status: "Segue você"},
    {imagem: "./chibirdart.svg", usuario: "chibirdart", status: "Segue você"},
    {imagem: "./razoesparaacreditar.svg", usuario: "razoesparaacreditar",  status: "Novo no Instagram"},
    {imagem: "./adorable_animals.svg", usuario: "adorable_animals", status: "Segue você"},
    {imagem: "./smallcutecats.svg", usuario: "smallcutecats", status: "Segue você"}
]
console.log(sugestoes)

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map((s) => <Sugestao 
            imagem = {s.imagem} 
            usuario = {s.usuario} 
            status = {s.status}/>)}
            
        </div>
    )
}