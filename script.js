$(document).ready(function() {
    $("#form").validate({
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        phone:{
            required :true,
            digits :true,
        },
        problem:{
            required : true,
            minlength : 15,
        },
        dateAndTime:{
            required : true,
        }
        
      },
      messages : {
        name: {
          minlength: "Name should be at least 3 characters"
        },
        problem:{
            minlength: "Please elaborate your problem"
        }
      }
    });
  });