import './Input.css';

export default function Input(props) {
    return (
        <>
            <input
                type={props.type}
                name={props.name}
                className={props.error === '' ? `input ${props.success}` : "input input__error"}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <span className={props.error ? "input__error_text" : ""}>{props.error}</span>
        </>
    )
}