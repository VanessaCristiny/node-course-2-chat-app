const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Node Course'
    },{
      id: 2,
      name: 'Jen',
      room: 'React Course'
    },{
      id: 3,
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Vanessa',
      room: 'Harry Potter Fans'
    }
    var res = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    var usersList = users.getUserList('Node Course');

    expect(usersList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    var usersList = users.getUserList('React Course');

    expect(usersList).toEqual(['Jen']);
  });

  it('should remove a user', () => {
    var user = users.removeUser(2);

    expect(user).toEqual({
      id:2,
      name:'Jen',
      room: 'React Course'
    });

    expect(users.users.length).toBe(2);
  });


  it('should not remove user', () => {
    var user = users.removeUser(4);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser(3);

    expect(user).toEqual({
      id: 3,
      name:'Julie',
      room: 'Node Course'
    });
  });

  it('should not find user', () => {
    var user = users.getUser(4);
    expect(user).toNotExist();
  });
});
