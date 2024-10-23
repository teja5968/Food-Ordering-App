import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("Child Constructor");
    this.state = {
      userInfo: {
        name: "user",
        location: "dummy location",
       
      },
    };
  }
  async componentDidMount() {
    console.log("Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/teja5968");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  render() {
    console.log("Child Render");
    return (
      <div>
        <img src={this.state.userInfo.avatar_url} />
        <li>Name : {this.state.userInfo.name}</li>
        <li>Location : {this.state.userInfo.location}</li>
      </div>
    );
  }
}

export default UserClass;