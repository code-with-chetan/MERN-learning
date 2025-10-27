const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const firstError = err.errors?.[0]?.message || err.issues?.[0]?.message;

    if (firstError) {
      const status = 422;
      const error = {
        status,
        firstError,
      };
      //   console.log(firstError);
      //   return res.status(400).json({ msg: firstError });
      next(error);
    }
  }
};

module.exports = validate;
