const routeGuard = (req, res, next) => {
    if (req.username) {
      next();
    } else {
      res.redirect('/authentication/sign-in');
    }
  };
  
  module.exports = routeGuard;