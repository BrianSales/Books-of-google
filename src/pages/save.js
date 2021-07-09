import React, {useState} from "react"

const save =()=>{
    const [booklist, setbooklist]=useState([])

    return(
       <div>
           <input/>
           <table>
               <thead>
                   <tr>
                       <th>Cover</th>
                       <th>Title</th>
                       <th>Author</th>
                       <th>Save</th>
                   </tr>
               </thead>
               <tbody>
                   {booklist.map((book)=>{
                       <tr>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td>
                               <button>
                                   Save
                               </button>
                           </td>
                       </tr>
                   })}

               </tbody>
           </table>
           
       </div> 
    )
}