import React from 'react';

const About = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0E3EDA]">About BlockEdu</h2>
        <p className="text-lg leading-relaxed mb-6">
          <strong>BlockEdu</strong> is a modern academic credential verification platform powered by blockchain technology. We help schools, students, and employers eliminate the risk of fake or altered certificates by ensuring every record is secure, verifiable, and tamper-proof.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          With BlockEdu, institutions can issue digital credentials that live on the blockchain, while graduates can share their achievements through QR codes or secure links. Employers and organizations can instantly verify documents—no delays, no back-and-forths.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Blockchain-Backed</strong> – Credentials are stored securely and can't be altered.</li>
          <li><strong>Instant Verification</strong> – Just scan a QR code or click a link.</li>
          <li><strong>Global Access</strong> – Verify anywhere, anytime.</li>
          <li><strong>Streamlined Process</strong> – Saves time for institutions and employers.</li>
          <li><strong>Student-Centric</strong> – Gives graduates full control over how they share their achievements.</li>
        </ul>
        <p className="mt-6 italic text-gray-600">
          BlockEdu is redefining trust in education—one verified credential at a time.
        </p>
      </div>
    </section>
  );
};

export default About;
