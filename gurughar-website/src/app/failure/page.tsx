'use client'; // Mark the component as a client component

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function FailureContent() {
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

export default function Failure() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FailureContent />
        </Suspense>
    );
}
