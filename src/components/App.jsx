import React from "react";
import Card from "./card";
import contacts from "../contacts";
function createCard(contacts){
  return(
    <Card
    key={contacts.id}
    name={contacts.name}
    img={contacts.imgURL}
    tel={contacts.phone}
    email={contacts.email}/>
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

     {contacts.map(createCard)}
      
      
    </div>
  );
}

export default App;

//<Card name={contacts[0].name} 
      // img={contacts[0].imgURL} 
      // tel= {contacts[0].phone} 
      // email={contacts[0].email}  

      // <Card name={contacts[1].name} 
      // img={contacts[1].imgURL} 
      // tel= {contacts[1].phone} 
      // email={contacts[1].email}  

      // <Card name={contacts[0].name} 
      // img={contacts[0].imgURL} 
      // tel= {contacts[0].phone} 
      // email={contacts[0].email}  