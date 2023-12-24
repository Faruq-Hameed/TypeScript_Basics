export interface User{
    name: string, //name of the user
    email: string, //email of the user
    phoneNumber: string, //phone number of the user
    password: string, //password of the user
    schoolId: string | object, //school id of the user where the user is enrolling from
    role: string, //role of the user (parent, principal, schoolAdmin, admin, or superAdmin)
}