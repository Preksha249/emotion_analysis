import React from 'react'
import { HomeIcon, InformationCircleIcon, InboxIcon, UserIcon, ShoppingBagIcon, UserPlusIcon, FaceSmileIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import HomePage from './HomePage';
function Sidebar({ isPage, setIsPage }) {

    console.log("ispage", isPage)

    const renderPage = (feature) => {
        switch (feature) {
            case 'home': setIsPage(feature)
                break;
            case 'analytics': setIsPage(feature)
                break;
            case 'about': setIsPage(feature)
                break;
        }

    }
    // const pageRender
    return (
        // <div className="fixed left-0 top-0 h-full bg-gray-800 p-4 w-64">
        <div>
            <ul className="space-y-4">
                <li>
                    <a href={HomePage} onClick={() => renderPage('home')} className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg">
                        <HomeIcon className="w-6 h-6 mr-3" />
                        Home
                    </a>
                </li>
                <li>
                    <a href="#products" onClick={() => renderPage('analytics')} className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg">
                        <FaceSmileIcon className="w-6 h-6 mr-3" />
                        Emotion Analytics
                    </a>
                </li>
                <li>
                    <a href="#kanban" onClick={() => renderPage('about')} className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg">
                        <InformationCircleIcon className="w-6 h-6 mr-3" />
                        About
                    </a>
                </li>
                {/* <li>
                    <a href="#sign-in" className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg">
                        <ArrowRightOnRectangleIcon className="w-6 h-6 mr-3" />
                        Sign In
                    </a>
                </li>
                <li>
                    <a href="#sign-up" className="flex items-center text-white hover:bg-gray-700 p-2 rounded-lg">
                        <UserPlusIcon className="w-6 h-6 mr-3" />
                        Sign Up
                    </a>
                </li> */}
            </ul>
        </div>
    );
}

export default Sidebar;
