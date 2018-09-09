const checkMiddleware = (req, res, next) => {
  if (req.user && !req.user.role) {
    return res.json({ err: 'you do not have rights!' });
  }
  next();
};

module.exports = { checkMiddleware };