import Footer from "./components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitropia",
  description: "We will mold You or make our interns eat their hats.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="grow">{children}</div>
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
