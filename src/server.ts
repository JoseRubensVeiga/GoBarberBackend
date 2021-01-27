import express from 'express';

import uploadConfig from './config/upload';
import routes from './routes';
import './database';

const app = express();
app.use(routes);
app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));

app.listen(3333, () => {
  console.log('Server started on port 3333! =D');
});
