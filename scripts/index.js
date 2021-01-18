//Get the action buttons
var allPosts_button = document.getElementById("all-posts-button");
var createPosts_button = document.getElementById("create-post-button");

// Get the modal
var createPostmodal = document.getElementById("CreatePostModal");

var createPost_close = document.getElementsByClassName("close")[2];

//Navigate to new page
allPosts_button.onclick = function () {
    location.href = "./html/postslist.html";
};

// When the user clicks on the button, open the modal
createPosts_button.onclick = function() {
    var modal_content = document.getElementsByClassName("modal-content")[2];
    modal_content.style.width = "30%";
    modal_content.style.display="flex";
    modal_content.style.flexDirection ="row";
    modal_content.style.flexWrap ="wrap";
    modal_content.style.margin ="10% 30% 20% 40%";
    createPostmodal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  createPost_close.onclick = function() {
    createPostmodal.style.display = "none"; 
  }

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == createPostmodal) {
        createPostmodal.style.display = "none";      
    }
  }