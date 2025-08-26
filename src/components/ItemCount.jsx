import { useEffect, useState } from "react";
const ItemCount = () => {
const [count, setCount] = useState(0);

    const sumar = () => {
    setCount(count + 1);
    }

    const restar = () => {
    if (count > 0) {
        setCount(count - 1);
    }
    }

    return(
    <div>
        <h2>Contador: {count}</h2>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
    </div>
    )
}
export default ItemCount