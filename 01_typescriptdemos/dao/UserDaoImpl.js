"use strict";
exports.__esModule = true;
var User_1 = require("../model/User");
var Group_1 = require("../model/Group");
var UserDaoImpl = /** @class */ (function () {
    function UserDaoImpl() {
        this.userList = [];
    }
    UserDaoImpl.prototype.createUser = function (user) {
        this.userList.push(user);
    };
    UserDaoImpl.prototype.listUsers = function (groupName) {
        this.userList.forEach(function (user) {
            console.log(user);
        });
    };
    return UserDaoImpl;
}());
exports.UserDaoImpl = UserDaoImpl;
var group = new Group_1.Group(1, 'operator');
var dao = new UserDaoImpl();
dao.createUser(new User_1.User(1, 'A', group.groupId));
dao.createUser(new User_1.User(2, 'B', group.groupId));
dao.createUser(new User_1.User(3, 'C', group.groupId));
dao.createUser(new User_1.User(4, 'D', group.groupId));
dao.createUser(new User_1.User(5, 'E', group.groupId));
dao.listUsers(group.groupName);
