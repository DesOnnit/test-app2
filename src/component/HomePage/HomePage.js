import { React, useContext } from 'react';
import { UserContext } from '../context/UserContext'
import UserData from '../UserData/UserData'
import { Link } from 'react-router-dom'
import './HomePage.css';

export default function HomePage() {
    const user = useContext(UserContext);
    return (
        <div className="home-page">
            <p className="home-page__title">Form data:</p>
            {user === '' ?
                <p className="home-page__title">Форма пока не заполнена</p>
                :
                <UserData
                    user={user} />
            }
            <Link to={user.name ? "/form/edit" : "/form"}>
                <button type="button" className="home-page__button">{user.name ? 'Изменить' : 'Заполнить форму'}</button>
            </Link>
        </div>
    )
}