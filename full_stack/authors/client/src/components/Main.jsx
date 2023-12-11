import { useEffect, useState } from 'react';
import AuthorList from './AuthorList';
import axios from 'axios'

const Main =  () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[authors]);
 //with [products] ,when the list of products changes, it will update the list of all products displayed
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }
    return (
        <div>
            {loaded && <AuthorList authors={authors} removeFromDom = {removeFromDom}/>}
            
        </div>
    )
}
    
export default Main;

