'use client'; // Mark this component as a Client Component

import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function Failure() {
    const searchParams = useSearchParams();
    const errorCode = searchParams.get('errorCode');

    return (
        <div>
            <h1>Transaction Failed</h1>
            <p>Your transaction failed. Please try again.</p>
            {errorCode && <p>Error Code: {errorCode}</p>}
        </div>
    );
}
