import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           count : 0,
           count2 : 2
        }
    }

    async componentDidMount(){
         const data = await fetch("https://api.github.com/users/Harikrishnacsk")
         const json = await data.json()
         console.log(json)
    }

    render(){
        const {name} = this.props
        return(
            <div className="user-card">
                <h3>count : {this.state.count}</h3>
                <button onClick={() =>{
                   this.setState({
                     count : this.state.count+1
                })
                }}>Increase count</button>
                <h3>count : {this.state.count2}</h3>
                <h2>Name : {name}</h2>
                <h3>Location : Chennai</h3>
            </div>
        )
    }
}

export default UserClass