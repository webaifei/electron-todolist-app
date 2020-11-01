import log4js, { levels, Logger } from 'log4js';

log4js.configure({
  appenders: {
    default: {
      type: 'console',
    }
  },
  categories: {
    default: {
      level: 'DEBUG',
      appenders: ['default'],
    }
  },

});

const logger: Logger = log4js.getLogger()
export default logger;
