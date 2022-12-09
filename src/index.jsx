import React from "react";
import ReactDOM from 'react-dom/client';
import'./index.css'

const App = () => {
    return (
        <div className="hello">Hello, HC-ICE</div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);