import { useEffect } from "react";
import { allNotifications, notificationAtom } from "./atom";
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import axios from 'axios';


function App () {
    return <RecoilRoot>
        <DisplayNotifications />
    </RecoilRoot>
}

function DisplayNotifications() {
    const [notif, setNotif] = useRecoilState(notificationAtom)
    const totalNotifications = useRecoilValue(allNotifications)
    return (
        <>
            <button>Home</button>

            <button>My Network {notif.network >= 100 ? "99+" : notif.network}</button>
            <button>Jobs {notif.jobs}</button>
            <button>Notifications {notif.notifications}</button>
            <button>Messages {notif.messages}</button>

            <button>Me {totalNotifications}</button>
        </>
    )
}

export default App;