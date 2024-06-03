import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <section className="relative overflow-hidden py-10 bg-gray-900 border-t-2 border-t-gray-800">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap -mx-6">
                    <div className="w-full p-6 sm:w-1/2 lg:w-5/12">
                        <div className="flex flex-col justify-between h-full">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 sm:w-1/2 md:w-1/4 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-500">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 sm:w-1/2 md:w-1/4 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 sm:w-1/2 md:w-1/4 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-base font-medium text-gray-300 hover:text-gray-400" to="/">
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
