
$(function(){

// var presenceStatus = $("select");

var subject = $("#subjectId").val();
      console.log(subject);

var classPresence = [];

$(".attendanceButton").on("click", function(){

  var date = $("#date").val().trim();
      console.log(date);

      // console.log(presenceStatus.val());

  $(".studentSelect").each(function(i,presence){
        console.log(this);
    var student_id = $(this).attr("data-studentId");
        console.log(student_id);

            classPresence.push({
              "student_id": student_id,
              "subject":subject,
              "date": date,
              "presence": $(this).val()
            });
          // console.log(classPresence[i]);
  });
    // alert("Working!");
    console.log(classPresence);

});

    $.post("/attendance", classPresence, function(data) {});

});


