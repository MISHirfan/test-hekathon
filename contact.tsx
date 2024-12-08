import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/bg image 2.png" 
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black bg-gray-300 bg-opacity-50">
          <div className="mb-4">
            <Image
              src="/Group 78.png" alt="Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          
          <h1 className="text-4xl font-bold mt-2">Contact</h1>
          <p className="text-sm text-black">
            <a href="/" className="font-bold text-black hover:underline">Home</a> &gt; Contact
          </p>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="bg-white py-16 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-black">Get in touch with us</h2>
            <p className="mt-4 text-gray-600">
              We are here to help you with any questions or concerns you may have. <br />
              Feel free to reach out to us at any time!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              {/* Address */}
              <div className="flex items-start mb-6">
                <div className="mr-4 text-black">
                  <FaMapMarkerAlt size={30} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Address</h3>
                  <p className="text-gray-600">
                    123 Main Street, <br />
                    Your City, Your Country
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start mb-6">
                <div className="mr-4 text-black">
                  <FaPhoneAlt size={30} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Phone</h3>
                  <p className="text-gray-600">
                    +123 456 789 <br />
                    +987 654 321
                  </p>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex items-start">
                <div className="mr-4 text-black">
                  <FaClock size={30} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">Working Time</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 6pm <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <form className="bg-gray-50 p-8 rounded-md shadow-md">
                {/* Name */}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-black mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-gray-200"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-black mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-gray-200"
                  />
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-black mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Enter subject"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-gray-200"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-black mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Enter your message"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-gray-200"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-32 bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Free Delivery */}
          <div>
            <h3 className="text-lg font-bold text-black">Free Delivery</h3>
            <p className="text-gray-600 mt-2">
              Enjoy free delivery on all orders <br />
              without any hidden charges.
            </p>
          </div>

          {/* 90 Days Return */}
          <div>
            <h3 className="text-lg font-bold text-black">90 Days Return</h3>
            <p className="text-gray-600 mt-2">
              Hassle-free returns for up to 90 days <br />
              on all purchases.
            </p>
          </div>

          {/* Secure Payment */}
          <div>
            <h3 className="text-lg font-bold text-black">Secure Payment</h3>
            <p className="text-gray-600 mt-2">
              Your payment information is safe <br />
              with our secure systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;