import Container from "./Container";

export default function GetInTouch({ contactRef }) {
  const sendToWhatsApp = (phone, name, email, message) => {
    const text =
      `Halo Mimin, saya ingin menghubungi Anda.\n\n` +
      `*Name*: ${name}\n` +
      `*Email*: ${email}\n\n` +
      `*Message*: \n${message}`;

    const encoded = encodeURIComponent(text);

    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const phone = "6281385269507";

    sendToWhatsApp(phone, name, email, message);
  };

  return (
    <div ref={contactRef} className=" py-16 md:py-28 font-sans">
      <Container>
        <div className=" mx-4 px-10 py-12 bg-gradient-to-b from-black to-[#042E63] rounded-lg shadow-lg">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div>
              <p className=" bg-gray-500/80 text-lg w-max px-4 py-1 rounded-full text-lightText font-semibold">
                Contact Us
              </p>

              <h3 className=" text-lightText font-bold md:text-4xl text-2xl pt-5">
                Let's Get In Touch.
              </h3>

              <p className=" text-gray-400 text-xs pb-5 pl-1">
                Connect with our experts and experience smarter tax solutions.
              </p>

              <p className=" text-gray-300">
                Or reach just out manually to{" "}
                <span
                  onClick={() =>
                    window.open("https://wa.me/6281385269507", "_blank")
                  }
                  className=" cursor-pointer text-accent hover:text-gray-300 transition"
                >
                  +62 81385269507.
                </span>
              </p>
            </div>

            <div className=" text-lightText font-semibold">
              <form onSubmit={handleSubmit}>
                <div className=" mt-5">
                  <p className=" text-sm">Full Name</p>
                  <input
                    className=" bg-[#0D111A] border border-[#1C2535] text-gray-200 focus:border-blue-400 outline-none transition w-full rounded-full px-4 py-2 mt-2 text-sm"
                    type="text"
                    name="name"
                    placeholder="Enter full name...."
                  />
                </div>

                <div className=" mt-5">
                  <p className=" text-sm">Your Email</p>
                  <input
                    className=" bg-[#0D111A] border border-[#1C2535] text-gray-200 focus:border-blue-400 outline-none transition w-full rounded-full px-4 py-2 mt-2 text-sm"
                    type="email"
                    name="email"
                    placeholder="Enter email...."
                  />
                </div>

                <div className=" mt-5">
                  <p className=" text-sm">Full Name</p>
                  <textarea
                    className=" bg-[#0D111A] border border-[#1C2535] text-gray-200 focus:border-blue-400 outline-none transition w-full rounded-xl px-4 py-2 mt-2 text-sm"
                    rows="5"
                    name="message"
                    placeholder="Enter your main text here...."
                  />
                </div>

                <div className=" mt-10">
                  <button
                    className="w-full py-3 rounded-xl bg-gradient-to-l from-primary to-blue-400
                     text-white font-semibold hover:opacity-90 transition cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
