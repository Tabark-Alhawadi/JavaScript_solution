function checkData(){
    var enteremail = document.getElementById('email').value;
    var enterPwd = document.getElementById('pass').value;

    var getEmail=localStorage.getItem('useremail');
    var getPwd=localStorage.getItem('userpwd');

    if(enteremail == getEmail)
    {
        if(enterPwd == getPwd)
        {
            alert("login successful");
        }
        else
        {
            alert("wrong password");
        }
    }
    else{
        alert("Invalid datalis");
    }
}