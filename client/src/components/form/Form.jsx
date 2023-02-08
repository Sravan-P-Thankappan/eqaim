import { useState ,useContext} from "react"
import axios from "axios"
import { ResponseContext } from "../../Context"



const Form = () => {

  const {setResponse} = useContext(ResponseContext)
  const [formError,setFormError] = useState({})
    const [userInput,setUserInput] = useState({
        numberOne:'',
        numberTwo:''
    })
    

    
    const handleNumberOne = (e)=>{
        
        setUserInput((prev)=>{
            return {
                ...prev,numberOne:e.target.value
            }
        })
    }
    const handleNumberTwo = (e)=>{
        
        setUserInput((prev)=>{
            return {
                ...prev,numberTwo:e.target.value
            }
        })
    }

    const validate = (userInput)=>{
        let error = {}
        let regex = /^\d+$/;
        if(!regex.test(userInput.numberOne)) error.numberOne = 'Enter valid number'
        if(!regex.test(userInput.numberTwo)) error.numberTwo = 'Enter valid number'
     
        return error

    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        let res = validate(userInput)
        setFormError({...formError,...res})
        
        if(Object.keys(res).length===0)

        { 

            setFormError({})
            axios.post('http://localhost:5000/api/addition',userInput)
            .then((response)=>{
               
                setResponse(response.data)      
                e.target.reset() 

                      
            })
            .catch((er)=>{
                console.log(er)
            })
            
            return
        }
     

    }


    return (

        <div>

            <form onSubmit={handleSubmit} >
                <div className="w-10/12  flex justify-center bg-white rounded-lg shadow-xl  gap-5 mx-auto mt-10 p-9">

                    <div className="flex w-3/12 items-end flex-col  gap-7 sm:gap-9 sm:mt-4">
                        <label htmlFor="">First Number :</label>
                        <label htmlFor="">Second Number :</label>
                    </div>


                    <div className="flex flex-col mt-5 md:mt-4  w-7/12 sm:gap-3 md:gap-3 ">

                        <input className="outline-none md:w-9/12 px-3 py-1  bg-zinc-300 rounded"
                            type="number"
                            min="0"
                            onChange={handleNumberOne}
                        />
                        <label className="text-red-600">{formError.numberOne}</label>
                        <input className="outline-none px-3 md:w-9/12 bg-zinc-300 py-1 rounded"
                            type="number"
                            min="0"
                            onChange={handleNumberTwo}
                        />
                         
                         <label className="text-red-600">{formError.numberTwo}</label>

                        <div className=" flex justify-end  md:w-9/12 ">

                            <button className=" px-5 py-2 rounded-md border-2 border-zinc-300" type="submit">Genarate Steps</button>

                        </div>
                    </div>

                </div>

            </form>
        </div>

    )

}


export default Form