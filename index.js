// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "AIzaSyAj_ilW3sPYkKg9zd3tbZcvGLg1ou1l00o",
  authDomain: "test-e0e57.firebaseapp.com",
  databaseURL: "https://test-e0e57.firebaseio.com",
  projectId: "test-e0e57",
  storageBucket: "i.bopp.tk",
  messagingSenderId: "734076048929",
  appId: "1:734076048929:web:41612dabaf67e345abb560"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in our storage bucket
const storage = firebase.storage();
const storageRef = storage.ref();

document.getElementById("imuploadform").addEventListener("submit", ev => {
  // Get the file from DOM
  const file = document.getElementById("files").files[0];
  console.debug(file);
     
  //Generate statistically unique fileid
  //TODO: verify uniqueness
  const uuid = Math.random().toString(36).slice(2);
  
  //dynamically set reference to the file name
  const thisRef = storageRef.child(uuid);

  //put request upload file to firebase storage
  thisRef.put(file).then(snapshot => {
    console.debug('Uploaded a blob or file!');
    const publicUrl = `https://i.bopp.tk/${uuid}`;
    console.debug(publicUrl);
    
    document.getElementById("msg").textContent = `File uploaded! Your shareable url is ${publicUrl}`;
  });
  ev.preventDefault();
});
