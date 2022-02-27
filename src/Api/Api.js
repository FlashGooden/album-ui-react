import axios from 'axios'

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response
  } catch (error) {
    console.log(console.error)
  }
}

const fetchPhotos = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
    return response
  } catch (error) {
    console.log(console.error)
  }
}

const fetchAlbums = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    return response
  } catch (error) {
    console.log(console.error)
  }
}

export {fetchUsers, fetchPhotos, fetchAlbums}
