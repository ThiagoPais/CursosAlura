function handle404(req, res, next) {
  res.status(404).send({status: 404, message: 'Not Found'});
}

export default handle404;