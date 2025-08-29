// app/cim-marketing-qualifications/page.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CIMMarketingQualifications() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="hero-section-marketing-page-crm flex flex-col md:flex-row items-center justify-between p-4 bg-white">
        <img
          src="https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/885124dd-2f86-ef11-ac20-0022489eee44?ts=638640693638661717"
          alt="CIM Marketing Qualifications"
          width={600}
          height={400}
          className="w-full md:w-1/2 rounded-lg object-cover"
        />
      </section>

      {/* First Section */}
      <section className="first-section p-4 bg-white">
        <h1 className="text-3xl font-bold mb-4">CIM Marketing Qualifications</h1>
        <p className="mb-4">
          The CIM is synonymous with marketing excellence and employers recognise these prestigious qualifications as the gold standard for marketing professionals. By achieving a CIM certification, you'll gain a competitive edge in the job market and elevate your career.
        </p>
        <p className="mb-4">
          As a Strategic Partner and Accredited Training Provider with CIM, we deliver an unparalleled learning experience tailored to your professional journey. With over 20 years of experience, we have a deep understanding of how to help marketing professionals succeed.
        </p>
        <h2 className="text-2xl font-bold text-blue-700 mb-2">How marketing courses benefit you?</h2>
        <ul className="list-disc pl-5 text-left mb-4">
          <li>Gain knowledge and skills you won’t learn ‘on-the-job'.</li>
          <li>Demonstrate your commitment to performing at the highest level to your employer.</li>
          <li>Set yourself up for the next step in your career.</li>
          <li>Have the satisfaction of achieving something worthwhile.</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="benefits p-4 bg-white">
        <div className="benefits-content flex flex-col md:flex-row items-center justify-between">
          <img
            src="https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/407d5597-d53d-ef11-8409-0022489ec139?ts=638561141148537431"
            alt="Benefits Image"
            width={200}
            height={200}
            className="rounded-full mb-4 md:mb-0 md:mr-4 object-cover"
          />
          <div className="benefits-text">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Why Study With Professional Academy?</h2>
            <ul className="list-disc pl-5">
              <li>Access our comprehensive, structured online learning system designed to fit around your schedule, allowing you to study at your own pace, wherever you are.</li>
              <li>Participate in interactive sessions with industry experts and receive one-on-one guidance and personalised support.</li>
              <li>Attend live revision seminars and mock multiple-choice exams to ensure you're well-prepared for your end assessment.</li>
              <li>Engage in monthly online drop-in sessions, connecting you with fellow students to discuss current trends and share experiences.</li>
              <li>Our Premium study method offers bite-sized workshops with marketing specialists and additional tutor consultations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses p-4 bg-white">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our CIM Courses</h2>
        <div className="course-list grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Level 3 Foundation in Professional & Digital Marketing",
            "Level 4 Certificate in Professional & Digital Marketing",
            "Level 6 Diploma in Professional & Digital Marketing",
            "Level 7 Marketing Leadership Programme",
            "Level 7 Postgraduate Diploma",
          ].map((course) => (
            <Link
              key={course}
              href={`https://www.professionalacademy.com/${course.toLowerCase().replace(/ /g, "-").replace(/&/g, "")}/`}
              className="bg-blue-700 hover:bg-orange-500 text-white p-4 rounded-lg text-center transition-colors duration-300"
            >
              {course}
            </Link>
          ))}
        </div>
      </section>

      {/* Level Checker Section */}
      <section className="level-checker p-4 bg-white">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Not Sure Which Course is Right for You?</h2>
        <p className="mb-4">
          Try our quick and easy{" "}
          <Link href="/professional-qualifications/which-qualification-is-right-for-you/" className="text-blue-700 hover:text-orange-500">
            Qualifications Navigator
          </Link>{" "}
          to see which Level is best,{" "}
          <Link href="https://calendly.com/lewis-walker-1/" className="text-blue-700 hover:text-orange-500">
            book a call
          </Link>{" "}
          with a qualifications advisor to discuss, or{" "}
          <Link href="https://www.professionalacademy.com/contact-us/" className="text-blue-700 hover:text-orange-500">
            send us a message
          </Link>{" "}
          today.
        </p>
        <div data-tf-live="01HZ2GWYED4JYSHZVSBSZ8GAVC" className="level-checker-box flex justify-center items-center flex-wrap"></div>
      </section>

      {/* Payment Options Section */}
      <section className="payment-options p-4 bg-orange-500 text-white">
        <h2 className="text-2xl font-bold mb-2">Flexible Payment Options for Individuals and Organisations</h2>
        <p className="mb-2">Enjoy finance options up to 12 months interest-free, starting from just £70 per month!</p>
        <div className="payment-plan bg-blue-700 p-2 inline-block rounded">From only £70 per month!</div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial p-4 bg-white">
        <p className="italic mb-2">
          “I was lucky to be given the opportunity by my workplace to study alongside my full-time role, which was hard but with the support and guidance of my dedicated tutor, Philip, I passed. I now feel so much more confident in my digital marketing activities and have taken on managing client socials. Thank you Professional Academy - Highly recommended!”
        </p>
        <p className="font-bold">Sian Price, CIM Level 6 Diploma</p>
      </section>

      {/* Contact Information Section */}
      <section className="contact-information p-4 bg-white">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Any Questions?</h2>
        <p className="mb-4">Contact us today and we'll be happy to answer your questions and provide any additional information you may need.</p>
        <Link href="https://calendly.com/lewis-walker-1/" className="call-button bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg inline-block mb-2">
          Book a Call
        </Link>
        <Link href="/professional-qualifications/syllabus-download/" className="syllabus-button bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg inline-block">
          Download Syllabus
        </Link>
      </section>
    </div>
  );
}