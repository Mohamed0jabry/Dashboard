alert("userName: Mohamed  | password:1111" )
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function test(){
    var narr =["Mohamed"];
    var parr =["1111"];
    var name= document.forms["sign_in"]["username"].value;
    var password= document.forms["sign_in"]["password"].value;
    for(var i=0;i<5;i++)
    {
        if((name==narr[i]) && (password==parr[i]))
        {
            return true;
        }
        else if(name=="" || password=="")
        {
            return false;
        }
    }
    return false;
}














