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
  $("button.close").on("click", function() {
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

  // write code to get task list from database 
  /*
  function renderCard(name_query) {
    
    $.get("/api/user", function (data) {
      for (let i = 0; i < data.length; i++) {
        var mainCard = $("<div class='card task-list'>");
        var nameCard = $("<div class='text-center card-header success-color white-text'>")
        var name = $("<h2>");
        name.text(data[i].username);
        nameCard.append(name)
        mainCard.append(nameCard)
        var listcontainer = $("<div class='list-items'>");
        var olcontainer = $("<ol class='sortable list-group'>");
        var liBlock = '<li class="list-group-item">'+'<div class="md-v-line"></div>'+
        '<div class="md-v-line"></div><span class="badge list-number badge-info badge-pill mr-4">1</span>';
        var taskItem = $("<span class='align-middle item'>");
        $.get("/api/tasks/:name", function (data) {

        })
        taskItem.text();
      }
      console.log(names)
    })
   
    // create ajax request to query databse

  }

  function get_names_tasks(){
    var names=[];
    $.get("/api/user", function (data) {
      //console.log(data);
      //console.log(data.length)
      for (let i = 0; i < data.length; i++) {
        names.push(data[i].username)
        //console.log(names)
      }
      console.log(names)
    })
    return {names,tasks};
  }


  get_names_tasks();
  //Document , ready ends here 
  */
})

// On click command for modal form

$(".add-member-button").on("click", function () {
  $("#create-member-form").css("display", "flex");
})

$(".add-task-button").on("click", function () {
  $("#create-task-form").css("display", "flex");
})



//

