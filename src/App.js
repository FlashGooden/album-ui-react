import './App.scss';
import { useState, useEffect } from 'react';
import Heading from './Components/Heading/Heading'
import SearchForm from './Components/Search/Search';
import UserListContainer from './Components/UserListContainer/UserListContainer';
import {fetchAlbums, fetchPhotos, fetchUsers}from './Api/Api'

function App() {

  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchAlbums().then(setAlbums)
    fetchPhotos().then(setPhotos)
    fetchUsers().then(setUsers)

  },[]);

  return (
    <div className="App">
      <Heading />
      <SearchForm />
      <UserListContainer users={users} userPhotos={photos} userAlbums={albums} />
    </div>
  );
}

export default App;
