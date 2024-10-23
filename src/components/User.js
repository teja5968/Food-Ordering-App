const User = (props) => {
    return (
      <div className="user-card">
        <div>Name : {props.name}</div>
        <div>Location : Hyderabad</div>
        <div>Contact : @Teja</div>
      </div>
    );
  };
  
  export default User;