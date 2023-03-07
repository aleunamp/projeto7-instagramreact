
function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} alt={props.image} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.status}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {
    const sugestoes =
        [{ image: "./bad.vibes.memes.svg", name: "bad.vibes.memes", status: "Segue você" },
        { image: "./chibirdart.svg", name: "chibirdart", status: "Segue você" },
        { image: "./razoesparaacreditar.svg", name: "razoesparaacreditar", status: "Novo no Instagram" },
        { image: "./adorable_animals.svg", name: "adorable_animals", status: "Segue você" },
        { image: "./smallcutecats.svg", name: "smallcutecats", status: "Segue você" }
        ];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map((s) => <Sugestao
                image={s.image}
                name={s.name}
                status={s.status} />)}

        </div>
    )
}