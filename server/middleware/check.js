const checkMiddleware = (req, res, next) => {
  if (req.user.role) {
    return res.json({ err: 'check middleware works' });
  }
  next();
};

module.exports = { checkMiddleware };