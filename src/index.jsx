import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { Button } from '@alifd/next';
import Home from "./page/home/index.jsx";
import'./index.less'

const App = () => {

    const a = "[{\"downloadUrl\":\"/ossFileHandle?appType=APP_X66J3HR5W8PGMOQ5S6N0&fileName=APP_X66J3HR5W8PGMOQ5S6N0_MTY1NTQ5MTgwNzk5MzMwNl9TVDg2NldCMVlBUTVXUVQ0OFFSWEU4SklYU0RXM0EwTko5V0FMVjc$.pdf&instId=&type=download\",\"name\":\"易快报续费报价（镁信2022-11-25）(1).xlsx.pdf\",\"previewUrl\":\"/inst/preview?appType=APP_X66J3HR5W8PGMOQ5S6N0&fileName=APP_X66J3HR5W8PGMOQ5S6N0_MTY1NTQ5MTgwNzk5MzMwNl9TVDg2NldCMVlBUTVXUVQ0OFFSWEU4SklYU0RXM0EwTko5V0FMVjc%24.pdf&fileSize=231595&downloadUrl=APP_X66J3HR5W8PGMOQ5S6N0_MTY1NTQ5MTgwNzk5MzMwNl9TVDg2NldCMVlBUTVXUVQ0OFFSWEU4SklYU0RXM0EwTko5V0FMVjc$.pdf\",\"size\":231595,\"url\":\"/ossFileHandle?appType=APP_X66J3HR5W8PGMOQ5S6N0&fileName=APP_X66J3HR5W8PGMOQ5S6N0_MTY1NTQ5MTgwNzk5MzMwNl9TVDg2NldCMVlBUTVXUVQ0OFFSWEU4SklYU0RXM0EwTko5V0FMVjc$.pdf&instId=&type=download\"}]"
    
    const  b= JSON.parse(a)
    console.log(b[0])


    useEffect(() => {
        fetch('http://localhost:3000/users/users').then((res) => {
           res.json().then((req) => {
              console.log(JSON.parse(req))
           })
        })
    },[])


    return (
        <>
         <Button type="primary" className="hello">Hello, HC-ICE</Button>
         <Home/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);