import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
    ];

    return (
        <header className="py-3 shadow bg-gray-800">
            <Container>
                <nav className="flex items-center justify-between flex-wrap">
                    <div className="mr-4 flex-shrink-0">
                        <Link to="/">
                            <Logo width="60px" />
                        </Link>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
                        >
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <ul className={`${
                        isMobileMenuOpen ? 'block' : 'hidden'
                    } lg:flex lg:items-center lg:space-x-4 w-full lg:w-auto mt-4 lg:mt-0 ml-auto`}>
                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name} className="mb-2 lg:mb-0">
                                        <button
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                navigate(item.slug);
                                            }}
                                            className="block px-4 py-2 text-gray-200 bg-gray-700 hover:bg-gray-600 rounded-full transition duration-200 w-full text-left lg:text-center"
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                )
                        )}
                        {authStatus && (
                            <li className="mb-2 lg:mb-0">
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
