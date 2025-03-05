function Greeting() {
  return <h1>hello React default export</h1>;
}

export function Greeting1() {
  return (
    <div>
      <h1>hello React Greeting1</h1>
    </div>
  );
}

export function Greeting2() {
  return (
    <div>
      <h1>hello React Greeting2</h1>
    </div>
  );
}

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
export function TestJSX() {
  return (
    <div>
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
    </div>
  );
}


export default Greeting;
