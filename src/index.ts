/**
 * Comptalib Technical Test
 * Simple Express-MySQL-Sequilize API
 * @author Ogunleke Abiodun
 */
 import { server } from './server'
 import { ModelLoader } from './server/models'

 import { sequelize } from './db'
 
 import { serverConfig } from './config'

 import { logger } from './utils/logger'
 
 
 //Start Listening
 const httpServer = server.listen(serverConfig.port, () => {
    ModelLoader.loadModels(sequelize)
    sequelize.sync().then(()=> {
     logger.info('MySQL Server synced')  
    })
    .catch(err => {
        logger.error(err.message)
        httpServer.close(() => logger.info('Express Server is stopped') )
    })
   logger.info(`Express Server is running on port ${serverConfig.port}`)
 })
 
 //Process and log server error
 httpServer.on('error', (error: any) => {
   
   // handle non-listen errors
   if (error.syscall !== 'listen') {
     logger.error(error.stack);
     throw error;
   }
 
   //Get server address as a port or named pipe
   var bind = typeof serverConfig.port === 'string' ? 'Pipe ' + serverConfig.port : 'Port ' + serverConfig.port;
 
   // handle specific listen errors with friendly messages
   switch (error.code) {
     case 'EACCES':
       logger.error(bind + ' requires elevated privileges');
       process.exit(1);
       break;
     case 'EADDRINUSE':
       logger.error(bind + ' is already in use');
       process.exit(1);
       break;
     default:
       logger.error(error.stack);
       throw error;
   }
 })
