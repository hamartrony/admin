import MenuItem from "@/components/menuItem";
import {iconAjuste, iconCasa, iconNotify, iconSair} from "@/components/icones";
import Logo from "@/components/logo";

export default function MenuLateral(){
    return(
        <aside className={`flex flex-col dark:bg-gray-900`}>
            <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-400
            to-purple-500 h-20 w-20`}>
                <Logo/>

            </div>
            <ul className={`flex-grow`}>
                <MenuItem url={'/'} texto={'Home'} icone={iconCasa}/>
                <MenuItem url={'/ajuste'} texto={'Ajustes'} icone={iconAjuste}/>
                <MenuItem url={'/notificacao'} texto={'Notificação'} icone={iconNotify}/>
            </ul>

            <ul>
                <MenuItem texto={'Logout'} icone={iconSair}
                          onClick={() => {console.log('saiuu desas porra')}}/>
            </ul>
        </aside>

    )
}
