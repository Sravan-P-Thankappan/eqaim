import { useContext } from "react"
import { ResponseContext } from "../../Context"


const Output = () => {

    const { response } = useContext(ResponseContext)


   

    return (


        <div className="mt-5 w-10/12 mx-auto p-10 h-2/5  md:h-1/2 flex flex-col rounded-lg shadow-lg   bg-white ">
            <div className="flex justify-between px-1 mb-1">
            <p className=" text-xl font-bold text-blue-600 ">Console</p>
            </div>
            <div className="bg-zinc-100 w-full p-10 h-full flex ">

                <div className=" w-full ">

                    {

                        response?.map((el, i) => {

                            return (
                                <>
                                    <div key={i} className="flex gap-3">
                                        
                                        <p><span>Step :</span>{i+1}</p>
                                        <p ><span>Carry String :</span> {el.carryString}</p>
                                        <p><span>Sum String String :</span> {el.sumString}</p>


                                    </div>


                                </>
                            )

                        })

                    }

                </div>
            </div>


        </div>
    )
}


export default Output