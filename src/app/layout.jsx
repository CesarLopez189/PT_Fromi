import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Prueba técnica",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} >
        <div className="w-full max-w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
