const firebaseConfig = {
    apiKey: "AIzaSyBeMj78peYmOzuTkB6V0kRJ8pn5yHdKDLc",
    authDomain: "ncc-project-28be4.firebaseapp.com",
    databaseURL: "https://ncc-project-28be4-default-rtdb.firebaseio.com",
    projectId: "ncc-project-28be4",
    storageBucket: "ncc-project-28be4.appspot.com",
    messagingSenderId: "528201683158",
    appId: "1:528201683158:web:220fc3d94916d285eab977"
};
firebase.initializeApp(firebaseConfig);

const getDataField = (id) => {
    return document.getElementById(id)
}

const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener('click', () => {
    const emailid = getDataField('emailid').value;
    const passwd = getDataField('passwd').value;
    const confirm_passwd = getDataField('confirm_passwd').value;

    console.log(passwd, confirm_passwd)
    if (passwd === confirm_passwd) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailid, passwd)
            .then((userCreden) => {
                document.querySelector('.alertSuccess').style.display = 'flex';
                setTimeout(() => {
                    document.querySelector('.alertSuccess').style.display = 'none';
                }, 4000)
                document.querySelector('.registerForm').reset()
            })
            .catch((error) => { console.log(error) })
    } else {
        alert('Password mismatch')
    }
})