import { Router, Request, Response } from 'express';

const router = Router()

import { movieValidator } from './middlewares/movieValidator';
import { validate } from './middlewares/handleValidation';

import { createMovie, getMovieById } from './controllers/moviesController'

router.get('/test', (req: Request, res: Response) => {
  return res.status(200).send('API Working!')
})

router.post('/movie/create', movieValidator(), validate, createMovie);
router.get('/movie/:id', getMovieById);

export default router