// menu button for mobile screen

const clsBtn = document.querySelector('.clsBtn');
const toggleMenu = document.querySelector('.toggleMenu');
const menu = document.querySelector('.menu');



toggleMenu.addEventListener('click', () => {
    menu.classList.add('show')
});

clsBtn.addEventListener('click', () => {
    menu.classList.remove('show')
});

// info page side scroll

const lscrol = document.getElementById('lscrol');
const rscrol = document.getElementById('rscrol');
const inforCards = document.querySelector('.inforCards');

rscrol.addEventListener('click', () => {
    inforCards.scrollLeft += 240;
});

lscrol.addEventListener('click', () => {
    inforCards.scrollLeft -= 240;
});

//login

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


const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.getElementById('closeBtn');
const openBtn = document.getElementById('openBtn')

const getDataField = (id) => {
    return document.getElementById(id)
}

loginBtn.addEventListener('click', () => {
    const log_emailId = getDataField('log_emailId').value;
    const log_passwd = getDataField('log_passwd').value;

    firebase
        .auth()
        .signInWithEmailAndPassword(log_emailId, log_passwd)
        .then((userCred) => {
            localStorage.setItem('user', JSON.stringify(userCred.user))
        })
})

closeBtn.addEventListener('click', () => {
    document.getElementById('loginModel').style.display = 'none'
})

openBtn.addEventListener('click', () => {
    document.getElementById('loginModel').style.display = 'flex'
})

window.addEventListener('load', () => {

    const login_content = document.getElementById('login_content');

    const userInfo = JSON.parse(localStorage.getItem('user'))
    console.log(userInfo)

    if (userInfo) {
        var userContent = "";
        userContent += `
            <div class="userInfoStyles">
                <div class="userImg">${userInfo.email[0]}</div>
                <p>${userInfo.email}</p>
            </div>
        `
        login_content.innerHTML = userContent;
    } else {
        var signIn = '';
        signIn += `
            <p id="login_modal_btn">Sign In </p>
        `
        login_content.innerHTML = signIn
        document.getElementById('login_modal_btn').addEventListener('click', () => {
            document.getElementById('loginModel').style.display = 'flex'
        })
    }
})