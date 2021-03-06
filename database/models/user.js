const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');
const Schema = mongoose.Schema;

const validateEmail = email => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test (email);
};

const userSchema = new Schema ({
  email: {
    type: String,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  password: {
    type: String,
    required: true,
    min: [6, 'Password must be at least 6 characters'],
    max: 24,
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
});

userSchema.methods = {
  checkPass: function (inputPass) {
    return bcrypt.compareSync (inputPass, this.password);
  },
  hashPass: function (plainTextPass) {
    return bcrypt.hashSync (plainTextPass, 10);
  },
};

userSchema.pre ('save', function (next) {
  if (!this.password) {
    console.log ('models user.js __________NO PASS PROVIDED___________');
    next ();
  } else {
    console.log ('hashPass in pre save');
    this.password = this.hashPass (this.password);
    next ();
  }
});

const User = mongoose.model ('User', userSchema);

module.exports = User;
