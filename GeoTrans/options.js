
// Saves options to localStorage.
// altered to use extension storage
function save_options() 
{
  var select = document.getElementById("trans_type");
  var color = select.children[select.selectedIndex].value;
 // localStorage["favorite_color"] = color;
  chrome.storage.sync.set({"trans_type": color});

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
 //altered to use extension storage
function restore_options() 
{
 // var favorite = localStorage["favorite_color"];
  var favorite;
  chrome.storage.sync.get("trans_type", function(items){
 // alert(items.trans_type);
  var select = document.getElementById("trans_type");
  select.value=items.trans_type;
});

}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);