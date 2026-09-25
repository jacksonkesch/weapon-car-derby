// Firebase relay settings for Weapon Car Derby online rooms.
//
// Without this, players still connect directly to each other when their network allows it.
// With it, anyone whose network blocks direct connections (common on school Wi-Fi) can still
// join through Firebase's relay.
//
// To turn the relay on, follow SETUP.md, then replace `null` below with the settings Firebase
// gives you. It must include a databaseURL. Example:
//
// window.FIREBASE_CONFIG = {
//   apiKey: "AIza...",
//   authDomain: "your-project.firebaseapp.com",
//   databaseURL: "https://your-project-default-rtdb.firebaseio.com",
//   projectId: "your-project",
//   storageBucket: "your-project.appspot.com",
//   messagingSenderId: "1234567890",
//   appId: "1:1234567890:web:abc123"
// };

window.FIREBASE_CONFIG = null;
