import React, {useState} from "react"

function Search(){
    const [booklist, setbooklist] = useState([])
    const [query, setquery] = useState("")
    const searchbooks = async (e)=>{
        e.preventDefault()
        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        let data = await response.json()
        let books = data.items.map(item=>{
            return{
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                description: item.volumeInfo.description,
                link: item.volumeInfo.link,
                id: item.id,
                image: item.volumeInfo.imageLinks?.thumbnail
        
            }
        })
        setbooklist(books)
    }

    const savebook = async (book)=>{
        let response = await fetch('/api/books', {
            method: "POST",
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json'
              },
        })
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
                            <th>save</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {booklist.map(book=>(
                            <tr>
                                <td>{book.title}</td>
                                <td>{book.authors.join(", ")}</td>
                                <td>{book.description}</td>
                                <td><img src={book.image}/></td>
                                <td><a href={book.link}>link</a></td>
                                <td>
                                    <button onClick={()=>savebook(book)}>
                                        save
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Search