import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Stocks from './pages/Stocks/Stocks'
import Dashboard from './pages/Dashboard/Dashboard'

export default function App(){
        //getTodos
        const getStocks = async () => {
            try{
                const response = await fetch('/api/stocks')
                /*
                look at app-server and see the /api/todos routes
                go to the routes identify the get request that goes to api/todos
                review the controllers and see that the controllers
                respond with an array of todos that are incomplete
                */
                const foundStocks = await response.json()
                // format to a js array or object. We reverse it because on retrieving it, the array will be in the opposite intended order.
                setStocks(foundStocks) // update state and cause diff algorithm to run
            } catch(error){
                console.error(error)
            }
        }
        useEffect(() => {
            getStocks()
        }, [])
    return (
        <div className='App'>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/stocks/:symbol" element={<Stocks/>}/>
                <Route path="/stocks" element={<Dashboard/>}/>
            </Routes>
        </div>
    )
}
