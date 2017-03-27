
$(function(){


var presenceStatus = $("select");
console.log(presenceStatus.val());

var classPresence = [];


var subject = $("#subjectId").val();
      console.log(subject);

// var student_id = presenceStatus.attr("data-studentId");
//      console.log(student_id);

$(".submitButton").on("click", function(){

    alert("Working!");

    var date = $("#date").val().trim();
      console.log(date);

    presenceStatus.each(function(i,presence){

    var student_id = presenceStatus.attr("data-studentId");
          console.log(student_id);

            classPresence.push({
              "student_id": student_id,
              "date": date,
              "subject": subject,
              "presence": presenceStatus.val()
          });

                      console.log(classPresence[i]);
      });


          $.post("/attendance", classPresence, function(data) {
          alert("Posted!");
});


    });

});


