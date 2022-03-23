import './UserData.css';
export default function UserData(props) {
    return (
        <div className="user-data">
            <p className="user-data__title">Фио:<span className="user-data__subtitle">{props.user.name}</span></p>
            <p className="user-data__title">E-mail:<span className="user-data__subtitle">{props.user.email}</span></p>
            <p className="user-data__title">Тема:<span className="user-data__subtitle">{props.user.select}</span></p>
        </div>
    )
}