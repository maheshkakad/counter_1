import React from "react";
import styles from "./main.module.css";
const Counter = () => {
   const [count , setCount] = React.useState(0);
    // const incrementcount =() => {
    //     setCount(count + 1);
    //     console.log("post" + count);
    // }
    // const decrementcount =() => {
    //     setCount(count - 1);
    //     console.log("post" + count);
    // }
    return <>
        <div>
            <h1 className={count % 2 === 0 ? styles.greenCol : styles.redCol}>
                Counter App : {count}</h1>
            <button onClick={() => setCount( count+1 )}>Increment</button>
            <button onClick={() => setCount( count -1 )}>Decrement</button>
             <button onClick={() => setCount(count *2 )}>Double</button>
        </div>
    </>
};

export default Counter;