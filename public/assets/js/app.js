// Scroll Down Arrow animation

$(document).ready(function () {

  $("#scrollArrow").on('click', function () {
    $("#main-title-page").hide();
    $("#sign-in-form-container").fadeIn();
    $("#scrollArrow").hide();

  });

  // On click command for Modal Form with animated background

  $("#signUpLink").on("click", function () {
    $("#sign-in-form-container").css("display", "none");
    $("#main-title-page").css("display", "none");
    $("#modal-background").css("display", "flex");
    $("#create-account-form").css("display", "flex");
    console.log("this is working!");
  })

  // Reload page when modal closed

  $("button.close").on("click", function () {
    $("#create-member-form").css("display", "none");
    $("#create-task-form").css("display", "none");
    $("#create-account-form").css("display", "none");

  })

  // Link to main content for ease in development

  $("#development-link").on("click", function () {
    $("#main-page").css("display", "block");
    $("#sign-in-form-container").css("display", "none");
    $("#main-title-page").css("display", "none");
    $("#scrollArrow").css("display", "none");

  })

  // On click function for adding new task in mobile view

  $("add-new-task-button").on("click", function () {
    $("#add-new-task-modal").css("display", "flex");
  })


  // On click command to shade and crossout completed task items

  $(".list-group-item").on("click", function () {
    $(this).find(".item").toggleClass("text-decoration");
  });


  // Allows items to be sorted and order number to be updated

  $(".sortable").sortable({
    update: function (event, ui) {
      $('.sortable .list-number').each(function (i) {
        var numbering = i + 1;
        $(this).text(numbering);
      });
    }
  });

  // On click function to remove list items

  $(".delete-button").on("click", function () {
    $(this).parent('.list-group-item').remove();
  });
})

// On click command for modal form

$(".add-member-button").on("click", function () {
  $("#create-member-form").css("display", "flex");
})

$(".add-task-button").on("click", function () {
  $("#create-member-form").css("display", "flex");
})

