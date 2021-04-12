var firebaseConfig = {
  apiKey: "AIzaSyAtX7mEHsiJ7fFGaLsAeswK65ogrv9R8ag",
  authDomain: "proyecto-feb.firebaseapp.com",
  projectId: "proyecto-feb",
  storageBucket: "proyecto-feb.appspot.com",
  messagingSenderId: "304259072477",
  appId: "1:304259072477:web:60406d260c4aeb9621b634",
  measurementId: "G-YS7ZV5Z1TX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  

  let Email_Login = document.querySelector("#email_login")
  let Pass_Login = document.querySelector("#password_login")
  let Login = document.querySelector("#login")
  let Email_Signin = document.querySelector("#email_signin")
  let Pass_Signin = document.querySelector("#pass_signin")
  let Registro = document.querySelector("#registro")
  let google = document.querySelector("#google")
  let facebook = document.querySelector("#facebook")
  let yahoo = document.querySelector("#yahoo")
  let github = document.querySelector("#github")
  let twitter = document.querySelector("#twitter")
  
  function Inicio_Ses(){
    firebase.auth().signInWithEmailAndPassword(Email_Login.value, Pass_Login.value)
  .then((userCredential) => {
    // Signed in
    console.log("Haz iniciado sesión")
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }

  function Registrarse(){
    firebase.auth().createUserWithEmailAndPassword(Email_Signin.value, Pass_Signin.value)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  function Google(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
function Facebook(){
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
}
function Yahoo(){
  var provider = new firebase.auth.OAuthProvider('yahoo.com');

  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    // IdP data available in result.additionalUserInfo.profile
    // ...

    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;

    // Yahoo OAuth access token and ID token can be retrieved by calling:
    var accessToken = credential.accessToken;
    var idToken = credential.idToken;
  })
  .catch((error) => {
    // Handle error.
  });
}
function Github(){

  var provider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
function Twitter(){

  var provider = new firebase.auth.TwitterAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    var token = credential.accessToken;
    var secret = credential.secret;

    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

