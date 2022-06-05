// ============================================================================
// This func takes keystroke events and plays sound as well as visual effect
// ============================================================================
function PlaysoundKey(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(!audio)
        return;
    audio.currentTime = 0;  // Rewinds to start
    audio.play();
    key.classList.add("playing");
    key.addEventListener('transitionend', removeTransition); //
};

// ============================================================================
// This func takes mouse click events and plays sound as well as visual effect
// ============================================================================
//function PlaysoundClick(e) {
    //onst audio = e.
//    console.log(e.target[1]);
//    if(!e)
//        return;

//};


// ============================================================================
// This fuction removes the visual transition effect
// ============================================================================
function removeTransition(event) {
    if(event.propertyName !== "transform")
        return;
    this.classList.remove("playing");
};

// ============================================================================
// Call functions
// ============================================================================

//const k = document.querySelectorAll(".key");
//k.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', PlaysoundKey);

//const c = document.querySelectorAll(".key");
//c.forEach(key => key.onclick = PlaysoundClick);