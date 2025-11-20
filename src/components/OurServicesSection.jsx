import Container from "./Container";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CardImage1 from "../assets/section-card-1.png";
import CardImage2 from "../assets/section-card-2.png";
import CardImage3 from "../assets/section-card-3.png";
import CardImage4 from "../assets/section-card-4.png";
import FramerMotion from "./FramerMotion";

const services = [
  {
    title: "Tax Consulting",
    image: CardImage1,
    desc: "We offer expert advice based on current tax laws and regulations, tailored to each client's specific needs. Our consulting services cover a wide range of areas including tax planning, independent transaction opinions, applications for tax incentives, corporate restructuring, tax audits, compliance matters, and other taxation challenges your company may face. We provide both verbal and written recommendations, offering clear interpretations and insights into the relevant tax rules.",
  },
  {
    title: "Tax Planning and Preparation",
    image: CardImage2,
    desc: "As we review your latest tax return and financial statements, we take time to discuss your goals and objectives to design the most effective strategies. Our tax planning services include reviewing current legislation, anticipating upcoming regulatory changes, and identifying potential tax loss areas. Our dedicated professionals work to help you maintain and enhance your financial position. We view tax return preparation not as the final step, but as the foundation for smarter planning in the following year.",
  },
  {
    title: "Tax Compliance",
    image: CardImage3,
    desc: "We understand that tax compliance can be complex and time-consuming. That's why our services are designed to help your business fulfill all tax obligations accurately and efficiently. With DSA Consulting, you can concentrate on growing your business while we handle your tax obligations with precision and care.",
  },
  {
    title: "Tax Diagnostic Review",
    image: CardImage4,
    desc: "Our Tax Diagnostic Review service provides a detailed assessment of your company's tax practices. This thorough review helps identify potential risks, confirm compliance with existing laws, and uncover opportunities for tax savings. With our Tax Diagnostic Review, you gain a clear understanding of your tax position, empowering you to make confident financial decisions.",
  },
  {
    title: "Tax Litigation Services",
    image: CardImage1,
    desc: "Dealing with tax disputes can be stressful and complex, but with DSA Consulting, you don't have to face them alone. Our Tax Litigation Services provide full support and representation throughout every stage of the dispute or legal process. DSA Consulting is dedicated to protecting your rights and ensuring fair treatment in all tax-related matters.",
  },
  {
    title: "Tax Objection and Appeal",
    image: CardImage2,
    desc: "Disagreements with tax assessments can arise, and when they do, DSA Consulting is here to support you. Our Tax Objection and Appeal services ensure your rights are upheld and your case is handled effectively from start to finish. With DSA Consulting, you have a reliable partner who safeguards your interests through every stage of the objection and appeal process — allowing you to focus on running your business with confidence.",
  },
];

export default function OurServicesSection({ servicesRef }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (i) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };
  return (
    <div ref={servicesRef} className=" py-16 md:py-28 font-sans">
      <Container>
        <div className=" mx-4 px-10 py-14 bg-gradient-to-tr from-[#073B85] via-[#0D63CF] to-[#A5D4FF] shadow-xl rounded-xl">
          <h3 className=" font-bold bg-gradient-to-r from-[#021C3A] via-[#0449A8] to-[#0D63CF] text-transparent bg-clip-text text-2xl md:text-4xl pb-10">
            Our Services
          </h3>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((serve, i) => {
              const isOpen = expandedIndex === i;

              return (
                <FramerMotion animation="zoom-in" delay={i * 0.3}>
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg"
                  >
                    <img
                      className="rounded-t-lg"
                      src={serve.image}
                      alt={serve.title}
                    />

                    <div className="px-4 py-4">
                      <h2 className="text-xl font-semibold mb-2">
                        {serve.title}
                      </h2>

                      {!isOpen && (
                        <p className="line-clamp-3 text-sm text-white/90">
                          {serve.desc}
                        </p>
                      )}

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35 }}
                          >
                            <p className="text-sm text-white/90">
                              {serve.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        onClick={() => handleToggle(i)}
                        className="text-blue-300 hover:text-blue-400 text-sm mt-2 cursor-pointer"
                      >
                        {isOpen ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </FramerMotion>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
