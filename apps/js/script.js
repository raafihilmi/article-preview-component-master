const btnShare = document.getElementById("btnShare")
const openShare = document.getElementById("share")

btnShare.addEventListener('click', function() {
    console.log('click btn');

    if(openShare.classList.contains('visibility')){
        openShare.classList.remove("visibility");

    }

    else {
        openShare.classList.add("visibility");
    }

    
});
