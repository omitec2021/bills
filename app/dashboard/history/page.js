"use client"
import React from "react";
import { db } from "@/config/firebase.config";
import { getDocs,collection,orderby } from "firebase/firestore";
import { HistoryTab } from "@/components/HistoryTab";


export default function History () {
    const [loans,setLoans] = React.useState([]);
    React.useEffect(() => {
        const handleFetchLoans = async () => {
            const q = collection(db,"loans");
            const onSnap = await getDocs(q);

            const compileResults = [];

            onSnap.docs.forEach(doc => {
                compileResults.push({
                    id:doc.id,
                    data:doc.data()
                })
                setLoans(compileResults)
            })
        }

        handleFetchLoans()
    },[]);
    
    return (
        <main className="h-screen flex justify-center items-cneter bg-gradient from-sky-100 via sky -500 to-blue-300 ">
            <div className="w-[380px] h-[400px] bg-gray-200 rounded-md p-4">
                <h1 className="text-xl text-gray -800 mb-4">My loan History</h1>
                <div className="flex flex-col gap ">
                    {loans.map(loan => <HistoryTab
                        docId={loan.id}
                        amount={loan}
                        rate={12.5}
                        duration={30}
                        date="13 JUL 2024"
                        type={"personl"}
                        key={loan.id}/>)}
                </div>
            </div>
        </main>
    )
}