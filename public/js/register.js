const firebaseConfig = {
    apiKey: "AIzaSyDtbewcrabNcH_uyvRViG4RPhNVP3C_jPw",
    authDomain: "ncc-assignment.firebaseapp.com",
    databaseURL: "https://ncc-assignment-default-rtdb.firebaseio.com",
    projectId: "ncc-assignment",
    storageBucket: "ncc-assignment.appspot.com",
    messagingSenderId: "1050366381555",
    appId: "1:1050366381555:web:2131e2543ee1f619df5686"
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