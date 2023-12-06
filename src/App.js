import './App.css';
import Root from './components/SwitchThemeExample';
import ExampleToDo from './components/ToDo';
import FetchData from './components/fetch-data-example/FetchData';
import RegistrationForm from './components/forms/RegistrationForm';
import GiftCard from './components/gift-card/GiftCard';
import HookExampleComponent from './components/hooks/HookExampleComponent';
import DessertList from'./components/list-components/DessertList'

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  /* return (
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
  ); */
  /* return (
    <div className='App'>
      <h2>List of low calorie desserts:</h2>
      <DessertList desserts={desserts}/>
    </div>
  ) */

  return (
    <HookExampleComponent/>
  )
}

export default App;
