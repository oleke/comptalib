export const winstonConfig = {
    file: {
      level: 'info',
      filename: 'logs/app.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5mb
      maxFiles: 5,
      colorize: true
    },
    error: {
      level: 'error',
      filename: 'logs/error.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5mb
      maxFiles: 5,
      colorize: true
    },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    }
  };

  export const serverConfig = {
    "host":"localhost", 
    "port":5600
  }
  
  export const dbConfig =  {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME
  }