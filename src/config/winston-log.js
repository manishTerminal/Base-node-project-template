const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [new transports.File({ filename: 'logs/test.log' })]
});


logger.silly("silly!");
logger.debug("debug!");
logger.verbose("verbose!");
logger.http("http!");
logger.info("info!");
logger.warn("warn!");
logger.error("error!");

module.exports = {logger}