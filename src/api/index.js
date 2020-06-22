import axios from 'axios';

const ACCESS_TOKEN = 'ow8IC2Djhy4MubgjhFWjx9JUlKI44S49AsJF';
const BASE_API_URL = 'https://gorest.co.in/public-api/';
const config = {
  baseURL: BASE_API_URL,
  timeout: 1000,
  headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  params: {
    'access-token': ACCESS_TOKEN,
    _format: 'json',
  },
};

const instance = axios.create(config);

const usersApi = {
  getUsers() {
    return instance
      .get('/users', {
        params: {
          'access-token': ACCESS_TOKEN,
          _format: 'json',
        },
      })
      .then((response) => response.data.result)
      .catch(() => null);
  },
  getUsersPosts() {
    return instance
      .get('/users', {
        params: {
          'access-token': ACCESS_TOKEN,
          _format: 'json',
        },
      })
      .then((response) => response.data.result)
      .catch(() => null);
  },
  editUsersData(userId, userObject) {
    return instance
      .patch(`/users/${userId}`, userObject)
      .then((response) => response)
      .catch(() => 'Error');
  },
  getPosts() {
    return instance
      .get('/posts', {
        params: {
          'access-token': ACCESS_TOKEN,
          _format: 'json',
        },
      })
      .then((response) => response.data.result)
      .catch(() => null);
  },
};

export default usersApi;
