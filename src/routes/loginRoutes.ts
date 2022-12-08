import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hi there');
});

// export a variable which was previously created
export { router };
