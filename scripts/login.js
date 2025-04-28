



function getUsers() {
    const usersString = localStorage.getItem('users');
    return usersString ? JSON.parse(usersString) : [];
}

// Usage
const users = getUsers();
console.log(users);

document.querySelector('#form').addEventListener('submit',function (let){
    let.preventDefault();

    let email = document.querySelector("#email");
    let pass = document.querySelector("#password");

  

    logInEmail = email.value.trim();
    logInPass  = pass.value.trim();

    if(!logInEmail)
        {
            alert('Email is requied');
            return;
        }
        if(!logInPass)
        {
            alert('Password is requied');
            return;
        }
        

    let user =users.find(function (u){
        return logInEmail === u.email && logInPass === u.pass;
    });

    if(user)
        {
            
            location.replace("learn.html");
         
        }
        else
        {
            alert('invalid user name or password')
        }
})


// document.querySelector("#signup").addEventListener("click", function(sub)
// {
//     sub.preventDefault();

//     let  form = document.querySelector('#form');
//     let input = document.createElement("input");

//     input.style.width()

// })

