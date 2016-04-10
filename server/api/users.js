import { Router } from 'express';

const app = Router();

const userNames = ['Bob', 'Joe', 'Tommy'];

app.use('/', (req, res) => res.json(userNames));

export default app;
