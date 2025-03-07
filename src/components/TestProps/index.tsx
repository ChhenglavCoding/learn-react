import React from "react";


interface TestPrps {
    h1Description: string;
}
// props using arrow function
const TestProps: React.FC<TestPrps> = (props) => {
    return(
        <>
            <h1 title="Hi Props">{props.h1Description}</h1>    
        </>
    );
}
export default TestProps;