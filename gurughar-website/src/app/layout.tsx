export const metadata = {
    title: 'Gurughar',
    description: 'Welcome to the Gurughar website, a place of worship and community.',
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
