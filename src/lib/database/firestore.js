import { postElement } from '../view/templatePost.js';


// guarda los datos
export const firestoreSave = (collectionName, data) => {
    firebase.firestore().collection(collectionName).add(data)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

// leer y pintar los datos
export const firestoreRead = () => {
    const containerPosts = document.getElementById("container-posts");
    containerPosts.innerHTML = "";
    firebase.firestore().collection("posts").orderBy("timestamp", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            
            const containerOnePost = postElement(doc.data());
            
            containerPosts.appendChild(containerOnePost);
            
           containerOnePost.lastElementChild.previousElementSibling.lastElementChild.addEventListener('click', likesCount)
            
            
        });
    });
}

// conteo de likes

const likesCount = (event)=>{
    let saveId = event.srcElement.parentNode.parentNode.firstChild.nextElementSibling.id
    console.log(saveId)

    let saveIdPost = event.srcElement.parentNode.parentNode.firstChild.nextElementSibling.id
    console.log(saveIdPost)
} 



