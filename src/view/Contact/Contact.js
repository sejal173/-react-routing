import "./Contact.css";
import "./../../components/Navbar/Navbar"
import Navbar from "./../../components/Navbar/Navbar";
import Button from "./../../components/Button/Button";

export default function Contact(){
    return(
        <>
            <div>
                <Navbar/>
                    <h1>Contact Page</h1>
                <Button text="Normal button"/>
                <Button text="Contact button"/>

            </div>
        </>
    )
}