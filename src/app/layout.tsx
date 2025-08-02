import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next js by code evolution",
    template: "%s | Codeevloution",
  },
  description: "this is demo project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-gray-500 text-center py-4 shadow">
          <h1 className="text-2xl font-semibold">My Website</h1>
        </header>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
          <p className="text-sm text-gray-600">
            &copy; My Website. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
