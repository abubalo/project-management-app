// import { Inter } from 'next/font/google'
import Head from "next/head";
import Header from "./components/Header";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <main className="bg-background w-full h-screen text-primary">
    <Header />
    hello there</main>;
}
