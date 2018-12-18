import firebase from 'firebase';
import firestore from 'firebase/firestore';
// import 'firebase/auth'

const config = {
	apiKey: "AIzaSyBQ8NQogw3ZuXgpONJbw61hxssFOB5ZRGY",
  authDomain: "bijyo-collection.firebaseapp.com",
  databaseURL: "https://bijyo-collection.firebaseio.com",
  projectId: "bijyo-collection",
  storageBucket: "bijyo-collection.appspot.com",
  messagingSenderId: "684500278423"
}

firebase.initializeApp(config);

// Cloud Firestoreのインスタンスを初期化する
const db = firebase.firestore();

// settingsを設定することが必須
db.settings({
  // タイムスタンプが保存される
  timestampsInSnapshots: true
});

firebase.auth().onAuthStateChanged((user) => {
	if (user != null) {
		console.log("We are authenticated now!")
	}else{
		console.log("false")
	}
});

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().languageCode = 'pt';

export default firebase;