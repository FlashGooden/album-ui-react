import './App.scss';
import { useState, useEffect } from 'react';
import Heading from './Components/Heading/Heading'
import SearchForm from './Components/Search/Search';
import ErrorBoundary from './Components/ErrorBoundry/ErrorBoundry';
import UserListContainer from './Components/UserListContainer/UserListContainer';
import {appData}from './Api/Api'

function App() {

  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    appData.then((data) => {
      const [users, photos, albums] = data

      setAlbums(albums)
      setPhotos(photos)
      setUsers(users)
    })

  },[]);

  return (
    <div className="App">
      <Heading />
      <SearchForm />
      <ErrorBoundary>
        <UserListContainer users={users} userPhotos={photos} userAlbums={albums} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
