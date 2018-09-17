import React,{Component} from "react"

class Reserve extends Component{

    onSubmit(e){
        e.preventDefault();
         const data ={ name : e.target.name.value,
                        hotelName : e.target.hotelName.value,
                        arrivalDate : e.target.arrivalDate.value,
                        departureDate : e.target.departureDate.value,
         }
        // console.log(data)
        e.target.reset();

        fetch("/api/reservations", {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                   Name: 
                   <input  
                        type = "text"
                        name = "name"
                        placeholder = "Enter Full Name"
                        onChange = {this.onChange}
                    />
                    <br />
                   HotelName: 
                   <input 
                        type="text"
                        name="hotelName"
                        placeholder="Enter Hotel Name"
                        onChange={this.onChange}

                    />
                    <br />
                    ArrivalDate:
                    <input 
                        type="date"
                        name = "arrivalDate"
                        placeholder="Enter ArrivalDate"
                        onChange={this.onChange}

                    />
                    <br />
                   DepartureDate:
                    <input 
                        type="date"
                        name = "departureDate"
                        placeholder="Enter DepartureDate"
                        onChange={this.onChange}
                    />    
                    <br /> <br/>
                    <button type ="submit">Submit</button>                                   
                </form>
            </div>
        )
    }
}

export default  Reserve