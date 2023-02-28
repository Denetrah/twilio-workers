import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// import './App.css';
// import React, { useState } from 'react';

// const CreateWorkerForm = () => {
//  const [workerAttributes, setWorkerAttributes] = useState({
//  friendlyName: 'Worker1',
//  attributes: JSON.stringify({
//   type: 'support'
//  })
//  });
//  const handleInputChange = event => {
//  setWorkerAttributes({
//   ...workerAttributes,
//   [event.target.name]: event.target.value
//  });
//  };
//  const handleSubmit = async event => {
//   event.preventDefault();
//   try {
//    const response = await fetch('https://react-twilio-serverless-7634-dev.twil.io/index.html/', {
//     method: 'POST',
//     headers: {
//     'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(workerAttributes)
//    });
//    const data = await response.json();
//    console.log('Success:', data);
//   } catch (error) {
//    console.error('Error:', error);
//   }
//  }
//  return (<form onSubmit={handleSubmit}><label>
//     Name:<input
//     type="text"
//     name="friendlyName"
//     value={workerAttributes.friendlyName}
//     onChange={handleInputChange}
//    /></label><br /><label>
//    Attributes:<input
//     type="text"
//     name="attributes"
//     value={workerAttributes.attributes}
//     onChange={handleInputChange}
//    /></label><br /><button type="submit">Create Worker</button></form>
//  );
// };
// export default CreateWorkerForm;