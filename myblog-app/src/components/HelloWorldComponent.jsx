import axios from 'axios'
import React, { useState } from 'react'

function HelloWorldComponent() {

    const [name, setname] = useState("")
    const [data, setData] = useState(null)

    const invokeHelloWorldRestApi = () => {
        axios.get(`http://localhost:8080/hello-world/${name}`)
            .then((response) => successFullResponce(response))
            .catch((error) => ErrorResponce(error))
            .finally(() => console.log("Clean Up"))
    }

    const successFullResponce = (response) => {
        setData(response.data)
    }
    const ErrorResponce = (response) => {
        console.log(response);
    }

    return (
        <div className='flex items-center justify-center mt-48 flex-col space-y-3'>
            <input type="text" className='outline-none border border-black rounded-lg py-2 w-[20rem] px-3' placeholder='Enter Your Name'
                value={name} onChange={(e) => setname(e.target.value)} />
            <button className='p-3 bg-green-400 border border-white rounded-lg' onClick={invokeHelloWorldRestApi}>
                Invoke Hello wrold Api</button>
            <div>
                <h1 className='text-xl'>Api Response :</h1>
                {data && (
                    <h1 className='text-xl text-green-600'>{data.name}</h1>
                )}
            </div>
        </div>
    )
}

export default HelloWorldComponent