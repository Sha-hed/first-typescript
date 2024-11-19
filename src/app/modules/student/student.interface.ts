// 1. Create an interface representing a document in MongoDB.
export interface Guardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
}

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  address: string;
  contactNo: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: 'Male' | 'Female' | 'other';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'Active' | 'InActive';
};
