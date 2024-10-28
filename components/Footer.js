import Link from "next/link";
import { FaXTwitter,FaYoutube,FaTiktok } from "react-icons/fa6";

const year = new Date().getFullYear();

export function Footer () {
    return (
        <footer className="grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-3 py-4 px-3 md:px-8 lg:px-16">
            <div>
                <p className="text-4xl text-gray-800 font -bold">Bills Limited</p>
                <p className="text-xs text-gray-600">&copy; {year}Bills Limited</p>

            </div>

            <div>
                <p className="text -md text-gray-700">Head Offive</p>
                <p className="text-sm text-gray">73 Ladoke Akintola street, victora Island, Nigeria</p>
            </div>

            <div>
                <ul className="flex lg:justify-end items-center gap-4">
                    <li><link href="#" className="text-sm text-gray-600">Terms of Use</link></li>
                    <li><link href="#" className="text-sm text-gray-600">Privacy Policy</link></li>
                    <li><link href="#" className="text-sm text-gray-600">Bug Bounty</link></li>
                </ul>
                <ul className="flex lg:justify-end items-center gap-4">
                    <li><link href="#" className="text-sm text-gray-600">Terms of Use</link></li>
                    <li><link href="#" className="text-sm text-gray-600">Privacy Policy</link></li>
                    <li><link href="#" className="text-sm text-gray-600">Bug Bounty</link></li>
                </ul>

            </div>

        </footer> 
    )
}