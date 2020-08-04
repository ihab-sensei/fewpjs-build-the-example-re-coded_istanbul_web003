// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



document.querySelector("body").addEventListener("click", e => {
  //vars for DOM selectors
  const likeGlyphs = document.querySelectorAll(".like-glyph")
  const errorDiv = document.querySelector("#modal")
  const errorMsg = document.querySelector("#modal-message")
  //like
  if(e.target.className === "like-glyph"){
  mimicServerCall()
  .then(response => {
    e.target.classList.add("activated-heart")
  })
  .catch(err => {
    errorMsg.innerText = err
    errorDiv.classList.remove("hidden")
    setTimeout(() => errorDiv.classList.add("hidden"), 5000 )
  })
  //unlike
  } else if (e.target.className === "like-glyph activated-heart"){
    e.target.classList.remove("activated-heart")
  }
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  console.log("hello")
    return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
