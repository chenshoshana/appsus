import { storageService } from "../storage-service.js";
// 

export const mailService = {
    query,
    // saveReview,
    // getCurrency
}

const KEY = 'mails';

var mails = _createMails()
window.theMails = mails

function query() {


    console.log(mails)
    return mails
}

function sendMail(newMail) {

    newMail = {
        idx: 5,
        subject: 'Wafgssap?',
        body: 'Pick up!',
        isRead: true,
        sentAt: 1551133930594
    }
    mails.push(mail)

    _saveMailsToStorage();

}


function _createMails() {
    var mailsFromStorage = storageService.load(KEY)
    if (!mailsFromStorage || !mailsFromStorage.length) {
        mailsFromStorage = [{
                    idx: 0,
                    subject: 'Wassap?',
                    body: 'Pick up!',
                    isRead: true,
                    sentAt: 1551133930594
                },
                {
                    idx: 1,
                    subject: 'Are you there?',
                    body: 'Pick up the damn phone!',
                    isRead: false,
                    sentAt: 1551133930594
                },
                {
                    idx: 2,
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
    storageService.save(KEY, mailsFromStorage)
}