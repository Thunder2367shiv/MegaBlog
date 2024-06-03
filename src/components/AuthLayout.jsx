import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        const redirectTo = authentication ? '/login' : '/';
        const shouldRedirect = authStatus !== authentication;

        if (shouldRedirect) {
            navigate(redirectTo);
        }
        
        setLoader(false);
    }, [authStatus, navigate, authentication]);

    return loader ? <h1>Loading...</h1> : <>{children}</>;
}
