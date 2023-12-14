import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore";

const form = document.querySelector("form");
const regBtn = document.querySelector("#regBtn");

const fileInput = document.getElementById('file');
  const selectedImage = document.querySelector('.profile-pix img');

document.addEventListener('DOMContentLoaded', function() {
  

  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
        selectedImage.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  });
});

regBtn.addEventListener("click", () => {
  const subjects = Array.from(document.querySelectorAll('input[name="subject"]:checked')).map(checkbox => checkbox.value);
  if(subjects.length < 5 || subjects.length > 9 ) {
    alert("please choose minimum of 5 subjects and maximum of 9 subjects")
  }else{
    const data = {
  profile: selectedImage.src,
  surname: form[0].value,
  firstname: form[1].value,
  lastname: form[2].value,
  state: form[3].value,
  lga: form[4].value,
  phone: form[5].value,
  dob: form[6].value,
  sex: form[7].value,
  nin: form[8].value,
  subjects: subjects
}

console.log(data)
  }

  
})

const firebaseConfig = {
  apiKey: "AIzaSyB1_vwjqo-ZxhvdWUe9Wln2TP9xp_9nnwQ",
  authDomain: "festcoaa.firebaseapp.com",
  projectId: "festcoaa",
  storageBucket: "festcoaa.appspot.com",
  messagingSenderId: "939207536447",
  appId: "1:939207536447:web:2a864d9dbe0ca05426ed8a"
};

const app = initializeApp(firebaseConfig);
document.querySelector(".text").innerHTML = app




