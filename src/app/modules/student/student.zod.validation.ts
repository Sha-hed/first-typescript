import { z } from 'zod';

// UserName schema validation
const userNameZodSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

// Guardian schema validation
const guardianZodSchema = z.object({
  fatherName: z.string().min(1),
  fatherContactNo: z.string().min(1),
  fatherOccupation: z.string().min(1),
  motherName: z.string().min(1),
  motherContactNo: z.string().min(1),
  motherOccupation: z.string().min(1),
});

// Local Guardian schema validation
const localGuardianZodSchema = z.object({
  name: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
  occupation: z.string().min(1),
});

// Main Student schema validation
const studentZodSchema = z.object({
  id: z.string().min(1),
  name: userNameZodSchema,
  gender: z.enum(['Male', 'Female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string().min(1),
  emergencyContactNo: z.string().min(1),
  bloodGroup: z.enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']).optional(),
  presentAddress: z.string().min(1),
  permanentAddress: z.string().min(1),
  guardian: guardianZodSchema,
  localGuardian: localGuardianZodSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['Active', 'InActive']).default('Active')
  })

export { studentZodSchema };
