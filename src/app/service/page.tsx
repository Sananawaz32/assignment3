import Navbar from "@/components/Header";

import Footer from "@/components/Footer";

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <h1 className="text-4xl font-bold mb-5 ">Our Services</h1>
      <p className="text-lg text-center mb-w-md">Web Development: I specialize in creating responsive, user-friendly websites using modern web technologies like React and Next.js.</p>
      <p className="text-lg text-center mb-w-md ">UI/UX Design: I have a strong interest in user interface design, and I create clean, simple, and functional interfaces that provide great user experiences.</p>
      <p className="text-lg text-center mb-w-md ">Graphic Design: Using tools like Figma and Adobe Photoshop, I design logos, social media posts, and more.</p>
    </div>
    <Footer />
    </>
  )
};