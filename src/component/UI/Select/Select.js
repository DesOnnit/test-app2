import './Select.css';
export default function Select({options,defaultValue, select, handleSelect}) {
    return (
        <>
            <select value={select} onChange={handleSelect} className="form__select" name="theme" required>
                <option value="" disabled hidden>{defaultValue}</option>
                {options.map((op)=> <option value={op.value}>{op.title}</option>)}
            </select>
        </>
    )
}