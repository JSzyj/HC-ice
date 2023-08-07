import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { Button } from '@alifd/next';
import Home from "./page/home/index.jsx";
import'./index.less'

const App = () => {
     var arr1 =  ['212100000000', '212102000000', '211500000000'] 
     var arr2 =   ['辽宁分公司', '大连分公司', '内蒙古分公司']
  
   const arr3 =   arr1.map((item,index) => {
        return {
            code:item,
            name:arr2[index]
            
        }
    })

    const mergeArr = (arr1,arr2) => {
        const newArr =   arr1.map((item,index) => {
            return {
                code:item,
                name:arr2[index]
                
            }
        })
        return newArr
    }
    console.log(arr3)

    useEffect(() => {
        mergeArr(arr1,arr2)
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