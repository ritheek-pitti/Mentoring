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
            minlength : 10,
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
    $("#modalformid").validate({
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
              minlength : 10,
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
      let name,pNo,problem,dateAndTime,gender,id;
    const formDetails = document.getElementById("form");
    formDetails.addEventListener("submit", async (ev) => {
       ev.preventDefault();
       //console.log(formDetails);
        name = document.getElementById("name").value;
        pNo = document.getElementById("pNo").value;
        problem = document.getElementById("problem").value;
        dateAndTime = document.getElementById("dAndT").value;
        let temp = document.getElementsByName("Gender");
    for(i =0;i<temp.length;i++){
      if(temp[i].checked){
          //console.log(temp[i].value);
        gender = temp[i].value;
      }
    }
   
       if( $("#form").valid())
            {
              $.ajax({
                      type: 'POST',
                      url: "http://localhost:3000/add",
                      data: {
                              name: name,
                              phone: pNo,
                              Gender: gender,
                              problem : problem,
                              dateAndTime : dateAndTime
                            },
                      //cache: false,
                        success : function (data){

                                  id=data;
                        }
                
                  });
                  console.log(id);
                $("#appointmentConfirmation").prop("hidden", false);
                $("#nameDisplay").text("Name : "+name);
                $("#numDisplay").text("Phone Number : "+pNo);
                $("#descDisplay").text("Problem :"+problem);
                $("#dateDisplay").text("Appointment Slot : "+dateAndTime);
                $("#genderDisplay").text("Gender : "+gender);
            }

    })
    $('#update').on('click', function(e) {
        e.preventDefault();
        console.log(gender);
        $('#modname').val(name);
        $('#modnum').val(pNo);
        $('#moddesc').val(problem);
        $('#moddate').val(dateAndTime);
        if(gender==="Male"){
          $('#modaldot-1').prop('checked', true);
        }
        else if(gender==="Female"){
          $('#modaldot-2').prop('checked', true);
        }
      });
      $('#modalsubmit').on('click', function(e) {
        e.preventDefault();
        //console.log(e.currentTarget.form[4].value);
        name=e.currentTarget.form[0].value;
        pNo= e.currentTarget.form[1].value;
        problem= e.currentTarget.form[4].value;
        dateAndTime= e.currentTarget.form[5].value;
        gender='';
        if(e.currentTarget.form[2].checked==true){
          gender=e.currentTarget.form[2].value;
        }
        else if(e.currentTarget.form[3].checked==true){
          gender=e.currentTarget.form[3].value;
        }
        //console.log(gender);
        console.log($("#modalformid").valid());
        if($("#modalformid").valid()){
            $("#appointmentConfirmation").prop("hidden", false);
            $("#nameDisplay").text("Name : "+name);
            $("#numDisplay").text("Phone Number : "+pNo);
            $("#descDisplay").text("Problem Description : \n"+problem);
            $("#dateDisplay").text("Appointment Slot : "+dateAndTime);
            $("#genderDisplay").text("Appointment Slot : "+gender);
            $('#exampleModal').modal('toggle');
            $.ajax({
              type: "PUT",
              url: `http://localhost:3000/update/${id}`,
              data: {
                name: name,
                phone: pNo,
                Gender: gender,
                problem : problem,
                dateAndTime : dateAndTime
              },
              //success: success,
            });
        };
      });
  });
