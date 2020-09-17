console.log("can you hear me?")
function shoppingList() {
    $('#js-shopping-list-form').submit(function(event){
       event.preventDefault();
       let enterItems = $(event.currentTarget).find('#shopping-list-entry');
        $('.shopping-list').append(`
        <li>
          <span class="shopping-item">${enterItems.val()}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
        <li>`)
        enterItems.val('');
    });
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
      $(event.currentTarget).closest('li').remove();
    });
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
      $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}
$(shoppingList);