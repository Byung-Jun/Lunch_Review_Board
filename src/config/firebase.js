import firebase from "firebase"

const config = {
  apiKey: "AIzaSyDxrZOrPlUcbikou1AzJRsstqWyqolvpY8",
  authDomain: "ssg-food.firebaseapp.com",
  databaseURL: "https://ssg-food.firebaseio.com",
  projectId: "ssg-food",
  storageBucket: "ssg-food.appspot.com",
  messagingSenderId: "1034332710172"
}

const app = firebase.initializeApp(config)
export var db = app.database()
export var boardRefs = db.ref("TB_board")
