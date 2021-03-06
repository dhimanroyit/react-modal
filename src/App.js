import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpenHandler = () => {
    setIsModalOpen(true);
  }

  const modalCloseHandler = () => {
    setIsModalOpen(false);
  }
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
        <button onClick={modalOpenHandler}>Click Modal</button>
        <Modal open={isModalOpen} onClose={modalCloseHandler} isDropClose={true}>
          <h1>hello modal</h1>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </Modal>
      </header>
    </div>
  );
}

export default App;
