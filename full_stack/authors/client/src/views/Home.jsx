import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h1>Welcome to the AS authors!!!</h1>
            <Link to={'/authors'}>See all authors</Link>
        </div>
    )
}

export default Home;