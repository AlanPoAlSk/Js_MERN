import axios from 'axios';
import { Link } from 'react-router-dom';
    
const AuthorList = (props) => {
    const { removeFromDom } = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }
    

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={'/'}>back</Link> <hr />
            <Link to="/authors/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table className='border size'>
                <thead>
                    <tr>
                    <th className='border' colSpan="1">Authors</th>
                    <th className='border' colSpan="2">Actions available</th>
                    </tr>
                </thead>
                <tbody>
            {props.authors.map( (author, i) =>
                    
                        <tr key={i} className='center'>
                            <td className='border' style={{fontWeight:'bold'}}> {i+1}. {author.name}</td>
                            <td className='border'><Link to={"/authors/"+ author._id}>Edit</Link> <button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button></td>
                        </tr>
                    // </div>
                )}
                </tbody>
            </table>
                
        </div>
    )
}
    
export default AuthorList;

