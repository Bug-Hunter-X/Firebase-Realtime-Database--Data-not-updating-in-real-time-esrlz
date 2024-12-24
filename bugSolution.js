// bug.js
// Incorrect listener usage, missing error handling
firebase.database().ref('/myData').on('value', (snapshot) => {
  console.log(snapshot.val());
});

// bugSolution.js
// Improved listener and error handling
let dbRef = firebase.database().ref('/myData');
dbRef.on('value', (snapshot) => {
  try {
    const data = snapshot.val();
    console.log(data);
    // update UI with data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}, (error) => {
  console.error('Error listening for data:', error);
});
dbRef.onDisconnect().remove();
//Properly disconnect and remove node when user disconnects