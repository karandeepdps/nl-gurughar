import '../../../gurughar-website/styles/globals.css'
// nl-gurughar/gurughar-website/styles/globals.css
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sikh Society Newfoundland',
    description: 'A place of worship and community for all',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <div className="layout-container">
            {children}
        </div>
        </body>
        </html>
    );
}
