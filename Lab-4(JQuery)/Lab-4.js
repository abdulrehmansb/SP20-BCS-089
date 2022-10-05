function addOldTodo() {
  var newVal = $("#newTodo").val();
  if (newVal === "") {
    $("#newTodo").addClass("red");
    $("#newTodo").animate({
      width: "75%",
    });
  } else {
    $("#newTodo").removeClass("red");
    $("#newTodo").addClass("green");
    $("#newTodo").animate({
      width: "20%",
    });
    $("#todos").append("<li>" + newVal + "</li>");
  }
}
