import { storageService } from "../storage-service.js";
import { utilService } from "../../services/keeper-services/util-service.js";


export const mailService = {
    query,
    sendMail,
    getById,
    deleteMail
}

const KEY = 'mails';

var mails = _createMails()
window.theMails = mails

function query() {
    return mails
}

function getById(mailId) {
    const mail = mails.find(mail => mail.id === mailId);
    return Promise.resolve(mail);
}

function deleteMail(mailId) {
    for (var i = 0; i < mails.length; i++) {
        if (mails[i].id == mailId) {
            mails.splice(i, 1);
            break;
        }
    }
}

function sendMail(newMail) {
    let newDate = Date.now()
    newMail.sentAt = newDate
    newMail.id = utilService.makeId()
    mails.push(newMail)
    _saveMailsToStorage();
}


function _createMails() {
    var mailsFromStorage = storageService.load(KEY)
    if (!mailsFromStorage || !mailsFromStorage.length) {
        mailsFromStorage = [{
                id: "jkfd7n",
                sentTo: 'Netflix',
                subject: 'New sign in to your account',
                body: 'Hi Aderajoe,                    We noticed a new sign-in with your Netflix account (adetsegay@gmail.com).                                         Device                    Web Browser                   Location                    Compton LA, USA                   (may not match your exact location)                    Time                    September 13th 1996, 6:36 PM GMT+2                If you signed-in recently, relax and enjoy watching! But if you don’t recognize this sign-in, we recommend that you change your password immediately to secure your account.                 Were here to help if you need it. Visit the Help Center for more info or contact us.',
                isRead: true,
                sentAt: 1551133930594
            },
            {
                id: "7rnvT3",
                sentTo: 'GitHub',
                subject: ' A first-party GitHub OAuth application has been added to your account',
                body: `Hey Aderajoe!
                A first-party GitHub OAuth application (Git Credential Manager) with gist, repo, and workflow scopes was recently authorized to access your account.
                Visit https://github.com/123andNobodyIsHere for more information.
                To see this and other security events for your account, visit https://github.com/settings/security-log
                If you run into problems, please contact support by visiting https://github.com/contact
                Thanks, The GitHub Team`,

                isRead: false,
                sentAt: 1551133930594
            },
            {
                id: "f73vye",
                sentTo: 'Makaveli',
                subject: 'Business offer',
                body: 'Hello friend!. Soon I will release A new album, and you got the opportunity to invest a small amount that will generate a lot of funds for you in the future. If you are intersted, send 3500$ to 4TH street, Compton LA. sincerely yours, Makaveli',
                isRead: false,
                sentAt: 1551133930594
            }
        ]
    }
    return mailsFromStorage
}

function _saveMailsToStorage(mailsFromStorage = mails) {
    storageService.save(KEY, mailsFromStorage)
}