$(function () {
  loadProducts();
  $("#loading").on("click", ".btn-danger", handleDelete);
  $("#loading").on("click", ".btn-warning", handleUpdate);
  $("#addBtn").click(addProduct);
  $("#updateSave").click(function () {
    var id = $("#updateId").val();
    var name = $("#updateName").val();
    var price = $("#updatePrice").val();
    $.ajax({
      url: "https://usman-cui-recipies.herokuapp.com/api/products/" + id,
      data: { name, price },
      method: "PUT",
      success: function (response) {
        console.log(response);
        loadRecipies();
        $("#updateModal").modal("hide");
      },
    });
  });
});
function handleUpdate() {
  var btn = $(this);
  var parentDiv = btn.closest(".prod");
  let id = parentDiv.attr("data-id");
  $.get(
    "https://usman-cui-recipies.herokuapp.com/api/products/" + id,
    function (response) {
      $("#updateId").val(response._id);
      $("#updateName").val(response.name);
      $("#updatePrice").val(response.price);
      $("#updateModal").modal("show");
    }
  );
}
function addProduct() {
  var name = $("#name").val();
  var price = $("#price").val();
  var color = $("#color").val();
  var department = $("#department").val();
  var description = $("#description").val();
  $.ajax({
    url: "https://usman-cui-recipies.herokuapp.com/api/products",
    method: "POST",
    data: { name, price, color, department, description },
    success: function (response) {
      console.log(response);
      $("#name").val("");
      $("#price").val("");
      $("#color").val("");
      $("#department").val("");
      $("#description").val("");
      loadProducts();
      $("#addProduct").modal("hide");
    },
  });
}
function handleDelete() {
  var btn = $(this);
  var parentDiv = btn.closest(".prod");
  let id = parentDiv.attr("data-id");
  console.log(id);
  $.ajax({
    url: "https://usman-cui-recipies.herokuapp.com/api/products/" + id,
    method: "DELETE",
    success: function () {
      loadProducts();
    },
  });
}
function loadProducts() {
  $.ajax({
    url: "https://usman-cui-recipies.herokuapp.com/api/products",
    method: "GET",
    error: function (response) {
      var recipes = $("#loading");
      recipes.html("An Error has occured");
    },
    success: function (response) {
      console.log(response);
      var load = $("#loading");
      load.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        load.append(
          `<div class="prod" data-id="${rec._id}"><h3>Name: ${rec.name}</h3><p><button class="btn btn-danger btn-sm float-right">delete</button><button class="btn btn-warning btn-sm float-right">Edit</button>Price: ${rec.price}</p>
          <p>Color: ${rec.color}</p>
          <p>Department: ${rec.department}</p>
          <p>Description: ${rec.description}</p>
          </div>`
        );
        // recipes.append("<div><h3>" + rec.title + "</h3></div>");
      }
    },
  });
}
