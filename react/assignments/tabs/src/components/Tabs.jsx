

const TabsShow = (props) => {
    const {name} = props
    const {age} = props
    const {index} = props
    const {born_in} = props
    const {currently_in} = props
    const {setSelected} = props
    const {selected} = props
    
    const buttonHandler = () => {
        setSelected (index)
        
        // alert ('wanna know about this person?')
    }
    return (
        selected === index? <button style={{backgroundColor:'goldenrod' , color:'white', fontSize:'x-large'}} onClick={buttonHandler}>{name}</button> 
        :
        <button style={{fontSize:'x-large'}} onClick={buttonHandler}>{name}</button>
        )
    }


export default TabsShow;