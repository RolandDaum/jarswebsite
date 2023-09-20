import { Oval } from  'react-loader-spinner'


export default function Loading() {
    return(
        <div class="m-0 p-0 overflow-hidden h-screen w-screen flex justify-center items-center">
            <Oval
                height={80}
                width={80}
                color="#B3BB6C"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#d1d6a7"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>

    )
}