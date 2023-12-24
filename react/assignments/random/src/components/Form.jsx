import { useState } from "react";

const Form = () => {
    const [lotteryNumbers, setLotteryNumbers] = useState([]);
    const [powerBallNum, setPowerBallNum] = useState ('')

    const generateLotteryNumbers = () => {
        const min = 1;
        const max = 69;
        const generatedNumbers = [];
        

        for (let i = 0; i < 5; i++) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            generatedNumbers.push(randomNumber);
        }
        const minP = 1;
        const maxP = 26;
        const powerBallNum = Math.floor(Math.random() * (maxP - minP + 1)) + minP;
        setPowerBallNum(powerBallNum);

        setLotteryNumbers(generatedNumbers);
    };

    return (
        <div>
            <div>
            <button onClick={generateLotteryNumbers}>Try your Luck!</button>
            </div>
            <h2>Your 5 lucky numbers:</h2>
            <div style={{display: 'flex' , justifyContent:'center'}}>
                {lotteryNumbers.map((number, index) => (
                    <div style={{fontSize: 'xx-large'}} key={index}>| {number} |</div> 
                ))}
            </div>
            <h2> Your lucky Powerball number:</h2>
                <div style={{fontSize: 'xx-large'}}> {powerBallNum} </div>
        </div>
    );
};

export default Form;
// import { useState , useCallback } from "react";

// const Form = () => {
//     let [min,setMin] = useState('')
//     let [max,setMax] = useState('')
//     const [random,setRandom] = useState('')
    
//     const randomNum= useCallback(() => {
//         if (isNaN(min) || isNaN(max)) {
//             alert('Please enter valid numbers for Min and Max');
//             return;
//         }
//         const minVal = parseFloat(min);
//         const maxVal = parseFloat(max);

//         if (maxVal < minVal) {
//             alert('Max value should be higher than Min value');
//             setRandom('Error');
//             return;
//         }

//         const random = parseFloat(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
//         setRandom(random); 
//         console.log(random)
//         if (maxVal < minVal) {
//             alert('Max value should be higher than Min value');
//             setRandom('Error');
//         }
//         }, [min, max]); 

//     return (
//         <div>
//             <label htmlFor="min">Min:</label>
//             <input type="number"  onChange={(e) => setMin(e.target.value)} value={min}/>
//             <label htmlFor="max">Max:</label>
//             <input type="number"  onChange={(e) => setMax(e.target.value)} value={max}/>
//             <button onClick={randomNum}>Get you random number</button>
//             <h3>[ {random}]</h3>
//         </div>
//     )
// }

// export default Form;

