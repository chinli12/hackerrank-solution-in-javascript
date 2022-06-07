// write  a function that will like a post add user_id to the likes array

function likepost(post_id, user_id) 
{
    // get the post
    var post = getpost(post_id);
    // if the post is not found return false
    if (!post) return false;
    // if the user has already liked the post return false
    if (post.likes.indexOf(user_id) > -1) return false;
    // add the user id to the likes array
    post.likes.push(user_id);
    // return true
    return true;
}
   
    
    
