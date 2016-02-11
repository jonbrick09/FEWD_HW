$(document).ready(function() {

  //Adding an item - listen for click on add-item-button
  $('.add-item-button').click(function(event) {
    //preventDefault
    event.preventDefault();
    //append a todo to todolist
    $('.main-list').append('<li class="line-items">' + '<input class="checkbox" type="checkbox" value="0"/>' + '<div class="task-item">' + 'Click to edit' + '</div>' + '<div class="delete-button">' + 'X' + '</div>' + '</li>');

    console.log('Added Item!');
  }); //end click of add-item

  //Editing an item - listen for click on todo-item within the main-list
  $('.main-list').on('click', '.task-item', function() {
    //preventDefault
    event.preventDefault();
    //replace task-item with edit-item div
    $(this).replaceWith('<div class="edit-item">' + '<input class="edit-entry" value="' + $(this).text() + '" />' +
        '<div class="save-button">' + 'Save' + '</div>' + '</div>');

    console.log('Editing' + 'HOW TO NAME LINE NUMBER?');

    //click the save button
    $('.save-button').click(function() {
      //replace edit-item div with a task-item with new value
      $(this).parent().replaceWith('<div class="task-item">' + $(this).siblings('input').val() + '</div>')
      //remove this save button only
      $(this).remove();

      console.log('Saving' + 'HOW TO NAME LINE NUMBER?');
    }); //end click of save button

  }); //end click of task-item

});//end ready
