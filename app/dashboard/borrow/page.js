 "use client"
 import { useState,useEffec, useEffect } from "react";
 import { TextField } from "@mui/material";
 import { db } from "@/config/firebase.config";
 import { addDoc,collection } from "firebase/firestore";
import CircularProgress from "@mui/material";

const duration = [
    {id:"7d",days:7},
    {id:"30d",days:30},
    {id:"90d",days:90},
];

 export default function Borrow () {
    const [clickedRate,setClickedRate] = useState(undefined);
    const [ rate,setRate] = useState(0);
    const [ amount,setAmount] = useState(0);
    const [payback,setPayback] = useState (0);
    const [opsProgress,setOpsProgress] = useState(false);
    useEffect(() => {
        if (amount >= 1) {
            const interest = (rate * amount) / 100;
            setPayback(amount + interest)
        }
    }, [amount, rate]);

    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 lg:py-8 px-4 md:px-12 lg:px-16 bg-gray-100">
        <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 rounded-md bg- gray-50 p-2 md:p-6">
            <blockquote className="font-text-lg text blue-700"> 
                <span className="font-thin text-lg text-blue-800">Get an instant Loan</span>
            </blockquote>

            <form> 
                <div className="flex flexor-col gap-1">
                    <TextField
                    id="amount"
                    type="number"
                    variant="outlined"
                    placeholder="loan amount"
                    value={amount}
                    onChange={(text) => setAmount(Number(text.target.value))}/>
                </div>
            </form>
            <div className="border-dashed border border-blue-500 p-4 rounded">
                <p className="text-blue-700 text-sm mb-3">Choose Loan Duration</p>
                <ul className="grid grid-cols-3 gap-2">
                   {
                    duration.map(itemm =>  <li 
                        key={itemm.id}
                        onClick={() => {
                            setClickedRate(item.id);
                            if (items.days === 7) {

                            } else if ()
                        } }
                        className={`h-16 flex justify-cneter items-center bg-blue-700 text-white uppercase rounded-md`}>{item. days}days</li>)
                   }
                </ul>
            </div>
            <div className="flex flex-col-3 border-dashed border border-blue-500 p-4 rounded">
                <p className="text-gray-800">Interest rate for ... days</p>
                <p className="text-6xl text-blue-600">...%</p>
            </div>

            <div className="flex flex-col-2 bg-gradient-to-b from-blue-600 to-blue-800 border-dashed border border-blue-500 p-4 rounded">
                <p className="text-blue-50">You will pay back</p>
                <p className="text-4xl text-white">₦ pay back</p>
            </div>
            <div className="flex items-center gap-1">
                <button className="p-2 rounded bg-blue-600 text-white text-xl uppercase">Get Loan</button>
                <CircularProgress style={(display:!opsProgress ? "none" : "flex")}/>
            </div>
        </div>
        </main>
        
    )
 }