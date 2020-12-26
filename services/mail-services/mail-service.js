import { storageService } from "../storage-service.js";
import { utilService } from "../../services/keeper-services/util-service.js";


export const mailService = {
    query,
    sendMail
}

const KEY = 'mails';

var mails = _createMails()
window.theMails = mails

function query() {


    // console.log(mails)
    return mails
}

function sendMail(newMail) {

    // newMail = {
    //     id: 5,
    //     subject: 'Wafgssap?',
    //     body: 'Pick up!',
    //     isRead: true,
    //     sentAt: 1551133930594
    // }
    let newDate = Date.now()
    console.log(newDate)

    newMail.sentAt = newDate
    newMail.id = utilService.makeId()
    mails.push(newMail)

    _saveMailsToStorage();

}


function _createMails() {
    var mailsFromStorage = storageService.load(KEY)
    if (!mailsFromStorage || !mailsFromStorage.length) {
        mailsFromStorage = [{
                    id: 0,
                    sentTo: 'Netflix',
                    subject: 'New sign in to your account',
                    body: 'Hi Aderajoe,                    We noticed a new sign-in with your Netflix account (adetsegay@gmail.com).                                         Device                    Web Browser                   Location                    Compton LA, USA                   (may not match your exact location)                    Time                    September 13th 1996, 6:36 PM GMT+2                If you signed-in recently, relax and enjoy watching! But if you don’t recognize this sign-in, we recommend that you change your password immediately to secure your account.                 Were here to help if you need it. Visit the Help Center for more info or contact us.',
                    isRead: true,
                    sentAt: 1551133930594
                },
                {
                    id: 1,
                    sentTo: 'Poki',
                    subject: 'New sign-in to Netflix',
                    body: 'Pick up the damn phone!',
                    isRead: false,
                    sentAt: 1551133930594
                },
                {
                    id: 2,
                    sentTo: '2Pac',
                    subject: 'hey',
                    body: 'what time is it?',
                    isRead: false,
                    sentAt: 1551133930594
                }
            ]
            // _saveMailsToStorage(mailsFromStorage);
    }
    return mailsFromStorage
}

function _saveMailsToStorage(mailsFromStorage = mails) {
    console.log('save to storage')
    console.log(mails)
    console.log('save to storage')

    storageService.save(KEY, mailsFromStorage)
}