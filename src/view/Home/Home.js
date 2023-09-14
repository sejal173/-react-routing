import "./Home.css";
import Navbar from "./../../components/Navbar/Navbar"
import Button from "./../../components/Button/Button"

export default function Home(){
    return(
        <>
            <div className="container">
                <Navbar/>
                <h1>Home Page</h1>
                <Button text="Normal button"/>
                <Button text="Home button"/>
            </div>
        </>
    )
}