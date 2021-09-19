// your Bomb code here!
import React, {Component} from 'react'
export default class Bomb extends Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        let message = " "
        if (this.state.secondsLeft > 0){
            message = `${this.state.secondsLeft} seconds left before I go boom!` 
        }
        else if (this.state.secondsLeft == 0){
            message = "Boom!"
        }
        return(
            <div>{message}</div>
        )
    }
}