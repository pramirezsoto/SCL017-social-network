export const postElement = (postData, docId) => {

   const posting = document.createElement('div');
   posting.classList.add('post');
   const postDate = new Date(postData.timestamp.seconds * 1000)

   const dateString = postDate.toLocaleDateString();
   const timeString = postDate.toLocaleTimeString();
  
   const newPosting = `
   <div class="post-head" id="${postData.useruid}">
      <input type="hidden" id="${docId}">
      <div> <img class="user-photo" src="${postData.photo}"> </div>
      <div class="name-posting">${postData.displayname} ha compartido: </div>
      <div class="icon-remove">
         <button class="icon-pencil" onclick="window.location='#/editPost/${docId}'"></button>
         <button class="icon-bin" onclick="window.location='#/deletePost/${docId}'"></button>
      </div>
   </div>
   <div class="date">
      ${dateString} ${timeString}
   </div>
   <div class="posting">${postData.content}</div>
   <hr>
   <div class="icons">
      <span class="icon-heart like" href=""></span>
   </div>
   <hr>`;

   posting.innerHTML = newPosting;
   return posting;
}