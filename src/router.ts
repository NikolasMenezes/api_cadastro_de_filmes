import { Router, Request, Response } from 'express';

const router = Router()

import { movieValidator } from './middlewares/movieValidator';
import { validate } from './middlewares/handleValidation';

import { createMovie, deleteMovies, getMovieById, getMovies, updateMovies } from './controllers/moviesController'

router.get('/test', (req: Request, res: Response) => {
  return res.status(200).send('API Working!')
})

router.post('/movie/create', movieValidator(), validate, createMovie);
router.get('/movie/:id', getMovieById);
router.get('/movie/all', getMovies);
router.patch('/movie/:id', movieValidator(), validate, updateMovies);
router.delete('/movie/:id', deleteMovies);

export default router