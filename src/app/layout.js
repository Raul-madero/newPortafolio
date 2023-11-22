import { Noto_Sans } from 'next/font/google';
import './globals.css';
import '../Sass/app.scss';

const noto = Noto_Sans({subsets: ['latin'],
                      weight: "700"
                    });

 export const metadata = {
  title: 'Raul Madero',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[noto.className, " text-success bg-dark"]}>{children}</body>
    </html>
  )
}
