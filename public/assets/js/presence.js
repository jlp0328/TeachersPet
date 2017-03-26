var presenceStatus = $("select");
var attendance = [];

$(".submitButton").on("click", function(){

    alert("Working!");

      var date = $("#date");
      console.log(date);

      var subject = $("#subjectId").val();
      console.log(subject);

      presenceStatus.each(function(i,presence){
          var student_id = presence.attr("data-studentId");
          attendance.push({
              "student_id": student_id,
              "date": date,
              "subject":subject,
              "presence": presence.val()
          })

          console.log(attendance);
      });

 $.post("/attendance", attendance, function(data) {});

});
