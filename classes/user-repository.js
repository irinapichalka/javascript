/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(arrayUsers) {
    this._users = arrayUsers;
    Object.freeze(this.users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this.users.map(({ name }) => name);
  }

  getUserIds() {
    return this.users.map(({ id }) => id);
  }

  getUserNameById(userId) {
    const [userName] = this.users
      .filter((obj) => obj.id === userId)
      .map(({ name }) => name);
    return userName;
  }
}

// examples
const user1 = new User("1", "Tom", "session-id");
const user2 = new User("2", "Bob", "session-id");
const a = new UserRepository([user1, user2]);
console.log(a.getUserNames());
console.log(a.getUserIds());
console.log(a.getUserNameById("2"));

// получить свойства можем
/*console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'*/

// но изменить эти свойства нельзя
//user.name = 'Bob'; // пытаемся изменить старое значение
//console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
