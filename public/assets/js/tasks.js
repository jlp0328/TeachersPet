
$(function(){

var classGrades = [];

$(".assignmentButton").on("click", function(ev){
  ev.preventDefault();

  var task = $("#task").val().trim();
      console.log(task);


  $(".grade").each(function(i, grade){
        console.log(this);
    var student_id = $(this).attr("data-studentId");
        console.log(student_id);

            classGrades.push({
              "student_id": student_id,
              "assignment": task,
              "grade": $(this).val()
            });
  });

    console.log(JSON.stringify(classGrades));
    $.post("/assignments", {classGrades:classGrades}, function(data) {});
});


});


