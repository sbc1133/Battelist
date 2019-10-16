// Scroll Down Arrow animation

$(document).ready(function () {
  // $.get("/api/render/assignee").then(data=>{
  //   console.log("data", data)
  // })

  $("#scrollArrow").on('click', function () {
    $("#main-title-page").hide();
    $("#main-page").fadeIn();
    $("#scrollArrow").hide();
    $("#sign-in-form-container").css("display", "none");

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
    location.reload();
  })


  //

  $("button.close-modal").on("click", function () {
    $("#create-member-form").css("display", "none");
    $("#create-task-form").css("display", "none");

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



// On click command to open workbench

$("#createWorkbench").on("click", function () {
  $("#sign-in-form-container").css("display", "none");
  $("#main-title-page").css("display", "none");
  $("#main-page").css("display", "flex");
})

// On click command for modal form

$(".add-member-button").on("click", function () {
  $("#create-member-form").css("display", "flex");
})

$(".add-task-button").on("click", function () {
  $("#create-task-form").css("display", "flex");
})



  // Grabbing data from new member form to add to assignee api

  $("#newMemberForm").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUserInfo = {
      username: $("#nameInput").val().trim(),
      phoneNumber: $("#phoneNumberInput").val().trim(),
      email: $("#emailInput").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/assignee", {
      type: "POST",
      data: newUserInfo
    }).then(
      function () {
        console.log("created new member");
        // Reload the page to get the updated list
        $("#create-member-form").css("display", "none");
        $("#main-page").css("display", "flex");

      }
    );

  });

  // Grabbing new account user data to store in 

  $("#newUserForm").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUserInfo = {
      username: $("#nameInput").val().trim(),
      phoneNumber: $("#phoneNumberInput").val().trim(),
      email: $("#emailInput").val().trim(),
      password: $("#passwordInput").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/user", {
      type: "POST",
      data: newUserInfo
    }).then(
      function () {
        console.log("created new account");
        $("#create-account-form").css("display", "none");
        $("#modal-background").css("display", "none");
        $("#main-page").css("display", "flex");
        $("#create-member-form").css("display", "flex");
        // Reload the page to get the updated list

      }
    );

  });


  // Grabbing new task data to store in 

  $("#newUserForm").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var assignedMember = $('#selectAssignee').find(":selected").text();

    var newTaskInfo = {
      taskName: $("#taskNameSubmit").val().trim(),
      assigneeName: $('#selectAssignee').find(":selected").text()
    };

    // Needs to find 
    $.ajax("/api/assignee", {
      type: "PUT",
      data: newTaskInfo
    }).then(
      function () {
        console.log("created new account");
        // Reload the page to get the updated list

      }
    );
    });


  $("button.close-modal").on("click", function () {
    $("#create-response-code-modal").css("display","none");
  })

    $(".share-button").on("click",function(){
      console.log("button clicked")
      var userid = $(this).attr("data-userid");
      console.log("my user id is ", userid) ;
      var query_url = "/api/assignee/share/"+userid;
      console.log(query_url)
      $.get(query_url,function(data){
      console.log(data)
      if ( data.includes("250 2.0.0 OK")){
        console.log("found string") 
        $("#create-response-code-modal").css("display","flex");
      }
      })
    })

  
  });