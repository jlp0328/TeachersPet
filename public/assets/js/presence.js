
$(function(){

var presenceStatus = $("select");


var subject = $("#subjectId").val();
      console.log(subject);

var classPresence = [];


// var student_id = presenceStatus.attr("data-studentId");
//      console.log(student_id);

$(".submitButton").on("click", function(){

var date = $("#date").val().trim();
      console.log(date);

console.log(presenceStatus.val());

    $(".student").each(function(i,presence){

    var student_id = presenceStatus.attr("data-studentId");
          console.log(student_id);

            classPresence.push({
              "student_id": student_id,
              "date": date,
              "subject":subject,
              "presence": presenceStatus.val()
          });
          console.log(classPresence[i]);
      });
    // alert("Working!");

});

    // $.post("/attendance", classPresence, function(data) {});

});


