$(document).ready(function() {
    
    var memberNameSubmit = $("#memberName");
    var memberEmailSubmit = $("#memberEmail");
    var memberPhoneNumberSubmit = $("#memberPhoneNumber");

    $(document).on("submit", "#newMemberForm", handleNewUserSubmit);
    
    getUsers();

    function handleNewUserSubmit(event) {
        event.preventDefault();
        if (!memberNameSubmit.val().trim().trim()) {
            return;
        }
        if (!memberEmailSubmit.val().trim().trim()) {
            return;
        }
        if (!memberPhoneNumberSubmit.val().trim().trim()) {
            return;
        }
        
        insertUser({
            username: userNameSubmit.val().trim(),
            email: userEmailSubmit.val().trim()

        });

        function insertUser(data) {
            $.post("/api/user", data)
            .then(getUsers);
            console.log("this worked")
        }

    }

    


  });

  
  