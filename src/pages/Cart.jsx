import React from 'react'
import { Header } from '../components'
import{Routes, Route} from 'react-router-dom'



function Cart() {
    return (
        <div className="wrapper">
            <Routes>
            
    <Route path ="/" element={ <Header/>}/>

    </Routes>   
        </div>
    )
}

export default Cart
