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