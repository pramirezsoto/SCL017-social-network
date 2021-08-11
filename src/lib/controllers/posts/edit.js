import { firestoreEdit } from "../../database/firestore.js";

export const editPostInput = (e) => {
    const posting = e.srcElement.closest('.post').querySelector(".content").innerHTML;
    const post = document.getElementById('post');
    post.value = posting;
    console.log("aqui pasa esto", e.srcElement.closest('.post').querySelector(".post-head").id);


    const postId = document.getElementById('shared2').addEventListener("click" , e.srcElement.closest('.post').querySelector(".post-head").id , 
    firebase.auth().onAuthStateChanged(user => {
      console.log( "este es el useruid" , user.uid);
      editPost(user.uid , postId);

      }))
    }



export const editPost = async (currentUserUid , docId) => {
  const content = document.getElementById('post').value;
  

  const postAEditar = {
    content: content,
    useruid: currentUserUid
  };
console.log(docId , postAEditar)
  await firestoreEdit(docId, postAEditar);
}
