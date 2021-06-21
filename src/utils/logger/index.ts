/**
 * Winston Logger for production logging
 * See {@link https://github.com/winstonjs/winston} for documentation
 */

 import * as winston from 'winston'
 import { winstonConfig } from '../../config'
 
 // Logger configuration
 export const logger = winston.createLogger({
   level: 'info',
   format: winston.format.simple(),
   transports: [
     // - Write all logs using the logger configuration
     new winston.transports.File(winstonConfig.file),
     new winston.transports.File(winstonConfig.error),
     new winston.transports.Console(winstonConfig.console)
   ]
 })
 