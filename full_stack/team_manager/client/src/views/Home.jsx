import { Link } from "react-router-dom";
const Home = () => {

    return (
        <div>
            <h1>Welcome to the Team Manager app AS</h1>
            <Link to={'/players/list'}> Players list</Link>
        </div>
    )
}

export default Home;