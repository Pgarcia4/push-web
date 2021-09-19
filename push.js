var push = require('web-push')

let vapidKeys = {
    publicKey: 'BDIt6vjE3bSxntW6YKzVZvOovWGKd63VR12WG9eq3PM333NTsMehSx_C6lGNt4dpYeS_ALt-yePGr49KAgTOl2Q',
    privateKey: 'xrKPFOLRHGe3lnOu43AA1FUzd6ueX9MVmrSJJKCwLBQ'
}

push.setVapidDetails('mailto: test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v1/gAAAAABhR…X1qqlQLYiNYVLKylod6TW4BVwVxddx-cw73YXgkjb9CeiFW0geIiLAnDVlnZ","keys":{"auth":"O5HoYRSVRqmosJon2GpJ5A","p256dh":"BKp4qEvMvmXP-FVlUbgYaLO5DY9BpJSqwUxVRKfyOe2RCe1pOW9M3tjoIlOiU-2H7asEU1C09XzDMw7yxFGWniw"}};
push.sendNotification(sub, 'test message')