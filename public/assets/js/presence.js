
$(function(){

// var presenceStatus = $("select");

var subject = $("#subjectId").val();
      console.log(subject);

var classPresence = [];

$(".attendanceButton").on("click", function(ev){
  ev.preventDefault(); // KB: Needed to prvent submitting form, because that was overriding $.post and causing problems
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

    $.post("/attendance", {classPresence:classPresence}, function(data) { // KB: Needed to make array child of object to get parse properly
     alert("Posted!");
});


    });

});


