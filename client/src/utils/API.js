import axios from 'axios';

export default {

  // -------------------------------------- //
  // AUTH ROUTES
  // -------------------------------------- //

  isLoggedIn: function () {
    return axios.get('/auth/user');
  },
  loginUser: function (userPlusPass) {
    return axios.post('/auth/user/login', userPlusPass);
  },
  logUserOut: function () {
    return axios.post('/auth/user/logout');
  },

  // -------------------------------------- //
  // USER ROUTES
  // -------------------------------------- //

  // gets the user with the given id
  getUser: function (id) {
    return axios.get('/api/users/' + id);
  },
  // gets all users
  getUsers: function () {
    return axios.get('/api/users');
  },
  // creates a new user
  saveUser: function (userData) {
    console.log("userData: ", userData);
    return axios.post('/api/users/register', userData);
  },
  // update a user with the given id
  updateThisUser: function (id, UserData) {
    return axios.put("/api/users/" + id, UserData)
  },
  // deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete('/api/users/' + id);
  },

  // -------------------------------------- //
  // EVENT ROUTES
  // -------------------------------------- //

  // gets all events from db
  getEvents: function () {
    return axios.get('/api/events');
  },
  // gets event by id
  getEvent: function (id) {
    return axios.get('/api/events/' + id);
  },
  // gets all events associated with user ID
  getUserEvent: function (id) {
    return axios.get('/api/events/user/' + id);
  },
  // creates new event
  createEvent: function (eventData) {
    return axios.post('/api/events', eventData);
  },
};
