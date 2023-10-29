import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export function validate(req: Request, res: Response, next: NextFunction) {

  const errors = validationResult(req);

  if(errors.isEmpty()){
    return next();
  }

  const extratedErros: object[] = [];

  errors.array().map((error: any) => extratedErros.push({[error.params]: error.msg}))

  return res.status(422).json({errors: extratedErros})

}