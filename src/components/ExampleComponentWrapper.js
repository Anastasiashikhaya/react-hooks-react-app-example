import React from "react";
import ExampleComponent from "./ExampleComponent";

function ExampleComponentWrapper() {
    return (
        <>
            <ExampleComponent />
            <img
                src="dummy.jpg"
                alt="time video"
                style={{ display: 'none' }}
                aria-hidden="true"
            />
        </>
    );
}

export default ExampleComponentWrapper;