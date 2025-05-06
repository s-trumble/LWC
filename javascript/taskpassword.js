/*
Ask the user to enter a password using prompt. Keep asking until they enter "letmein". When they do, print "Access granted."

Enter password: 1234  
Enter password: secret  
Enter password: letmein  
Access granted.
*/

password();
function password(){
    let userPassword = prompt('Enter password: ');
    if(userPassword == 'letmein'){
        console.log('Access granted.');
    } else {
        password();
    }
}