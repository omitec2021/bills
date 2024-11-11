"use client"
import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Auth() {
    const { data:session } = useSession();
    const router = useRouter();

    React.useEffect(()=> {
        if(session?.user){
            router.push("/dashbaoard/borrow")
        }
    },[])
    // console.log(session);
    
    return (
        <main className=" min-h-[520px] flex justify-center bg-gradient-to-b from-gray-50 to-gray-300 py-8 px-2">
            <article>
                <div className="w-full md:w-[24em] rounded-md bg-white p-4">
                    <h1 className="text-2xl mb-2">sign in to Bills</h1>
                    <p className=" text-sm text-gray-600 mb-4">sign in using ...</p>
                    {/* DELETE THIS */}
                    {/* <button onClick={()=>signOut()}>sign out</button> */}
                    {/* DELETE THIS */}
                    <form action={() => {
                        signIn("google")
                    }}
                    className="mb-2">
                        {/* <Button></Button> */}
                        <button  type="submit" className="w-full h-[3.2em] border-b-2 border-red-500 flex justify-center items-center gap-2 bg-black rounded-md">
                            <FaGoogle className="text-green-500 text-2xl" />
                            <span className="text-white text-lg">Google accounts</span>
                        </button>
                    </form>
                    <form className="mb-2">
                        {/* <Button></Button> */}
                        <button type="submit"  className="w-full h-[3.2em] border-b-2 border-red-500 flex gap-2 justify-center items-center bg-black rounded-md">
                            <FaXTwitter className="text-white text-2xl" />
                            <span className="text-white text-lg">Twitter accounts</span>
                        </button>
                    </form>
                        <p className="text-xs text-gray-600">By clicking the sign in Button you confirm that you have read and agree with our <Link href="#" className="text-gray-800 underline">Terms of use</Link> and <Link href="#" className="text-gray-800 underline">Privacy policy</Link></p>
                </div>
            </article>
        </main>
    )
}