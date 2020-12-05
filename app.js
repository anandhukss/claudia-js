var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();
module.exports = api;
api.get('/hello', function () {
  return {
    values: [
      { id: 1, value: 'student_name' },
      { id: 2, value: 'branch_name' },
      { id: 3, value: "city_name" },
      { id: 4, value: "College" },
      { id: 5, value: "Address" }, 
      { id: 6, value: "phone number" }

    ]
  };
});


