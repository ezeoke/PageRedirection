const checkPassword = function(){
    if(document.getElementById('name').value === 'admin' 
    && document.getElementById('password').value === 'admin'){
        // alert('correct password');
        location.replace('jumia.html');
    }else{
        alert('wrong username or password');
        return false
    }
}

