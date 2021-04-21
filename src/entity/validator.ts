import * as yup from 'yup';
import {NextFunction, Request,Response} from 'express';

export const validateFormularioPayload = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
    console.log(req.body);
  await yup
    .object()
    .shape({
      nome: yup.string().required(),
    })
    .validate(req.body, { abortEarly: false });

  return next();
};  