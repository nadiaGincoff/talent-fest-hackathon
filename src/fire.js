import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCkkGLMUVaki08XxPbaR4bakOPhEMHt_Qw",
  authDomain: "talent-fest-hackathon.firebaseapp.com",
  databaseURL: "https://talent-fest-hackathon.firebaseio.com",
  projectId: "talent-fest-hackathon",
  storageBucket: "talent-fest-hackathon.appspot.com",
  messagingSenderId: "326022007463",
  appId: "1:326022007463:web:06eed40ab02320851a6982",
  measurementId: "G-S82XPKJ2T9"
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;