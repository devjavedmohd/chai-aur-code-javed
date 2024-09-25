// import { useEffect, useState } from "react"
import { useLoaderData  } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/devjavedmohd')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })useLoaderData
    // }, [])

    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <span>Github followers: {data.followers}</span>
            <br />
            <span>Github following: {data.following}</span>
            <img className="mx-auto mt-4" src={data.avatar_url} alt="Git picture" width={100} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    // this is Promise
    const response = await fetch('https://api.github.com/users/devjavedmohd')
    return response.json()
}