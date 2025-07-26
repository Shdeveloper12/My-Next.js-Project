import React from "react";

export default function DashboardLayout({children}) {
    return(
        <div className="text-center">
            <div className="text-center mb-12">
               <h1>User Dashboard</h1>
            <p>Welcome to your dashboard. Here you can view your profile and settings.</p> 
            </div>
            

            <div className="grid grid-cols-12 ">
                 
                <div className="col-span-3 border border-gray-200 p-4 ">
                    <ul className="space-y-4">
                        <li>Statistics</li>
                        <li>Profile</li>
                        <li>Manage</li>
                    </ul>
                    </div>
                    <div className="col-span-9 border mx-5">
                        <p>Main content area.</p>
                        <p>Here you can manage your account, view statistics, and more.</p>
                        {children}
                    </div>

            </div>
            
        </div>
    )
}