import {User} from '../model/User';

export interface UserDao {
    createUser(user: User);

    listUsers(groupName: string);

}