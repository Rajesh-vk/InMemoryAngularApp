import { UserRole } from '../Model/UserRole';


export class UserRoleData {
    static UserRoles: UserRole[] = [
        {
            userRoleName: 'Admin',
            userRoleId: 1,
        },
        {
            userRoleName: 'PMO',
            userRoleId: 2,
        },
        {
            userRoleName: 'POC',
            userRoleId: 3,
        },
        {
            userRoleName: 'Participant',
            userRoleId: 4,
        },
    ];
}
