import React, { useState } from 'react'
import { apiClient } from '../api/ApiClient'
import { retrivePostForUser } from '../api/BlogPostApiService'
import { useAuth } from '../security/AuthContext'

function HelloWorldComponent() {

    const [name, setname] = useState("")
    const [data, setData] = useState(null)

    const invokeHelloWorldRestApi = () => {
        apiClient.get(`/hello-world/${name}`)
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
    const authContext = useAuth()

    const getPost = () => {
        console.log("hello World Api Called")
        retrivePostForUser(authContext.userId)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
    }

    async function callRegister() {
        try {
            const response = await register({
                fullName: 'Chirag',
                email: 'chirag@gmail.com',
                password: 'Chirag@121',
            })
            if (response.status === 201) {
                console.log(response);
            } else {
                setshowErrorMessage(true)
                console.log(response);
            }
        }catch(error) {
            console.log(error);
            setshowErrorMessage(true)
        }        
    }

    return (
        <div className='flex items-center justify-center mt-48 flex-col space-y-3 mb-16'>
            <input type="text" className='outline-none border border-black rounded-lg py-2 w-[20rem] px-3' placeholder='Enter Your Name'
                value={name} onChange={(e) => setname(e.target.value)} />
            <button className='p-3 bg-green-400 border border-white rounded-lg' onClick={getPost}>
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