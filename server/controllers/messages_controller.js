var nextID = 0;
var messages = [];

const createM = (req, res, next) => {
  const { text, time } = req.body;
  messages.push({
    id: nextID,
    text,
    time
  });
  nextID++;

  res.status(200).json(messages);
  // readM(req, res, next);
};

const readM = (req, res, next) => {
  res.json(messages);
};

const updateM = (req, res, next) => {
  const index = messages.findIndex(message => +message.id === +req.params.id);
  messages[index].text = req.body.text;

  readM(req, res, next);
};

const deleteM = (req, res, next) => {
  const index = messages.findIndex(message => +message.id === +req.params.id);
  messages.splice(index, 1);

  readM(req, res, next);
};

module.exports = {
  createM,
  readM,
  updateM,
  deleteM
};
