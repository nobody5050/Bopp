// Set the configuration for your app
// TODO: Replace with your app's config object
var firebaseConfig = {
  apiKey: "AIzaSyAj_ilW3sPYkKg9zd3tbZcvGLg1ou1l00o",
  authDomain: "test-e0e57.firebaseapp.com",
  databaseURL: "https://test-e0e57.firebaseio.com",
  projectId: "test-e0e57",
  storageBucket: "test-e0e57.appspot.com",
  messagingSenderId: "734076048929",
  appId: "1:734076048929:web:41612dabaf67e345abb560"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
var storageRef = firebase.storage().ref();

function Upload() {      
  // Created a Storage Reference with root dir
  var storageRef = firebase.storage().ref();
  // Get the file from DOM
  const file = document.getElementById("files").files[0];
  console.log(file);
      
  const uuid = Math.random().toString(36).slice(2)
  
  //dynamically set reference to the file name
  var thisRef = storageRef.child(uuid);

  //put request upload file to firebase storage
  thisRef.put(file).then(function(snapshot) {
    alert("File Uploaded")
    console.log('Uploaded a blob or file!');
    const publicUrl = (`https://firebasestorage.googleapis.com/v0/b/test-e0e57.appspot.com/o/${file.name}?alt=media&token=c45a9272-2345-488f-b396-5ebe3f37d8b5`);
    console.log(publicUrl);
  });
}
