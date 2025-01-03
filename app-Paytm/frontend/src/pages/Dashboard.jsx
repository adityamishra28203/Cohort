import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios";
import cors from 'cors'
cors();
export const Dashboard = () => {

    const [balance, setBalance] = useState("");  
    
    useEffect(async () => {
        await axios
            .get("http://localhost:27017/api/v1/account/balance")  
            .then((response) => {
                setBalance(response.data.balance);
            })
            .catch((error) => {
                console.error("Error fetching balance:", error);
            });
    }, [balance]); 

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}