// firebase
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
// reference of dataase
var contactFormDB = firebase.database().ref("contactForm");


var contactData;
const contactBtn = document.getElementById('contactBtn')

const getDataField = (id) => {
    return document.getElementById(id)
}

window.onaload = () => {
    contactData = getData()
}

const getData = () => {
    fetch('../js/contact.json').then((Response) => {
        return Response.json()
    }).then((data) => {
        contactData = data;
        return data
    })
}

contactBtn.addEventListener('click', () => {
    const firstname = getDataField('firstname').value
    const lastname = getDataField('lastname').value
    const emailid = getDataField('emailid').value
    const mobile = getDataField('mobile').value
    const msgBox = getDataField('msgBox').value

    const data = {
        id: `${Date.now()}`,
        firstname: firstname,
        lastname: lastname,
        emailid: emailid,
        mobile: mobile,
        msgBox: msgBox
    }
    console.log(data)

    JSON.stringify(data);

    var newData = contactFormDB.push();

    newData.set(data);

    document.querySelector('.alertSuc').style.display = 'flex';

    setTimeout(() => {
        document.querySelector('.alertSuc').style.display = 'none';
    }, 4000)

    document.querySelector('.contactForm').reset()
})