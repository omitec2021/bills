"use client"
import React from "react";
import { useSearchParams } from "next/navigation";
import { db } from "@/config/firebase.config"
import { doc,getDoc } from "firebase/firestore"
import { Skeleton } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import {  } from "module";

const schema = yup.object().shape
export default function History () {
    const [loan,setLoans] = React.useState(null);
    const [totalOffsets,setTotalOffsets] = React.useState(0);

    const docId = useSearchParams().get("doc_id")
    console.log(docId)

    React.useEffect(() => {
        const handleDocFetch = async () => {
            const docRef = doc(db,"loans",docId);
            const res = await getDoc(docRef)
        },
        
        
    },[]);
    validationSchema:schema

    return (
        <main className="min-h-screen flex justify-center items-cneter bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-16 ">
            <div className="w-[380px] h-[400px] bg-gray-200 rounded-md p-4">
                <h1 className="text-xl text-gray -800 mb-4">Loan Details</h1>
                { loan !== null ?
                <div className="flex flex-col gap-4 ">
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Amount</li>
                        <li className="text-lg text-gray-700 text-end">₦{loan.amount}</li>
                    </ul>
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Payback Amount</li>
                        <li className="text-lg text-gray-700 text-end">₦{}loan.payback</li>
                    </ul>
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Duration</li>
                        <li className="text-lg text-gray-700 text-end">₦{}</li>
                    </ul>
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Rate</li>
                        <li className="text-lg text-gray-700 text-end">₦{}</li>
                    </ul>
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Due Date</li>
                        <li className="text-lg text-gray-700 text-end">₦{}</li>
                    </ul>
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Total upsets</li>
                        <li className="text-lg text-gray-700 text-end">₦{}</li>
                    </ul>
                    <form 
                    onSubmit={handleSubmit}
                    style={{display:totalOffsets >= loan.amount ? "none" : "block"}}
                    className="bg-gray-200 p-4 rounded-md">
                        
                    </form>
                </div>
                :}
                <div className="flex flex-col gap-4">
                    <Skeleton variant="rectangle" className="w-full h-14 rounded-md"/>
                    <Skeleton variant="rectangle" className="w-full h-14 rounded-md"/>
                    <Skeleton variant="rectangle" className="w-full h-14 rounded-md"/>
                    
                </div>
                }
            </div>
        </main>
    )
}