let form = document.querySelector("#signup");
form.addEventListener('submit', function(sub){
    sub.preventDefault();

    let u_name =document.querySelector('#name').value.trim();
    let u_email =document.querySelector('#email').value.trim();
    let u_pass =document.querySelector('#password').value.trim();

    console.log(u_name);
    console.log(u_email);
    console.log(u_pass);
    
    if(u_name==='' || u_email === '' || u_pass==='')
    {
       
        alert('all fields are required...');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let userExist = users.find(function (user){
        return user.email === u_email;

    });
    if(userExist)
    {
        alert('email already exist');
        return
    }
    users.push({ name: u_name,email:u_email,pass:u_pass,isSignUp:true});
    
    localStorage.setItem('users', JSON.stringify(users));

            alert('Sign-up successful');
            location.replace("learn.html");

            document.querySelector('#signup').reset();


}
)


