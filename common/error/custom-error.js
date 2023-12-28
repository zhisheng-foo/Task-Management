'use strict';

// Custom ValidationError
class ExistingAuthorError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = 400;
    this.code = 'EXISTING_ERROR';
  }
}

class NoExistingAuthorError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = 400;
    this.code = 'NO_EXISTING_ERROR';
  }
}


module.exports = {
  ExistingAuthorError,
  NoExistingAuthorError
};
