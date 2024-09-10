import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    // Parse the incoming request data from query parameters
    const data = req.nextUrl.searchParams.get('data') ? JSON.parse(decodeURIComponent(req.nextUrl.searchParams.get('data')!)) : {};

    // Save the transaction details to S3 (or any other storage if required)
    // This part is omitted for simplicity, focus on redirecting based on the data

    // Determine redirect URL based on the transaction result
    if (data.error_code) {
        const errorUrl = `/api/failure?errorCode=${data.error_code}`;
        return NextResponse.redirect(new URL(errorUrl, req.url));
    } else {
        const successUrl = `/api/success?transactionId=${data.transaction_id || 'unknown'}`;
        return NextResponse.redirect(new URL(successUrl, req.url));
    }
}
