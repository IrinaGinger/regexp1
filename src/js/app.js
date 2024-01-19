export default class Validator {
  validateUsername(username) {
    return /^[a-z][a-z-_]*[\d]{0,3}[a-z-_]*[a-z]$/.test(username.toLowerCase());
  }
}