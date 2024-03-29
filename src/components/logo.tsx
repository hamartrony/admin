export default function Logo(){
    return(
        <div className={`flex flex-col items-center justify-center h-12 w-12 rounded-full bg-white`}>
            <div className={`h-3 w-3 rounded-full bg-red-800`}/>
            <div className={`flex`}>
                <div className={`h-3 w-3 rounded-full bg-yellow-500`}/>
                <div className={`h-3 w-3 rounded-full bg-green-500`}/>
            </div>
        </div>
    )

}
