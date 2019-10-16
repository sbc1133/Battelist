$(document).ready(function() {
    
    var userNameSubmit = $("#nameInput");
    var userEmailSubmit = $("#emailInput");
    var userPhoneNumberSubmit = $("#phoneNumberInput");
    var userPasswordSubmit = $("#passwordInput");

    $(document).on("submit", "#newUserForm", handleNewUserSubmit);
    
    getUsers();

    function handleNewUserSubmit(event) {
        event.preventDefault();
        if (!userNameSubmit.val().trim().trim()) {
            return;
        }
        if (!userEmailSubmit.val().trim().trim()) {
            return;
        }
        if (!userPhoneNumberSubmit.val().trim().trim()) {
            return;
        }
        if (!userPasswordSubmit.val().trim().trim()) {
            return;
        }

        insertUser({
            username: userNameSubmit.val().trim(),
            email: userEmailSubmit.val().trim()

        });

        function insertUser(data) {
            $.post("/api/user", data)
            .then(getUsers);
        }

    }

    


  });

  
  