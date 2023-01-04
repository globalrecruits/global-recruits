import { ReactNode, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { GiHamburgerMenu } from 'react-icons/gi'

interface DashboardTemplateProperties {
    loadMember?: boolean,
    children: ReactNode
}

export default function DashboardTemplate(props: DashboardTemplateProperties) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

    return (
        <div className="font-custom h-full min-h-screen relative">
            <div className={"transition-all transition-slowest ease absolute top-0 bottom-0 min-h-full gradient-theme border-r border-gray-350 "  + (sidebarOpen ? "w-1/3 landscape:w-1/6 sm:w-1/8 md:w-1/6" : "w-0")}></div>
            <div className={"transition-all bottom-0 top-0 transition-slowest ease fix-ios fixed " + (sidebarOpen ? "w-1/3 landscape:w-1/6 sm:w-1/8 md:w-1/6" : "w-0")}>
                <div className="absolute right-[-48px] top-0 h-full lg:hidden">
                    <button className="w-12 h-12 gradient-theme-inverse flex justify-center items-center border-b border-r border-t border-gray-350" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <GiHamburgerMenu className="w-4/6 h-3/4" />
                    </button>
                </div>
                <div className="h-full overflow-y-auto overflow-x-hidden">
                    <div className="h-full py-4 xl:py-8 px-4 2xl:px-8">
                        <Sidebar />
                    </div>
                </div>
            </div>
            <div className={"transition-all transition-slowest ease h-full ml-auto pl-12 lg:pl-0 " + (sidebarOpen ? "w-2/3 landscape:w-5/6 sm:w-7/8 md:w-5/6" : "w-full")}>
                <div className="p-4 text-center">
                    {props.children}
                </div>
            </div>
        </div>
    );
}