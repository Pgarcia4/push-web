var push = require('web-push')

let vapidKeys = {
    publicKey: 'BDIt6vjE3bSxntW6YKzVZvOovWGKd63VR12WG9eq3PM333NTsMehSx_C6lGNt4dpYeS_ALt-yePGr49KAgTOl2Q',
    privateKey: 'xrKPFOLRHGe3lnOu43AA1FUzd6ueX9MVmrSJJKCwLBQ'
}

push.setVapidDetails('mailto: test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')