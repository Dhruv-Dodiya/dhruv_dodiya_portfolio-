import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Work = ({ toggleSidebar }) => {
  return (
    <div>
      <div className='bg-gradient-to-r from-purple-500 to-blue-500 fixed top-0 w-full z-10 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center py-4 px-4 md:px-8'>
                <div className='text-[24px] font-bold text-white'>
                    <Link href='/'>
                        <span>Dhruv Dodiya</span >
                    </Link>
                </div>
                <div className='hidden md:flex gap-6 text-white'>
                    <Link href='/'>
                        <span className='hover:text-[#ff4D41] transition-colors duration-300'>Home</span >
                    </Link>
                    <Link href='/About'>
                        <span className='hover:text-[#ff4D41] transition-colors duration-300'>About</span >
                    </Link>
                    <Link href='/Work'>
                        <span className='hover:text-[#ff4D41] transition-colors duration-300'>Project</span >
                    </Link>
                </div>
                <div className='md:hidden text-white text-[24px]' onClick={toggleSidebar}>
                    <FiMenu />
                </div>
            </div>
        </div>
      <section className="container m-auto py-10 px-4">
        <Heading title="Creative Work" />
        <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 flex gap-[60px]">
                            <div>
                                <img className="w-[400px]" src="/maxresdefault.webp" alt=""/>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Customer Relationship Management System
                                    </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Our online CRM system offers comprehensive features for managing
                                        sales and inquiries without needing installation on devices.
                                        Accessible via mobile, tablet, or computer web browser, it
                                        supports multi-user and multi-system use.
                                    </p>
                            </div>
                            <div>
                                <div className="flex items-center justify-between w-[600px]">
                                    <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        <b> Key features include:</b>
                                        <li>Inquiry and Quotation Management</li>
                                        <li>Follow-ups and Reminders</li>
                                        <li>Deal and Task Management</li>
                                        <li>Complaint Handling</li>
                                        <li>
                                        Detailed Reporting (Status, Source, Employee, Product-wise)
                                        </li>
                                        <li>Contact Group and Phone Book Management</li>
                                        <li>Company Register and Follow-up Alerts</li>
                                        <li>Graphical Reports</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        With robust database security and easy data backup, our CRM
                                        ensures efficient control over the sales process. All necessary
                                        reports are accessible with just a few clicks.
                                    </p>
                                </div>
                                <div className='max-w-[800px]'>
                                    <a
                                        href="https://plus.giggleserp.com/"
                                        target="_blank"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Check it out
                                        <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                        >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
      </section>
    </div>
  );
};

export default Work;
