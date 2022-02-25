import './App.scss';
import Heading from './Components/Heading/Heading'
import SearchForm from './Components/Search/Search';
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
