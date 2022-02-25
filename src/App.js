import './App.css';
import Heading from './Components/Heading/Heading'
import SearchForm from './Components/SearchForm/SearchForm';
import UserListContainer from './Components/UserListContainer/UserListContainer';

function App() {
  return (
    <div className="App">
      <Heading />
      <SearchForm />
      <UserListContainer />
    </div>
  );
}

export default App;
