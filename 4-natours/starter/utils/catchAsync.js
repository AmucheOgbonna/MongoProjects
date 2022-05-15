module.exports = (fn) => {
  return (req, res, next) => {
    //fn(req,res,next).catch(next)
    fn(req, res, next).catch((err) => next(err)); //sends it to the global error handler
  };
};
