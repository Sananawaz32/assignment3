import Navbar from "@/components/Header";

import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <h1 className="text-4x1 font-bold  max-4-w-md ">About Me</h1>
      <p className="text-lg text-center max-4-w-md">Hi, I am Sana nawaz! I have a strong interest in web development and have been working on various projects using technologies like HTML, CSS, JavaScript, and React. I am always learning and experimenting with new technologies, especially with Next.js and TypeScript. Outside of coding, I enjoy graphic designing and content creation.</p>
      <p className="text-lg text-center max-4-w-md">Key Skills: React, JavaScript, TypeScript, Next.js, HTML, CSS, TailwindCSS.
      </p>
    </div>
    <Footer />
    </>
  )
};