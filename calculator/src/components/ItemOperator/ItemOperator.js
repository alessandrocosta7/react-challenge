import './ItemOperator.css'

export default function ItemOperator({ item, changeValueItem, changeSignItem, deleteItem, enableDisableItem }) {
    return (
        <div className="cardOperator">
            <select onChange={(e) => changeSignItem(e, item.id)} value={item.sign} id="selectSign">
                <option value="plus">+</option>
                <option value="minus">-</option>
            </select>
            <input className={!item.enabled ? "disabledInput" : ""} id="inputValue" type="number" value={item.value} onChange={(e) => changeValueItem(e, item.id)} />
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => enableDisableItem(item)}>{item.enabled ? "Disable" : "Enable"}</button>
        </div>
    )
}