import React, {Component} from "react"

class GetReservation  extends Component{

    constructor(){
        super();
        this.state={
            reservation:[],
            id : ""
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault();
        const id = e.target.id.value;
        console.log("id:", id)
        this.setState({id :id});
        console.log(this.state.id)
    }

    componentDidMount() {
        fetch("/api/reservations/:_id",{_id : this.state.id} )
            .then(res => res.json())
            .then(data => this.setState({reservations : data}))
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return (
            <div>
                <h2>GetReservation</h2>
                <form onSubmit = {this.onSubmit}>
                <input type = "text" name ="id" onChange ={this.onChange}/>
                <button type= "submit">submit</button>
                </form>
                {this.state.reservation.lenth !==0 && 
                    <ul>
                        <li>{this.state.reservation}</li>
                    </ul>
                }
                
            </div>
        )
    }
    
}

export default GetReservation