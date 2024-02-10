import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Us</h1>
        {/* <User name={"Reshma Lihe"} /> */}
  
        <UserClass name={"Reshma"}/>
      </div>
    )
  }
  
}

export default About;