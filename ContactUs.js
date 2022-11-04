import React from "react";

const ContactUs = () => {

  const postToFirebase = async (data) => {
    const response = await fetch(
      "https://react-http-e4aeb-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const recived = await response.json();
    console.log(recived);
  };

  const submitClickHandler = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    const user = {
      name: event.target.elements["name"].value,
      email: event.target.elements["emailId"].value,
      phoneNumber: event.target.elements["phoneNumber"].value,
    };
    console.log(user);
    event.target.elements["name"].value = "";
    event.target.elements["emailId"].value = "";
    event.target.elements["phoneNumber"].value = "";
    postToFirebase(user);
  };

  return (
    <div>
      <p>Fill the form and we will contact you</p>
      <form onSubmit={submitClickHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="emailId">Email Id</label>
        <input id="emailId" type="email" />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input id="phoneNumber" type="tel" />
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;