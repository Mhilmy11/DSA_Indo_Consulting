import Container from "./Container";

export default function GetInTouch() {
  return (
    <section className="py-20 bg-[#0B0F19]">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p>Connect with our experts and experience smarter tax solutions.</p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-300 text-sm">Your Name</label>
            <input
              type="text"
              className="mt-2 px-4 py-3 rounded-xl bg-[#0D111A] border border-[#1C2535] 
                     text-gray-200 focus:border-blue-400 outline-none transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-300 text-sm">Your Email</label>
            <input
              type="email"
              className="mt-2 px-4 py-3 rounded-xl bg-[#0D111A] border border-[#1C2535] 
                     text-gray-200 focus:border-blue-400 outline-none transition"
              placeholder="email@example.com"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-300 text-sm">Subject</label>
            <input
              type="text"
              className="mt-2 px-4 py-3 rounded-xl bg-[#0D111A] border border-[#1C2535] 
                     text-gray-200 focus:border-blue-400 outline-none transition"
              placeholder="What is this about?"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-300 text-sm">Message</label>
            <textarea
              rows="5"
              className="mt-2 px-4 py-3 rounded-xl bg-[#0D111A] border border-[#1C2535] 
                     text-gray-200 focus:border-blue-400 outline-none transition resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-blue-400 
                     text-white font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
