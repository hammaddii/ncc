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
})