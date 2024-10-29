// src/app/api/hukamnama/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch(`https://api.gurbaninow.com/v2/hukamnama/today?${Math.random() * 100000000000000000}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const hukamnamaJSON = await response.json();
        return NextResponse.json(hukamnamaJSON); 
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error fetching Hukamnama:', error.message);
            return NextResponse.json({ message: error.message }, { status: 500 });
        } else {
            console.error('Unexpected error:', error);
            return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
        }
    }
}
