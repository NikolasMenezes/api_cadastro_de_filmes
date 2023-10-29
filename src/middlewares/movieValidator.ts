import { body } from 'express-validator';

export function movieValidator() {
  return [
    body('title')
      .isString()
      .withMessage('O título é obrigatório')
      .isLength({ min: 5 })
      .withMessage("O Título precisa ter mais de 5 caracteres"),
    body('rating')
      .isNumeric()
      .withMessage('A avaliação é obrigatória')
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error('A valiação é de 0 a 10');
        }
        return true;
      }),
    body('director')
      .isString()
      .withMessage('O diretor é obrigatório')
  ]
}

export default { movieValidator }