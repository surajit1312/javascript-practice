const colorMap = Object.freeze({
  DEFAULT: 39,
  WHITE: 37,
  CYAN: 36,
  MAGENTA: 35,
  BLUE: 34,
  YELLOW: 33,
  GREEN: 32,
  RED: 31,
  BLACK: 30,
  RESET: 0,
});

const getColor = function (color) {
  let colorSelected = colorMap[color.toUpperCase()];
  if (!colorSelected) {
    colorSelected = colorMap.BLACK;
  }
  return `\x1b[${colorSelected}m%s\x1b[0m`;
};

const write = function (message, foregroundColor = "black") {
  const star = "~";
  message = message.trim();
  for (let i = 0; i < 5; i++) {
    let logger = "";
    let size = 100;
    if (i == 2) {
      const offset = message.length % 2 === 0 ? 1 : 0;
      logger = `${star.repeat(
        (size - message.length) / 2 - 2,
      )}   ${message}  ${star.repeat(
        (size - message.length) / 2 - 2 - offset,
      )}`;
    } else {
      logger = star.repeat(size);
    }
    const computedColor = getColor(foregroundColor);
    console.log(computedColor, logger);
  }
};

const logNote = function (
  message,
  newline,
  prepend,
  append,
  foregroundColor = "black",
) {
  prepend = prepend && prepend !== "" ? prepend : "";
  append = append && append !== "" ? append : "";
  const formattedMessage = newline
    ? `\n◕‿◕ ${prepend}${message}${append}\n`
    : `◕‿◕ ${prepend}${message}${append}`;
  const computedColor = getColor(foregroundColor);
  console.log(computedColor, formattedMessage);
};

const logConsole = function (message, newline, foregroundColor = "black") {
  const formattedMessage = newline ? `\n˃ ${message}\n` : `˃ ${message}`;
  const computedColor = getColor(foregroundColor);
  console.log(computedColor, formattedMessage);
};

const logError = function (message, newline, foregroundColor = "black") {
  const formattedMessage = newline ? `\n◘ ${message}\n` : `◘ ${message}`;
  const computedColor = getColor(foregroundColor);
  console.log(computedColor, formattedMessage);
};

const logExeBlock = function (
  newline = true,
  message = null,
  foregroundColor = "black",
) {
  message = message ? message.trim() : null;
  const star = "=";
  const offset = message && message.length % 2 === 0 ? 1 : 0;
  const size = 100;
  let logger = message
    ? `${star.repeat(
        (size - message.length) / 2 - 2,
      )}   ${message}  ${star.repeat((size - message.length) / 2 - 2 - offset)}`
    : star.repeat(size);
  logger = newline ? `\n${logger}\n` : logger;
  const computedColor = getColor(foregroundColor);
  console.log(computedColor, logger);
};

module.exports = { write, logNote, logConsole, logError, logExeBlock };
