import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import Joi from 'joi';
// import studentJoiSchema from './student.validation';
import { studentZodSchema } from './student.zod.validation';
const createStudent = async (req: Request, res: Response) => {
  try {


    const { student: studentData } = req.body;

  
    // const {error, value } = studentJoiSchema.validate(studentData)

    // console.log({error},{value});
    // if(error){
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something Went Wrong',
    //     error: error.details,
    //   });
    // }
    const zodData = studentZodSchema.parse(studentData)

    const result = await StudentServices.createStudentIntoDB(zodData);

    res.status(200).json({
      success: true,
      message: 'Student is added Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      error: error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrieve Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      error: error,
    });
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentServices.getSingleStudent(id);
    res.status(200).json({
      success: true,
      message: 'Student are retrieve Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      error: error,
    });
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
