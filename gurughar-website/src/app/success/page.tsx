'use client'; // Mark the component as a client component

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
    const searchParams = useSearchParams();
    const transactionId = searchParams.get('transactionId');

    return (
        <div>
            <h1>Transaction Successful</h1>
            <p>Your transaction was successful!</p>
            {transactionId && <p>Transaction ID: {transactionId}</p>}
        </div>
    );
}

export default function Success() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessContent />
        </Suspense>
    );
}
