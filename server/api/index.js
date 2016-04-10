import { Router } from 'express';

import users from './users';

const app = Router();

app.use('/users', users);

export default app;
