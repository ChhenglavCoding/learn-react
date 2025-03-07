import Greeting from "./components/Greeting";
import{Greeting1, Greeting2} from "./components/Greeting";

import { TestJSX } from "./components/TestJSX";
import  TestProps  from "./components/TestProps";
import TestProps2 from "./components/TestProps2";



function App() {
  return (

    <>
      <TestJSX/>
      <Greeting1 />
      <Greeting />
      <Greeting2 />
      <TestProps h1Description={"Hi props"}/>
      <TestProps h1Description={"hello props"}/>
      <TestProps2/>
      <TestProps2 source="https://imgs.search.brave.com/1-DXGy3SDiVFKO042M1npvjazS-zdNKUWCo9cAjW5l0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sZW9u/YXJkby5haS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wMS9Q/aG90b3JlYWwxLmpw/Zw"/>
      <TestProps2 source="https://imgs.search.brave.com/k6BO459mEUKLxN1BzqjH6qDtuuPsZYJWyRsXlzAvZHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9teWxp/by5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDEvZGVk/aWNhdGVkLWN1c3Rv/bWVyLXN1Y2Nlc3Mu/cG5n"/>
    </>
    
  );
}

export default App
