const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7552058896:AAFG_9zn1WO4HE2BshHPLb65aIdjPYNrLRU',
  id: isNaN(parsedId) ? 8394167087 : parsedId // replace 12345.. with your telegram chat id
};
