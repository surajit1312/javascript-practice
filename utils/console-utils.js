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

module.exports = { write };
