const storage = require('./storage');
const auth = require('./auth');

class nhost {
  constructor() {
    this.config = null;
    this.initialized = false;
  }

  initializeApp(config) {
    this.config = config;
    this.inMemory = {}; // jwt token and claims shared memory
    this.initialized = true;
  }

  auth() {
    if (!this.initialized) {
      return console.log('nhost is not initialized. Start by calling .initializeApp(config)');
    }
    return new auth(this.config, this.inMemory);
  }

  storage() {
    if (!this.initialized) {
      return console.log('nhost is not initialized. Start by calling .initializeApp(config)');
    }
    return new storage(this.config, this.inMemory);
  }
}

export default new nhost();
