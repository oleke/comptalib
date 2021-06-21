/**
 * Initialize express server 
 */
 import * as express from 'express';
 import * as cors from 'cors';
 import { logger } from '../utils/logger';
 import { companyRoute, userRoute } from '../controllers';
 
 const server = express();
 
 server.use(express.json())
 server.use(express.urlencoded({ extended: false }))
 server.use(cors())
 
 
 //Log every request
 server.use((req, res, next) => {
   logger.info(req.method.toUpperCase() + " "+req.originalUrl);
   next();
 });
 
 //Index endpoint of the server
 server.get('/', (req, res) => {
   res.send("Welcome to Comptalib Express Server");
 })
 
 //Expose endpoints
 server.use('/company', companyRoute);
 server.use('/user', userRoute);
 
 export { server };