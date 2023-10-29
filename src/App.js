import './App.module.css';
import {ContactForm} from "./components/contact/ContactForm";
import {useState} from "react";
import {Modal} from "./components/modal/Modal";
import style from "./App.module.css"
import {Button} from "./components/button/Button";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => {
        setIsOpen(true);
    }
    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <div className={style.App}>
            <Button
                nameButton={"Modal Button"}
                onClick={handleOpenModal}
                variant={'primary'}
            />
            {isOpen && <Modal isOpen={isOpen} onClose={handleCloseModal} text={<ContactForm/>}/>}
        </div>
    );
}

export default App;
