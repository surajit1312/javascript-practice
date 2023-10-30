const write = function (message) {
  const star = "~";
  message = message.trim();
  for (let i = 0; i < 5; i++) {
    let logger = "";
    let size = 100;
    if (i == 2) {
      const offset = message.length % 2 === 0 ? 1 : 0;
      logger = `${star.repeat(
        (size - message.length) / 2 - 2
      )}   ${message}  ${star.repeat(
        (size - message.length) / 2 - 2 - offset
      )}`;
    } else {
      logger = star.repeat(size);
    }
    console.log(logger);
  }
};

const logNote = function (message, newline, prepend, append) {
  prepend = prepend && prepend !== "" ? prepend : "";
  append = append && append !== "" ? append : "";
  const formattedMessage = newline
    ? `\n◕‿◕ ${prepend}${message}${append}\n`
    : `◕‿◕ ${prepend}${message}${append}`;
  console.log(formattedMessage);
};

const logConsole = function (message, newline) {
  const formattedMessage = newline ? `\n˃ ${message}\n` : `˃ ${message}`;
  console.log(formattedMessage);
};

const logExeBlock = function (newline = true, message = null) {
  message = message ? message.trim() : null;
  const star = "=";
  const offset = message && message.length % 2 === 0 ? 1 : 0;
  const size = 100;
  let logger = message
    ? `${star.repeat(
        (size - message.length) / 2 - 2
      )}   ${message}  ${star.repeat((size - message.length) / 2 - 2 - offset)}`
    : star.repeat(size);
  logger = newline ? `\n${logger}\n` : logger;
  console.log(logger);
};

module.exports = { write, logNote, logConsole, logExeBlock };