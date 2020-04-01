import React from 'react'
import ReactDOM from 'react-dom'
import Sched from '../src/index.jsx'
import axios from 'axios'

axios.post('/api/fetch',{fileName:'billboard.json'})
    .then((res)=>{
        ReactDOM.render(
            <div>
                <Sched data={res.data}/>
            </div>,
            document.getElementById('root')
        )
    })
    .catch((err)=>{
        console.log(`API Error: ${err}`)
        ReactDOM.render(
            <div>666:Crash</div>
        )
    })

