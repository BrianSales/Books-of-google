import React, {useState} from "react"

function search(){
    const [booklist, setbooklist] = useState([])
    const [query, setquery] = useState("")
    const searchbooks = async ()=>{
        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        let data = await response.json()
    }
    return(
        <div>
            <div>
                <form>
                    <input value={query} onChange={(e)=>{
                        setquery(e.target.value)
                    }}/>
                    <button onClick={searchbooks}>
                        search
                    </button>
                </form>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>  
                            <th>Description</th>  
                            <th>Image</th>  
                            <th>Link</th>     
                        </tr>
                    </thead>
                    <tbody>
                        {booklist.map(book=>(
                            <tr>
                                <td></td>
                                <td>Title</td>
                                <td>Title</td>
                                <td>Title</td>
                                <td>Title</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}