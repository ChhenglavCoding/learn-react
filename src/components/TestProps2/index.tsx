import React from "react";

interface TestPrps2 {
    source?: string;
}

const TestProps2: React.FC <TestPrps2> = (props) => {
    const  { source = "https://imgs.search.brave.com/_GRoJLpx8guzibMoSIfuTSZ2VzzgGforhXw-LJl9TXY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVuZm9ydW1zLmNv/bS9nZWVrL2dhcnMv/aW1hZ2VzLzIvdHlw/ZXMvdGh1bWJfV2lu/ZG93c19QaG90b19W/aWV3ZXIucG5n"} = props;
    
    return <img style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%'}} src={source} alt="profile" title="photo profile" />;
};

export default TestProps2;
