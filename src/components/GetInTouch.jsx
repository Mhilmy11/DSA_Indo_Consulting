import Container from "./Container";

export default function GetInTouch({ contactRef }) {
  const sendToEmail = (emailTo, name, email, message) => {
    const subject = `Pesan dari ${name}`;
    const body =
      `Name: ${name}\n` + `Email: ${email}\n\n` + `Message:\n${message}`;

    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const emailTo = "info@dsaindoconsulting.co.id";

    sendToEmail(emailTo, name, email, message);
  };

  return (
    <div ref={contactRef} className=" py-7 md:py-14 font-sans">
      <div className=" bg-gradient-to-b from-[#F0FFFB] via-[#F7FFFE] to-white">
        <Container>
          <div className=" mx-4 p-10">
            <div className=" grid grid-cols-1 md:grid-cols-2">
              <div>
                <h3 className=" text-[#4F4F4F] font-bold md:text-4xl text-2xl pt-5">
                  Let's Get In Touch.
                </h3>

                <p className=" text-gray-400 text-xs pb-5 pl-1">
                  Connect with our experts and experience smarter tax solutions.
                </p>

                {/* <p className=" text-[#4F4F4F]">
                  Or reach just out manually to{" "}
                  <span
                    onClick={() =>
                      window.open("https://wa.me/6281385269507", "_blank")
                    }
                    className=" cursor-pointer text-[#184B8F] hover:text-gray-300 font-semibold transition"
                  >
                    +62 81385269507.
                  </span>
                </p> */}

                <div className=" pt-5 pb-16">
                  <h3 className=" text-[#4F4F4F] font-bold md:text-3xl text-xl pt-5">
                    Visit Our Office :
                  </h3>

                  <div className="w-full overflow-hidden">
                    <div className="relative w-full pb-[56.25%]">
                      {" "}
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1267840776372!2d106.97633317399027!3d-6.247018893741368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c49678564c9%3A0x4c48713e3d6cb0b1!2sPersada%20Office%20Park!5e0!3m2!1sen!2sid!4v1764824219163!5m2!1sen!2sid"
                        className="absolute top-0 left-0 w-[400px] h-[250px] rounded-2xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" font-semibold">
                <form onSubmit={handleSubmit}>
                  <div className=" mt-5">
                    <p className=" text-sm">Full Name</p>
                    <input
                      required
                      className=" w-full p-3 border border-[#CDEEE5] rounded-lg focus:ring-2 focus:ring-[#74F8D4] focus:border-transparent mt-2 text-sm"
                      type="text"
                      name="name"
                      placeholder="Enter full name...."
                    />
                  </div>

                  <div className=" mt-5">
                    <p className=" text-sm">Your Email</p>
                    <input
                      required
                      className=" w-full p-3 border border-[#CDEEE5] rounded-lg focus:ring-2 focus:ring-[#74F8D4] focus:border-transparent mt-2 text-sm"
                      type="email"
                      name="email"
                      placeholder="Enter email...."
                    />
                  </div>

                  <div className=" mt-5">
                    <p className=" text-sm">Your Message</p>
                    <textarea
                      required
                      className=" w-full p-3 border border-[#CDEEE5] rounded-lg focus:ring-2 focus:ring-[#74F8D4] focus:border-transparent mt-2 text-sm"
                      rows="5"
                      name="message"
                      placeholder="Enter your main text here...."
                    />
                  </div>

                  <div className=" mt-10">
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#74F8D4] to-[#8BD1FF] text-black hover:opacity-90 transition cursor-pointer">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
