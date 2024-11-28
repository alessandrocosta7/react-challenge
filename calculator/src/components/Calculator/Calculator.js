import ItemOperator from '../ItemOperator/ItemOperator'
import './Calculator.css'
import { useState, useEffect } from 'react';

export default function Calculator() {
    const [result, setResult] = useState(0);
    const [arrayItems, setArrayItems] = useState([
        { id: 0, sign: "plus", value: 100, enabled: true },
        { id: 1, sign: "minus", value: 20, enabled: true },
        { id: 2, sign: "plus", value: 10, enabled: true },
    ]);

    useEffect(() => {
        let res = 0;
        arrayItems.map(item => {
            res += item.enabled ? item.sign === "plus" ? (+item.value) : (-item.value) : 0;
        })
        setResult(res);
    }, [arrayItems])

    const changeValueItem = (e, id) => {
        let auxArrayItems = [...arrayItems];
        auxArrayItems.map(el => {
            if (el.id === id)
                el.value = e.target.value;
        })
        setArrayItems(auxArrayItems);
    }
    const changeSignItem = (e, id) => {
        let auxArrayItems = [...arrayItems];
        auxArrayItems.map(el => {
            if (el.id === id)
                el.sign = e.target.value;
        })
        setArrayItems(auxArrayItems);
    }

    const deleteItem = (id) => {
        setArrayItems([...arrayItems.filter(item => item.id !== id)]);
    }

    const addItem = () => {
        var templateItem = { id: Math.floor(Math.random() * 10000), sign: "plus", value: 0, enabled: true };
        setArrayItems([...arrayItems, templateItem]);
    }

    const enableDisableItem = (item) => {
        let auxArrayItems = [...arrayItems];
        auxArrayItems.map(el => {
            if (el.id === item.id)
                el.enabled = !item.enabled;
        })
        setArrayItems(auxArrayItems);
    }

    return (
        <div className="container">
            <button onClick={addItem} className="btnAddRow">Add Row</button>
            {arrayItems.map(item => {
                return <ItemOperator
                    key={item.id}
                    item={item}
                    changeValueItem={changeValueItem}
                    changeSignItem={changeSignItem}
                    deleteItem={deleteItem}
                    enableDisableItem={enableDisableItem}
                />
            })}
            <b className="result">RISULTATO: {result}</b>
        </div>
    )
}