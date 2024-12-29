import React from "react";

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main>
            <h1>this the layout from the dashboard only 😊</h1>
            {children}
        </main>
    )
}