import Greeting from "./components/Greeting";
import{Greeting1, Greeting2} from "./components/Greeting";

import { TestJSX } from "./components/TestJSX";
import  TestProps  from "./components/TestProps";



function App() {
  return (

    <>
      <TestJSX/>
      <Greeting1 />
      <Greeting />
      <Greeting2 />
      <TestProps h1Description={"Hi props"}/>
      <TestProps h1Description={"hello props"}/>
    </>
    
  );
}

export default App
