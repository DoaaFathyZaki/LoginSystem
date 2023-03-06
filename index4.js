

let userName = document.getElementById("username");
let userEmail = document.getElementById("userEmail");
let userPass = document.getElementById("userpassword");
let signupbtn = document.getElementById("signupbtn");


let usersData = [];

if (signupbtn!== null) {
    signupbtn.addEventListener( 'click' , checkNameValidity );
}

if (localStorage.getItem( 'users') != null) {
    usersData= JSON.parse(localStorage.getItem( 'users'));
}

function checkNameValidity(){

let userInfo = {
    name : userName.value,
    email : userEmail.value,
    pass : userPass.value
    
};
checkMailExisting()

if (userName.value == "" || userEmail.value == "" || userPass.value == "" || checkMailExisting()!== -1  ) {
    
    if (userName.value == "" || userEmail.value == "" || userPass.value == "") {
        
        document.getElementById('alertmsg').innerHTML = '<p class="text-danger text-center">All inputs are required</p>';
    }
    if(checkMailExisting()!== -1 ){
        document.getElementById('alertmsg').innerHTML = '<p class="text-danger text-center">Email Already exist</p>';
    }
}
// else if(x){

//     checkMailExisting(); 
// }
else {
    
usersData.push( userInfo );
localStorage.setItem('users', JSON.stringify( usersData ));
document.getElementById('alertmsg').innerHTML = '<p class="text-success text-center">Success</p>';
}
}
function checkMailExisting(){
    //let x = usersData.includes( userEmail.value );
// if (x) {
//     document.getElementById('alertmsg').innerHTML = '<p class="text-danger text-center">Email Already exist</p>';
// }
let x = usersData.findIndex( el => el.email==userEmail.value);
return x ;
}
// ============================================================================================================================================

// let existName = document.getElementById("oldemail");
// let existPass = document.getElementById( 'oldpass');
let loginbtn = document.getElementById( 'loginbtn');

if (loginbtn != null) {
    loginbtn.addEventListener( 'click' , checkDatabase );
}

function checkDatabase () {
    
    
let emaildata = usersData.find( el => el.name == userEmail.value);
let passdata = usersData.find( el => el.pass == userPass.value);

    if ( userEmail.value == "" || userPass.value == "") {

        document.getElementById('alertmsg2').innerHTML =  '<p class="text-danger text-center"> All inputs are required</p>' ;

    } 
    else if (emaildata == undefined || passdata== undefined) {
        
            document.getElementById('alertmsg2').innerHTML = '<p class="text-danger text-center"> incorrect email or password</p>';
        }
    
    else {
        window.location.href = './home.html';
    let homeName = userEmail.value;
    localStorage.setItem( 'username ', JSON.stringify(homeName));
        
        // console.log('username ');
        welcomeMsg ();
    } 
}
// ============================================================================================================================

// if (window.location.href = './home.html') {

//     loginbtn.addEventListener( 'click' , welcomeMsg)

// }
function welcomeMsg () {


        let homeUserName = JSON.parse(localStorage.getItem( 'username'));

        document.getElementsByClassName('welcoming').innerHTML = ' <h1 class="">Welcome' +  homeUserName +'</h1>'
    
}
    
