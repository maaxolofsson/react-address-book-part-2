import { useEffect, useState } from "react";
import API from "../../API"
import '../../css/ContactList.css'
import { Link, Route, Routes } from "react-router-dom";
import ContactSingle from "../ContactSingle";

function ContactList() {
    const [contacts, setContacts] = useState([])

    useEffect(
        () =>
            async function () {
                const data = await API.get("contact")
                setContacts(data);
            },
        []
    );

    return (
        <>
            <Routes>
                <Route path="/contact/view:id" element={<ContactSingle />}></Route>
            </Routes>
            <ul>
                <h3>All contacts</h3>
                {contacts.map((c) => (
                    <li key={c.id}>
                        <img src={c.profileImage} alt="" /><br></br>
                        {c.firstName} {c.lastName} <br></br>
                        <Link to={"/contact/view/" + c.id}>View details</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ContactList;