const sendJSONResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

const controller = {
  home: (req, res, next) => sendJSONResponse(res, 200, { message: 'API root' }),
  example: (req, res, next) => sendJSONResponse(res, 200, { message: 'Example response from the API'})
};

module.exports = controller;
