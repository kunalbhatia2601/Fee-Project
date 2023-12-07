function search_blogs() {
    
    let input = document.getElementById('searchbar').value
    
    input=input.toLowerCase();
    
    let x = document.getElementsByClassName('card-title');
    let y = document.getElementsByClassName('featured-card');
      
    for (i = 0; i < x.length; i++)
    { 
        
        if (!x[i].innerHTML.toLowerCase().includes(input))
        {
            y[i].style.display="none";
        }
        else
        {
            y[i].style.display="block";                 
        }

    }
}

let form = document.querySelector("#commentingForm");
let main = document.querySelector("#commentMainBox");

form.addEventListener("submit", (event) => {
    
    var comment = event.target.uComment.value;
    var email = event.target.uEmail.value;

    var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

    userData.push({
        "email" : email,
        "comment" : comment,
    })

    localStorage.setItem("userDetails", JSON.stringify(userData));

    displayData();
    
    event.preventDefault();
})

let displayData = () => {
    var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

    var finalData = "";

    userData.forEach( (element, i) => {

        finalData += `<div>
        <p class="r-comment-email">${element.email}</p>
        <p class="r-comment-des">${element.comment}</p>
        <hr>
    </div>`

    main.innerHTML = finalData;

    })

}

displayData();