'use client'; // Mark this component as a Client Component

import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function Success() {
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
