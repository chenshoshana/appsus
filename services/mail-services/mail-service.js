import { storageService } from "../storage-service.js";
export const mailService = {
    query,
    // saveReview,
    // getCurrency
}

const MAILKEY = 'mails';


function query() {
    // return Promise.resolve(notes)
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

    _saveBooksToStorage();

}

var mails = _createMails()
window.theMails = mails

function _createMails() {
    var mailsFromStorage = storageService.load(MAILKEY)
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
        _saveMailsToStorage(mailsFromStorage);
        return mailsFromStorage
    }
}

function _saveMailsToStorage(mailsFromStorage = mails) {
    storageService.save(MAILKEY, mailsFromStorage)
}