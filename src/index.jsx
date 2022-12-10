import React from "react";
import ReactDOM from 'react-dom/client';
import { Button } from '@alifd/next';
import'./index.css'

const App = () => {
    return (
        <Button type="primary" className="hello">Hello, HC-ICE</Button>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);