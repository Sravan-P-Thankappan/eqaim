import { useState } from "react"
import Form from "../form/Form"
import Navbar from "../navbar/Navbar"
import Output from "../output/output"

const Home = () => {
     
    const [console,setConsole] = useState(false)

    const handleConsole = (params)=>{
            
        setConsole(params)
    }

    return (
        <>
            <Navbar />
            <Form handleConsole={handleConsole} />
           {console&& <Output handleConsole={handleConsole} />}
        </>

    )

}

export default Home