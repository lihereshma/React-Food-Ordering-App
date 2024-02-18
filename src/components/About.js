import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold">About Us</h1>
        {/* <User name={"Reshma Lihe"} /> */}
  
        <UserClass name={"Reshma"}/>
      </div>
    )
  }
  
}

export default About;