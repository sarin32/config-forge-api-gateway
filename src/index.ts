import 'source-map-support/register';

import * as express from 'express';
import * as cors from 'cors';
import * as proxy from 'express-http-proxy';
import {ENDPOINTS, PORT} from './config';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', proxy(ENDPOINTS.API));
app.use('/', proxy(ENDPOINTS.FRONTEND));

app.listen(PORT, () => {
  console.log(`GATEWAY IS LISTENING TO PORT ${PORT}`);
});
