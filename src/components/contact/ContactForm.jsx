import React, {useState} from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {submitForm} from "../../utils/formSubmit";
import style from './contactForm.module.scss'

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('+375');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            phone,
            message,
        };

        submitForm(
            formData,
            () => {
                // Обработка успешной отправки формы
                // Очистка полей формы, вывод сообщения об успешной отправке и т.д.
                // ...
            },
            () => {
                // Обработка ошибки сервера
                // Вывод сообщения об ошибке и подсветка соответствующих полей с ошибками
                // ...
            }
        );
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
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className={style['form-container']}>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className={style['form-container']}>
                <label htmlFor="phone">Телефон:</label>
                <PhoneInput
                    id="phone"
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    required
                />
            </div>
            <div className={style['form-container']}>
                <label htmlFor="message">Сообщение:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Отправить</button>
        </form>
    );
};
