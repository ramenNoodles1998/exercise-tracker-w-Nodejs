import React, {Component} from 'react'
import axios from 'axios'

export default class CreateWorkout extends Component{
    constructor(props){
        super(props)

        this.onChangeWorkout = this.onChangeWorkout.bind(this)
        
        this.onSubmit = this.onSubmit.bind(this)

        this.state={
            workout: '',
            reps: 0,
            weight: 0,
            date: new Date(),
            users: []
        }

    }
    onChangeWorkout(e){
        this.setState({
            workout: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()

        const workout = {
            workout: this.state.workout,
            
        }

        console.log(workout)

        axios.post('http://localhost:5000/workouts/add', workout)
        .then(res=> console.log(res.data))

        this.setState({
            workout: ''
        })
    }
    render(){
        return(
            <div>
                <h3>Create New Workout</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Workout: </label>
                        <input
                            type="text"
                            required
                            className ="form-control"
                            value={this.state.workout}
                            onChange={this.onChangeWorkout}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Create Workout" className ="btn btn-dark"/>
                    </div>

                </form>
            </div>
        )
    }
}