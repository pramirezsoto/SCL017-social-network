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
    firebase.firestore().collection("posts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            
            const containerOnePost = document.createElement("section");
            containerOnePost.id = "onePost" + doc.id;
            containerOnePost.className = "onePost";

            const content = document.createElement("p");
            content.textContent = doc.data().content;

            containerOnePost.appendChild(content)

            containerPosts.appendChild(containerOnePost);
        });
    });
}