import { UserDao } from "./UserDao";
import { User } from '../model/User';
import { Group } from '../model/Group';

export class UserDaoImpl implements UserDao{

    userList: User[] = [];

    createUser(user: User) {      
        this.userList.push(user);
    }

    listUsers(groupName: string) {
        this.userList.forEach(user => {
            console.log(user);
        });
    }

}

var group = new Group (1, 'operator');
var dao: UserDao = new UserDaoImpl();
dao.createUser(new User(1,'A',group.groupId));
dao.createUser(new User(2,'B',group.groupId));
dao.createUser(new User(3,'C',group.groupId));
dao.createUser(new User(4,'D',group.groupId));
dao.createUser(new User(5,'E',group.groupId));

dao.listUsers(group.groupName);