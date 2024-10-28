import { HistoryTab } from "@/components/HistoryTab"

//delete this later
const dummy = [1,2,3,4];

export default function History () {
    return (
        <main className="h-screen flex justify-center items-cneter bg-gradient from-sky-100 via sky -500 to-blue-300 ">
            <div className="w-[380px] h-[400px] bg-gray-200 rounded-md p-4">
                <h1 className="text-xl text-gray -800 mb-4">My loan History</h1>
                <div className="flex flex-col gap ">
                    {dummy.map(loan => <HistoryTab
                        amount={5000}
                        rate={12.5}
                        duration={30}
                        date="13 JUL 2024"
                        type="personl"
                        key={loan}/>)}
                </div>
            </div>
        </main>
    )
}