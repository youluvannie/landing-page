
    function buy(){
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");
    let emoji = prompt("What is your favourite emoji?");
    
    alert(
        "Thank you " +
        name +
        "!!,We'll be in touch via email,meanwhile enjoy your icecream! " +
        emoji 
    );
    }
    let buyButton = document.querySelector(".buy");
    buyButton.addEventListener("click", buy);
    
