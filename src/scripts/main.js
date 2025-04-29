
function getUsers()
{
    const users=localStorage.getItem('users');
    return users ? JSON.parse(users): [];
}
const user = getUsers();
console.log(user);


if(user.isSignUp)
{
    let a= document.querySelector('#log');
    a.textContent="Log Out";
}
// else if()


