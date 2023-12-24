export interface AvailableClasses {
    classTitle: string, //e.g the unique title given to a class e.g nur_3A, pri_one, ss1_B, etc...
    classLevel: string, //e.g nursery, primary or secondary
    students: string[], //IDs of students of the class
    classAdmin: string, //ID of the user who has the admin access to the class
    schoolId: string, //ID of the school
}