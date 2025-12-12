import React from "react";
export default function FooterSection() {
    return (
        <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">&copy; {new Date().getFullYear()} Nuvra. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
