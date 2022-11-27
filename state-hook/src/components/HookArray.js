import React, { useState } from 'react'

export default function HookArray() {
    const [names, setNames] = useState([]);

    const addItem = () => {
        setNames([
            ...names,
            {
                id: names.length,
                name: `New Name ${names.length + 1}`
            }
        ])
    }

    return (
        <div>
            <button onClick={addItem}>Add a Name</button>
            <ul>
                {
                    names.map(name => (
                        <h3>{name.name}</h3>
                    ))
                }
            </ul>
        </div>
    )
}
