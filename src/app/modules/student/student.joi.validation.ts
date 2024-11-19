import Joi from "joi";

const userNameJoiSchema = Joi.object({
    firstName: Joi.string()
      .trim()
      .required()
      .max(20)
      .regex(/^[A-Z][a-z]*$/, 'Capitalized format')
      .messages({
        'string.empty': 'First name is required',
        'string.max': 'First name cannot be more than 20 characters',
        'string.pattern.base': '{#value} is not in capitalize format',
      }),
    middleName: Joi.string().optional().allow(''),
    lastName: Joi.string()
      .required()
      .pattern(/^[A-Za-z]+$/, 'letters only')
      .messages({
        'string.empty': 'Last name is required',
        'string.pattern.base': 'Last Name should be without numbers',
      }),
  });
  
  const guardianJoiSchema = Joi.object({
    fatherName: Joi.string().required().messages({
      'string.empty': "Father's name is required",
    }),
    fatherContactNo: Joi.string().required().messages({
      'string.empty': "Father's contact number is required",
    }),
    fatherOccupation: Joi.string().required().messages({
      'string.empty': "Father's occupation is required",
    }),
    motherName: Joi.string().required().messages({
      'string.empty': "Mother's name is required",
    }),
    motherContactNo: Joi.string().required().messages({
      'string.empty': "Mother's contact number is required",
    }),
    motherOccupation: Joi.string().required().messages({
      'string.empty': "Mother's occupation is required",
    }),
  });
  
  const localGuardianJoiSchema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': "Local guardian's name is required",
    }),
    contactNo: Joi.string().required().messages({
      'string.empty': "Local guardian's contact number is required",
    }),
    address: Joi.string().required().messages({
      'string.empty': "Local guardian's address is required",
    }),
    occupation: Joi.string().required().messages({
      'string.empty': "Local guardian's occupation is required",
    }),
  });
  
  const studentJoiSchema = Joi.object({
    id: Joi.string().required().messages({
      'string.empty': 'Student ID is required',
    }),
    name: userNameJoiSchema.required().messages({
      'object.base': 'Name is required',
    }),
    gender: Joi.string()
      .valid('Male', 'Female', 'others')
      .required()
      .messages({
        'any.only': '{#value} is not supported',
        'string.empty': 'Gender is required',
      }),
    dateOfBirth: Joi.string().required().messages({
      'string.empty': 'Date of birth is required',
    }),
    email: Joi.string().email().required().messages({
      'string.empty': 'Email is required',
      'string.email': 'Email is not correct!',
    }),
    contactNo: Joi.string().required().messages({
      'string.empty': 'Contact number is required',
    }),
    emergencyContactNo: Joi.string().required().messages({
      'string.empty': 'Emergency contact number is required',
    }),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-')
      .required()
      .messages({
        'any.only': 'Invalid blood group',
        'string.empty': 'Blood group is required',
      }),
    presentAddress: Joi.string().required().messages({
      'string.empty': 'Present address is required',
    }),
    permanentAddress: Joi.string().required().messages({
      'string.empty': 'Permanent address is required',
    }),
    guardian: guardianJoiSchema.required().messages({
      'object.base': 'Guardian details are required',
    }),
    localGuardian: localGuardianJoiSchema.required().messages({
      'object.base': 'Local guardian details are required',
    }),
    profileImg: Joi.string().required().messages({
      'string.empty': 'Profile image is required',
    }),
    isActive: Joi.string()
      .valid('Active', 'InActive')
      .default('Active')
      .messages({
        'any.only': 'Invalid value for isActive',
      }),
  });


  export default studentJoiSchema;