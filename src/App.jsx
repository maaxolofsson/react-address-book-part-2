import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import ContactSingle from './components/ContactSingle';
import ContactList from './components/ContactList';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Container />} />
            </Routes>
            <Outlet></Outlet>
        </>
    );
}

export default App;
