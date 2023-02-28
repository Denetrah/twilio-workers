
import React, {Component} from "react";
import axios from 'axios'

export default class CustomView extends Component {
    state = {
        friendlyName: '',
        attributes: '',
    }
    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]:value,
        })
    }
    handleSubmit = (event) => {
       
        event.preventDefault()
        const {friendlyName, title} = this.state
        console.log('friendlyName:',friendlyName)
       console.log('attribbutes' , title)
        axios 
        .post('https://react-twilio-serverless-7634-dev.twil.io/CreateWorker',{
            friendlyName,
            title,
        })
        .then(res => {
            console.log(res.data)
            alert('New Worker Created')
            this.setState({
                friendlyName: '',
                title:''
            })
        })
        .catch(error => {
            console.error(error)
        })
        // console.log(this.state)
        
    }
    render() {
        
        
        return (

            <form onSubmit={this.handleSubmit}>
                <div>
                 
                    <label htmlFor="friendlyName">Friendly Name:</label>
                    <input 
                    type="text" 
                    id="friendlyName"
                    name="friendlyName" 
                    placeholder="Enter Friendly Name"
                    defaultValue=""
                    onChange ={this.handleInputChange} />
                   </div>

                   <div>
                    <label  htmlFor="title">Worker Attributes:</label>
                    <textarea
                    type= "text" 
                    name="title" 
                    placeholder="Enter worker Attributes"
                    id= "title"
                    defaultValue=""
                    onChange={this.handleInputChange} />
                </div>
            
            <button id="trigger" type="submit">Create Worker</button>
            </form>
        )
    }
}
