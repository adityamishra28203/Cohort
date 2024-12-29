import axios from 'axios'
import { atom, selector } from 'recoil'

export const notificationAtom = atom({
    key: "notificationAtom",
    default: selector({
        key: "notificationSelector",
        get: async () => {
            const res = await axios.get("http://localhost:3000/notifications")       //async data quieries
            return res.data
        }
    })
})

export const allNotifications = selector({
    key: "allNotifications",
    get: ({get}) => {
        const allNotifications = get(notificationAtom)
         return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messages    
    }
})