import { firestoreEdit } from "../../database/firestore.js";

export const editPostInput = (e) => {
    const posting = e.srcElement.closest('.post').querySelector(".content").innerHTML;
    const post = document.getElementById('post');
    post.value = posting;
}

export const editPost = async (currentUser) => {
  const content = document.getElementById('post').value;
  const docId = 'tienes que buscar el id del post';

  const postAEditar = {
    content: content,
    useruid: currentUser.uid
  };

  await firestoreEdit(docId, postAEditar);
}
