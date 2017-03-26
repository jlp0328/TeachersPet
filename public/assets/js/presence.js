
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

    presenceStatus.each(function(i,presence){

    var student_id = presenceStatus.attr("data-studentId");
          console.log(student_id);

            classPresence.push({
              "student_id": this.student_id,
              "date": this.date,
              "subject":this.subject,
              "presence": presenceStatus.val()
          });
      });
          console.log(classPresence);

});

    $.post("/attendance", classPresence, function(data) {});

});


