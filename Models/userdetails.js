const mongoose = require('mongoose');
UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  Registernumber: {
    type: Number,
    required: true
  },
  Year:{
    type: String,
    required: true
  },
  Section :{
    type: String,
    required: true  
  },
  username :{
    type: String,
    required: true

  }
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;
  