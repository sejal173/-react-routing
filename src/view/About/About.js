import "./About.css";
import Navbar from "./../../components/Navbar/Navbar";
import Button from "./../../components/Button/Button"

export default  function About(){
    return(
        <>
            <Navbar/>
            <h1>About Page</h1>
            <Button text="Normal button"/>
            <Button text="About button"/>
        </>
    )
}
