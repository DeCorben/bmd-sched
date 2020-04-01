import React from 'react'
import ReactDOM from 'react-dom'
import Sched from '../src/index.jsx'
import axios from 'axios'

//need to try updating when part of another component and data is not
    //synchronous
class Stub extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {
                heading: "Dummy",
                "9:99-9:99": "something"
            }
        }
        axios.post('/api/fetch',{fileName:'billboard.json'})
        .then((res)=>{
            this.setState({
                data: res.data
            })
        })
        .catch((err)=>{
            console.log(`API Error: ${err}`)
        })
    }
    render = ()=>{
        return (<div><Sched data={this.state.data}/></div>)
    }
}

ReactDOM.render(
            <div className="questionable">
                <Stub/>
            </div>,
            document.getElementById('root')
        )