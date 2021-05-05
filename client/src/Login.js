
var loginInButton = document.getElementById("login-button");


function redirect() {
    window.location="http://127.0.0.1:5501/client/public/Dashboard.html";
}

loginInButton.addEventListener('click',()=>{
    console.log("Signed-in");
    Swal.fire({
        icon: 'success',
        title: 'You have been Logged-In Successfully',
        showConfirmButton: false,
        timer: 2500,
      })
      


      setTimeout('redirect()',2000);

    
})