// Scroll Down Arrow animation

$("#scrollArrow").on('click', function () {
  $("#main-title-page").hide();
  $("#sign-in-form-container").fadeIn();
  $("#scrollArrow").hide();

});

// On click command for Modal Form with animated background

$("#signUpLink").on("click", function() {
  $("#sign-in-form-container").css("display", "none");
  $("#main-title-page").css("display", "none");
  $("#modal-background").css("display", "flex");
  $("#create-account-form").modal("show")
})

// Reload page when modal closed

$("button.close").on("click", function() {
  location.reload();
})

// Link to main content for ease in development

$("#development-link").on("click", function() {
  $("#main-page").css("display", "block");
  $("#sign-in-form-container").css("display", "none");
  $("#main-title-page").css("display", "none");
  $("#scrollArrow").css("display", "none");

})

$("add-new-task-button").on("click", function() {
  $("#add-new-task-modal").css("display", "flex");
})
