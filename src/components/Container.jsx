import Menu from "./Menu";
import ContactList from "./ContactList";
import '../css/Container.css'
import { Route, Routes } from "react-router-dom";
import ContactSingle from "./ContactSingle";

function Container() {
    return (
        <div id="main-container">
            <Menu></Menu>
            <ContactList></ContactList>
        </div>
    );
}

export default Container;