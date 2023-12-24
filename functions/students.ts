//section to be uploaded by the school admin
export interface Student{
    name: string, // name of the student
    class: string, //which class does the student belong to in the school the classID
    schoolId: object | string //id of the school where the student belongs to
    parentId: object | string // id of the parent of the student
}