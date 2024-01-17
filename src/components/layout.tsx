import MenuLateral from "@/components/menuLateral";
import Cabecalho from "@/components/cabecalho";
import Conteudo from "@/components/conteudo";

interface LayoutProps{
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className={`dark flex h-screen w-screen`}>
            <MenuLateral/>
            <div className={`flex flex-col p-7 w-full bg-gray-400 dark:bg-gray-600`}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>

    )
}
