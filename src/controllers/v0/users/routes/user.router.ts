import {Router, Request, Response} from 'express';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/');

router.get('/:id', async (req: Request, res: Response) => {
  console.log("user get");
  const {id} = req.params;
  console.log("ID: " + id);
  const item = await User.findByPk(id);
  console.log(item);
  res.send(item);
});

export const UserRouter: Router = router;
