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
export function TestJSX() {
  return (
    <div>
      <h1>
        hello {name} {1 + 2}
      </h1>
      <h1 title={titlegreeting}>Hello React JS</h1>
    </div>
  );
}

export default Greeting;
