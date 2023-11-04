import React, {useState} from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {submitForm} from "../../utils/formSubmit";
import style from './contactForm.module.scss'
import {validateForm} from "../../utils/validateForm";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('+375');
    const [message, setMessage] = useState('');
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '+375',
    //     message: '',
    // });
    const [errors, setErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState('');
    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            phone,
            message
        }
        const validationErrors = validateForm(formData)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMsg('');
        } else {
            submitForm(
                formData,
                () => {
                    setErrors({});
                },
                () => {
                    setSuccessMsg('');
                }

            );
        }
        console.log(formData)
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className={style['form-container']}>
                <label htmlFor="name">Имя:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e)=>{
                        setName(e.currentTarget.value)
                    }}
                    required
                />
            </div>
            <div className={style['form-container']}>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.currentTarget.value)
                    }}
                    required
                />
            </div>
            <div className={style['form-container']}>
                <label htmlFor="phone">Телефон:</label>
                <PhoneInput
                    id="phone"
                    value={phone}
                    onChange={(value)=>{
                        setPhone(value)
                    }}
                    required
                />
            </div>
            <div className={style['form-container']}>
                <label htmlFor="message">Сообщение:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e)=>{
                        setMessage(e.currentTarget.value)
                    }}
                    required
                />
            </div>
            <button type="submit">Отправить</button>
        </form>
    );
};
