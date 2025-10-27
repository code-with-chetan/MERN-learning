const errorMiddleWare = (err, req, res, next) => {
  const status = err.status || 500;
  const firstError = err.firstError || "Backend error";
  return res.status(status).json({ firstError });
};

module.exports = errorMiddleWare;
