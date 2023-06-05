mongoose.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true, useUnifiedTopology: true});


const ProjectCareplan = mongoose.model('ProjectCareplan', { name: String });


Careplan.find({ name: 'Careplan' }, function(err, Careplan) {
  if (err) {
    console.log(err);
  } else {
    console.log(Careplan);
  }
});

Careplan.findOne({ name: 'Careplan' }, function(err, Careplan) {
    if (err) {
      console.log(err);
    } else {
      console.log(Careplan);
    }
  });

  const mongoose = require('mongoose');

