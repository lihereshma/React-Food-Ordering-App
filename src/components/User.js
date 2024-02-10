import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  return (

    <div className="user-card">
      <p>Count1 = { count }</p>
      <p>Count2 = { count2 }</p>
      <h4>Name: { name }</h4>
      <h5>Location: Thane</h5>
      <h6>Contact: reshmalihe00068@gmail.com</h6>
    </div>
  )
}

export default User;