"use client";
import React from "react";

function Counter(props) {
    const [count, setCount] = React.useState(0);

    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold">{props.title}</h2>
        
            <div className="flex items-center gap-4">
                <span className="text-4xl font-mono tabular-nums">{count}</span>
            </div>
        </div>
    );
}

export default Counter;
