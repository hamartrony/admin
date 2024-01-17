import Link from "next/link";

interface MenuItemProps{
    url?: string;
    texto: string;
    icone: any;
    className?: string;
    onClick?: (evento: any) => void

}

export default function MenuItem(props:MenuItemProps){
    return(
        <li onClick={props.onClick} className={`hover:bg-gray-300  cursor-pointer ${props.className} ` }>
            {props.url ? (
                <Link href={props.url!} className={`flex flex-col 
            justify-center items-center h-20 w-20 text-black dark:text-white dark:hover:text-black`}>
                    {props.icone}
                    <span>
                        {props.texto}
                    </span>
                </Link>
            ) : (
                <button className={`flex flex-col 
                    justify-center items-center h-20 w-20 text-black dark:text-white dark:hover:text-black`}>
                    {props.icone}
                    <span className={''}>
                        {props.texto}
                    </span>
                </button>
            )}
        </li>
    )
}
