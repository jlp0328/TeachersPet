
$(function(){

var subject = $("#subjectId").val();
      console.log(subject);

var classGrades = [];

$(".assignmentButton").on("click", function(ev){
  ev.preventDefault();

  var task = $("#task").val().trim();
      console.log(task);


  $(".grade").each(function(i, presence){
        console.log(this);
    var student_id = $(this).attr("data-studentId");
        console.log(student_id);

            classGrades.push({
              "student_id": student_id,
              "subject":subject,
              "task": task,
              "grade": $(this).val()
            });
          // console.log(classGrades[i]);
  });

    // console.log(JSON.stringify(classGrades));
    $.post("/assignments", {classGrades:classGrades}, function(data) {});
});


});


