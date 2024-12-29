import { atom, selector } from 'recoil'

export const notificationAtom = atom({
    key: "notificationAtom",
    default: {
        network: 0,
        jobs: 0,
        notifications: 0,
        messages: 0
    }
})

export const allNotifications = selector({
    key: "allNotifications",
    get: ({get}) => {
        const allNotifications = get(notificationAtom)
         return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messages    
    }
})