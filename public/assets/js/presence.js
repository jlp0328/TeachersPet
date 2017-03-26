$(function(){


var presenceStatus = $("select");
console.log(presenceStatus);

var classPresence = [];
var date = $("#date");
      console.log(date);

var subject = $("#subjectId").val();
      console.log(subject);



// var student_id = presenceStatus.attr("data-studentId");
//      console.log(student_id);

$(".submitButton").on("click", function(){

    alert("Working!");

    presenceStatus.each(function(){

    var student_id = presenceStatus.attr("data-studentId");
          console.log(student_id);

            classPresence.push({
              "student_id": student_id,
              "date": date,
              "subject":subject,
              "presence": presenceStatus.val()
          });
      });
          console.log(classPresence);
    $.post("/attendance", classPresence, function(data) {});
});

});
