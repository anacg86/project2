//traer a este archivo estos modulos
const passport = require("passport");
//Bring in the passport-local package, specifically it's Strategy module
const LocalStrategy = require("passport-local").Strategy;

//Set up a new passport instance with our custom local strategy
passport.use(
  new LocalStrategy(
    //Our user will sign in using an email, rather than a "username"
    {
      //le estamos estableciendo cual es el nombre de usuario
      usernameField: "email"
    },
    function(email, password, done) {
      //When a user tries to sign in this code runs
      //encontrar el usuario donde tenga el email que le mandamos
      models.User.findOne({
        where: {
          email: email
        }
      }).then(function(dbUser) {
        //If there's no user with the given email
        //si no hay email, regresa nulo, falso, mensaje o lo puedes quitar
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect Credentials."
          });
        }
        //If there is a user with the given email, but the password the user gives us is incorrect
        //si puso mal el password, nulo, falso, y mensaje
        else if (!dbUser.login(password)) {
          return done(null, false, {
            message: "Incorrect Credentials."
          });
        }
        console.log("nice");
        //If none of the above, the credentials are valid, return the user
        //si todo esta bien de user y password y le regresamos el usuario
        return done(null, dbUser);
      });
    }
  )
);

//Serialize the user into a session string
//agarrar usuario y convertir en una sesion
passport.serializeUser(function(user, callback) {
  callback(null, user);
});

//Process the session string and get the user
//lo saca de una sesion
passport.deserializeUser(function(obj, callback) {
  callback(null, obj);
});

//Take out our configured passport instance
module.exports = passport;
