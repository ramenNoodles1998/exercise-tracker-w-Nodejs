import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class CreateExercise extends Component{
    constructor(props){
        super(props)

        this.onChangeWorkout = this.onChangeWorkout.bind(this)
        this.onChangeReps = this.onChangeReps.bind(this)
        this.onChangeWeight = this.onChangeWeight.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state={
            workout: '',
            reps: '',
            weight: 0,
            date: new Date(),
            workouts: []
        }

    }

    componentDidMount(){
        axios.get('http://localhost:5000/workouts/')
        .then(res => {
            if(res.data.length>0){
                this.setState({
                    workouts: res.data.map(workout=>workout.workout),
                    workout: res.data[0].workout
                })
            }
        })
    }

    onChangeWorkout(e){
        this.setState({
            workout: e.target.value
        })
    }
    onChangeReps(e){
        this.setState({
            reps: e.target.value
        })
    }
    onChangeWeight(e){
        this.setState({
            weight: e.target.value
        })
    }
    onChangeDate(date){
        this.setState({
            date: date
        })
    }
    onSubmit(e){
        e.preventDefault()

        const exercise = {
            workout: this.state.workout,
            reps: this.state.reps,
            weight: this.state.weight,
            date: this.state.date
        }

        axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res=>console.log(res.data))

        window.location = '/'
    }
    render(){
        return(
            <div>
                <h3>Create new Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Workout: </label>
                        <select
                            ref="userInput"
                            required
                            className="form-control"
                            value={this.state.workout}
                            onChange={this.onChangeWorkout}
                        >{
                            this.state.workouts.map(function(workout){
                                return <option 
                                    key ={workout}
                                    value ={workout}>{workout}
                                    </option>
                            })
                        }</select>

                    </div>
                    <div className="form-group">
                        <label>Reps: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.reps}
                            onChange={this.onChangeReps}
                            />

                    </div>
                    <div className="form-group">
                        <label>Weight(lbs): </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.weight}
                            onChange={this.onChangeWeight}
                            />

                    </div>
                    <div className="form-group">
                        <label style={{paddingRight: 10}}>Date: </label>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        
                        />

                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-dark">Create Exercise Log</button>
                    </div>
                </form>
            </div>
        )
    }
}