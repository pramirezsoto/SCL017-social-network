export const postElement = (postData) => {
    const posting = document.createElement('div');
    posting.classList.add('post');
    const postDate = new Date(postData.timestamp.seconds*1000)
    
    const dateString = postDate.toLocaleDateString();
    const timeString = postDate.toLocaleTimeString();
    const newPosting = `
   <div class="post-head">
      <div class="img-profile"><img src="img/avatar.png" alt="img-avatar"></div>
      <div>
         <div class="name-posting">${postData.displayname} ha compartido: </div>
         <div class="date">
            ${dateString} ${timeString}
         </div>
      </div>
   </div>
   <div class="posting">${postData.content}</div>
   <hr>
   <div class="icons">
      <a class="icon-heart" href=""></a>
   </div>
   <hr>
    `;

    posting.innerHTML = newPosting;
    return posting;
}