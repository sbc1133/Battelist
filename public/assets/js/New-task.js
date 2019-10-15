$(document).ready(function() {
    
    var taskNameSubmit = $("#taskNameSubmit");
    var selectedAssignee = $('#selectAssignee').find(":selected").text();;

    $(document).on("submit", "#newUserForm", handleNewTaskSubmit);
    
    getTasks();

    function handleNewTaskSubmit(event) {
        event.preventDefault();
        if (!taskNameSubmit.val().trim().trim()) {
            return;
        }
        if (!selectedAssignee.val().trim().trim()) {
            return;
        }
        
        insertTask({
            task: taskNameSubmit.val().trim(),
            assignee: selectedAssignee.val().trim()

        });

        function insertTask(data) {
            $.post("/api/tasks", data)
            .then(getTasks);
        }

    }

    


  });

  
  