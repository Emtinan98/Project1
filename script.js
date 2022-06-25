
// Signup function
function signup(e){
    event.preventDefault();
    

    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    let user = {
        emai: email,
        username: username,
        password: pass,
    };

    let json =JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('User added');

}

// Login function
function loginFun(e){
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let result = document.getElementById('result')

    let user = localStorage.getItem(username);
    let data = JSON.parse(user);
    console.log(data);

    if(user == null){
        result.innerHTML = ' Wrong Username ! ';
    } else if (username == data.username && pass == data.password){
        result.innerHTML = ' Logged in ';
    }else{
        result.innerHTML = ' Wrong Password ! ';
    }
}


// pop up for login
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  // pop up for signup
  function openForm1() {
    document.getElementById("myForm1").style.display = "block";
  }
  
  function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
  }