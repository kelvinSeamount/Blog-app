import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "Blog articles on latest topic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
}
