import { React, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../Input/Input';
import { UserContext } from '../context/UserContext'
import './Form.css';

export default function Form(props) {
    const user = useContext(UserContext);
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [select, setSelect] = useState(user.select || '');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const history = useHistory()
    const [isValidName, setIsValidName] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [successName, setSuccessName] = useState('');
    const [successEmail, setSuccessEmail] = useState('');
    function handleSubmit() {
        !nameError && name !== '' ? setSuccessName('success') : setIsValidName(false);
        !emailError && email !== '' ? setSuccessEmail('success') : setIsValidEmail(false);
        if (!nameError && !emailError && name !== '' && email !== '' && select !== '') {
            let resalt = {
                name,
                email,
                select
            }
            props.changeData(resalt)
            setTimeout(() => history.push('/'), 1000)
        } return
    }

    function handleChangeMessage(e) {
        setMessage(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value);
        const regex = /[^\-a-zA-Zа-яА-ЯЁё\s]/;
        (regex.test(String(e.target.value).toLowerCase())) ? setNameError('Некорректное имя') : setNameError('') || e.target.value === '' ? setNameError('Имя не может быть пустым') : setNameError('');
    }

    function handleEmail(e) {
        setEmail(e.target.value);
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        e.target.value === '' ? setEmailError('Email не может быть пустым') : setEmailError('') || (!regex.test(String(e.target.value).toLowerCase())) ? setEmailError('Некорректный email') : setEmailError('');
    }
    function handleSelect(e) {
        setSelect(e.target.value);
    }
    return (
        <div className="form__page">
            <div className="form">
                <h1 className="form__title">Форма для тебя</h1>
                <Input
                    type="text"
                    name="name"
                    placeholder="Представьтесь пожалуйста"
                    value={name || ''}
                    onChange={handleName}
                    error={isValidName ? '' : nameError}
                    success={successName} />
                <Input
                    type="email"
                    name="email"
                    placeholder="Введите ваш e-mail"
                    value={email || ''}
                    onChange={handleEmail}
                    error={isValidEmail ? '' : emailError}
                    success={successEmail} />
                <select value={select} onChange={handleSelect} className="form__select" name="theme" required>
                    <option value="" disabled hidden>Тема сообщения</option>
                    <option value="Тема 1">Тема 1</option>
                    <option value="Тема 2">Тема 2</option>
                    <option value="Тема 3">Тема 3</option>
                    <option value="Тема 4">Тема 4</option>
                </select>
                <textarea
                    type="text"
                    name="message"
                    className="form__message"
                    placeholder="Введите сообщение"
                    value={message}
                    onChange={handleChangeMessage}
                />
                <div className="form__button__placeholder">
                    <button type="button" className="form__button">Сбросить</button>
                    <button type="button" className="form__button" onClick={handleSubmit}>Отправить</button>
                </div>
            </div>
        </div>
    )
}