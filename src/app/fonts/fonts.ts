import { Inter, Roboto_Mono, Nunito, Ubuntu } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
export const nunito = Nunito({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nunito",
});
export const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  display: "swap",
  subsets: ["latin"],
});
