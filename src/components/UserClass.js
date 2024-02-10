import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1
    }
  }

  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <p>Count = { count }</p>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>Count Increase</button>
        {/* <p>Count2 = { count2 }</p> */}
        <h4>Name: { name }</h4>
        <h5>Location: Thane</h5>
        <h6>Contact: reshmalihe00068@gmail.com</h6>
      </div>
    )
  }
}

export default UserClass;