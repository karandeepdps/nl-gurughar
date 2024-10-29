// src/app/api/hukamnama/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const response = await fetch(`https://api.gurbaninow.com/v2/hukamnama/today?${Math.random() * 100000000000000000}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const hukamnamaJSON = await response.json();
        return NextResponse.json(hukamnamaJSON); // Send the entire JSON response back
    } catch (error) {
        console.error('Error fetching Hukamnama:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
