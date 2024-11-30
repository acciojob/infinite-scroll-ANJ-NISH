
var list = document.getElementById('infi-list');

// Add event listener for scroll event
list.addEventListener('scroll', function() {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
   
    addMoreItems();
  }
});


function addMoreItems() {
  for (var i = 0; i < 2; i++) {
    var newItem = document.createElement('li');
    newItem.textContent = 'Item ' + (list.childElementCount + 1);
    list.appendChild(newItem);
  }
}

