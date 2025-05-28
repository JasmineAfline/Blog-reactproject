import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';




const BlogDetails = () => {
    const history = useHistory();
    

    const { id } = useParams();
    const {data: blog} = useFetch('https://localhost:4000/blogs/' + id);

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.delete('https://localhost:4000/blogs/' +id)
            .then(res =>{
                history.push("/")

            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className="details">
        {blog && (
            <article>
            <h3>{blog.title}</h3>
            <p>Done by:{blog.author}</p>
            <Button onClick={handleSubmit}className="mt-3" variant="danger" type="submit">Delete</Button>
            </article>
        )}
       
        </div>
    )
}

export default BlogDetails;