import { CSSProperties } from "react";
import "./style.css";



const name = "Chhenglav";
const titlegreeting = "Javascript";


interface Myobject {
    id: number;
    name: string;
    age?: number;
}

const myobject: Myobject = {
    id: 1,
    name: "chhenglav",
    age: 30
}
// internal CSS
const myInternalCss: CSSProperties={
  backgroundColor: "blue",
  color: "white",
  textAlign: 'center'
};



export function TestJSX() {
    return (
      <>
        <h1>
          hello {name} {1 + 2}
        </h1>
        <h1 title={titlegreeting}>Hello React JS</h1>
  
        <ul>
          <h1>Object Person:</h1>
          <li>ID: {myobject.id}</li>
          <li>Name: {myobject.name.toUpperCase()}</li>
          <li>Age: {myobject.age}</li>
        </ul>
  
        {/* {Inline CSS} */}
        <h1 
          style={{ backgroundColor: "purple", color: "whitesmoke",
                   textAlign: "center"
           }}
        >Inline CSS</h1>
  
        {/* Internal CSS */}
        <h1 style = {myInternalCss}>Internal CSS</h1>
  
        {/* External CSS */}
  
        <h1 id="externalCss">External CSS</h1>
        
      </>
    );
}