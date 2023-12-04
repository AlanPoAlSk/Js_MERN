import { useParams } from "react-router-dom";

const Color = (props) => {
    const {word,color1,color2} = useParams();
    
            return (
                <div>
                    <h1 style={{color: color1, backgroundColor:color2}}>The {isNaN(+word)? 'word' : 'number'} is: {word} </h1>
                </div>
            );
    
}
export default Color;