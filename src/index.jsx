import React from 'react'
import Appt from 'bmd-appt'

export default class Sched extends React.Component{
    constructor(props){
        super(props)
        this.data = props.data
        this.state = {
            heading: props.data.heading,
            schedule: this.parse()
        }
    }
    componentDidUpdate = (prev)=>{
        if(prev !== this.data){
            this.setState({
                heading: props.data.heading,
                schedule: this.parse()
            })
        }
    }
    parse = ()=>{
        let bench = []
        for(const i in this.data){
            if(i !=='heading'){
                let time = i.split('-')
                bench.push(<Appt key={i} start={time[0]} end={time[1]} desc={this.data[i]}/>)
            }
        }
        return bench
    }
    render = ()=>{
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <div className="apptList">
                    {this.state.schedule}
                </div>
            </div>
        )
    }
}
