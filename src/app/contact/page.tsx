import Navbar from "@/components/Header";

import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="text-lg text-center max-w-md"> We would love to hear from you! Whether you have a project in mind or just want to ask us some questions, feel free to reach out. Our team is here to assist you with all your web development needs.
</p>

  <strong>Phone:</strong> 03452591066<br />
  <strong>Email:</strong> Sananawaz984@gmail.com<br />
  
    
    </div>
    <Footer />
    </>
  )
};