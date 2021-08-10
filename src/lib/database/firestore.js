import { postElement } from '../view/templatePost.js';
import { currentUser } from '../auth/authetication.js';
// guarda los datos
export const firestoreSave = (collectionName, data) => {
  firebase.firestore().collection(collectionName).add(data)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
// conteo de likes

export const firestoreLike = async (likesPost, typeLike) => {
  const db = await firebase.firestore();
  const increment = firebase.firestore.FieldValue.increment(1);
  const decrement = firebase.firestore.FieldValue.increment(-1);
  let value;
  if (typeLike === 'increment') {
    value = increment;
  } else {
    value = decrement;
  }
  const storyRef = db.collection('posts').doc(likesPost.postid);
  const userLike = db.collection('posts').doc(likesPost.postid).collection('users').doc(likesPost.userid);
  const batch = db.batch();
  batch.set(storyRef, { }, { merge: true });
  batch.set(userLike, { }, { merge: true });
  batch.update(storyRef, { countLikes: value });
  batch.update(userLike, { countLikes: value });
  batch.commit();
};

const likesCount = (event) => {
  const saveId = event.srcElement.parentNode.parentNode.firstChild.nextElementSibling.id;
  const user = currentUser();
  const objectData = {
    userid: user.uid,
    postid: saveId,
  };
  let typeChange;
  if (objectData.userid && objectData.postid === event) {
    typeChange = 'decrement';
  } else {
    typeChange = 'increment';
  }
  firestoreLike(objectData, typeChange);
};

// leer y pintar los datos
export const firestoreRead = () => {
  const containerPosts = document.getElementById('container-posts');
  containerPosts.innerHTML = '';
  let uid;
   firebase.firestore().collection('posts').orderBy('timestamp', 'desc').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        firebase.auth().onAuthStateChanged((user) => {
          uid = user.uid;
          firebase.firestore().collection('posts').doc(doc.id).collection('users')
            .doc(uid)
            .get()
            .then((userLikes) => {
              let dataLike;
              if (userLikes.data() !== undefined) {
                dataLike = true;
              } else {
                dataLike = false;
              }
              console.log(doc.data());
              const countLikes = doc.data().countLikes;
              const containerOnePost = postElement(doc.id, doc.data(), countLikes, dataLike);
              containerPosts.appendChild(containerOnePost);
              containerOnePost.lastElementChild.previousElementSibling.lastElementChild.addEventListener('click', likesCount, firestoreLike);
            });
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
//  Eliminar post //
export const firestoreDelete = async (docId) => {
  await firebase.firestore().collection('posts').doc(docId).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
