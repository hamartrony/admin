import Titulo from "@/components/titulo";

interface CabecalhoProps{
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps){
    return(
        <div>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
        </div>

    )
}
