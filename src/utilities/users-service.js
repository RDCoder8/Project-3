//users-service.js
import * as usersAPI from "./users-api";

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  //This is the fronted received the token response from the backend and persists
  const token = await usersAPI.signUp(userData);
  //Persist the token
  localStorage.setItem("token", token);
  // Baby step by returning whatever is sent back by the server
  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  localStorage.setItem("token", token);
  return getUser()
}

export async function deleteUser(credentials) {
  await usersAPI.deleteUser(credentials)
}

export async function updateName(credentials) {
  const token = await usersAPI.updateName(credentials)
  localStorage.setItem("token", token);
  return getUser()
}

export async function updateImg(credentials) {
  const token = await usersAPI.updateImg(credentials)
  localStorage.setItem("token", token);
  return getUser()
}


export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem("token");
  if (!token) return null;
  //Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }

  return token;
}

export function getUser() {
  const token = getToken();
    //If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token')
}

export function checkToken() {
  // Just so that you don't forget how to use .then
  return usersAPI.checkToken()
    // checkToken returns a string, but let's
    // make it a Date object for more flexibility
    .then((dateStr) => new Date(dateStr));
}
