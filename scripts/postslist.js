function removePost(post) {
    var delelePost = document.getElementById(post);
    delelePost.parentNode.removeChild(delelePost);
};


$(document).ready(function () {
$('#deletePostModal').on('show.bs.modal', function (event) { 
  var button = $(event.relatedTarget); 
  var postId = button.data('postid'); 
  var modal = $(this)
  modal.find('button.btn-danger').val(postId);
})
});


function openPost(post){
var parentDiv = post.parentNode.parentNode;
const postId = parentDiv.getAttribute("id") 
setPostDetails(postId);
window.location="../html/post.html?postId=" + postId;
};

function setPostDetails(postId){
const postAuthor = document.getElementById(postId).querySelector(".author-name p").innerHTML;
const postTitle = document.getElementById(postId).querySelector(".post-preview-title p").innerHTML;
const postContent = document.getElementById(postId).querySelector(".post-preview-content").innerHTML;
};