// pages/terms.tsx

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const TermsAndConditions = () => {
  return (
    <section className='bg-customText2'>
        <Navbar />
      <Head>
        <title>Terms and Conditions</title>
        <meta name="description" content="Terms and Conditions of High Five Properties" />
      </Head>
      <div className="container mx-auto p-4 md:p-8">
        <section className="terms-content">
          <h1 className="mt-40 text-3xl md:text-4xl font-bold text-center text-customBg mb-6 custom-font text-customText@">
            Terms and Conditions
          </h1>

          <p className="text-lg text-center text-black mb-8 font-mono">
            Welcome to our website. By continuing to browse and use this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">Payments Disclaimer</h2>
            <p className="text-base text-black leading-relaxed font-mono">
              As per the instructions of the Dubai Land Department, individual Real Estate Agents are UNAUTHORIZED to receive any cash or funds transfer to their personal bank accounts. Cash payments must be handed over to the real estate Company Finance Team only or Sales Progression Officers at the real estate agency office. Cash payments can also be handed over at the official Trustee’s offices in the UAE in the presence of the real estate agency’s official Sales Progression Officer or Transferred to the official real estate company bank account. fäm Real Estate Broker LLC confirms the subject payments only through electronically generated receipts from our official email: hello@hi5properties.com For any further assistance or clarification, kindly contact: info@hi5properties.com
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">General Terms</h2>
            <p className="text-base text-black leading-relaxed font-mono">
              By accessing the Site and obtaining the facilities, products or services offered through the Site, you agree that all applicable law of Dubai and the United Arab Emirates (UAE) shall govern such access and the provision of such facilities, products and services and you agree to submit to the exclusive jurisdiction of the courts of the Emirate of Dubai, UAE.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">Legal and Liability</h2>
            <p className="text-base text-black leading-relaxed font-mono">
              To the maximum extent permitted by applicable law and regulatory requirements, High Five Properties specifically disclaims any liability for errors, inaccuracies or omissions on this website and for any loss (whether direct or indirect) or damage resulting from its use, whether caused by negligence or otherwise. Visitors are responsible for compliance with all local laws and regulations.
            </p>
            <ul className="list-disc ml-6 text-base text-black font-mono">
              <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of United Arab Emirates.</li>
              <li>Our failure to insist upon strict enforcement of any provision of these terms and conditions will not constitute a waiver of any provision or right. Any legal action or proceeding between us and you related to these terms and conditions will be brought exclusively in a court of competent jurisdiction in Dubai, United Arab Emirates.</li>
            </ul>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">Limitation of Liability</h2>
            <p className="text-base text-black leading-relaxed font-mono">
              In no event will High Five Properties be liable for any damages, including without limitation direct or indirect, special, incidental, or consequential damages, losses or expenses arising in connection with the Site or use thereof or inability to use by any party, or reliance on the contents of the Site, or in connection with any failure of performance, error, omission, interruption, defect, delay or failure in operation or transmission, computer virus or line or system failure, even if High Five Properties, its representatives, are advised of the possibility of such damages, losses or expense.
            </p>
            <p className="text-base text-black leading-relaxed font-mono">
              Hyperlinks to other internet resources are at your own risk; the content, accuracy, opinions expressed, and other links provided by these resources are not investigated, verified, monitored, or endorsed by High Five Properties. This Exclusion clause shall take effect to the fullest extent permitted by all applicable law.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">Intellectual Property</h2>
            <p className="text-base text-black leading-relaxed font-mono">
              All information submitted to High Five Properties via the Site shall be deemed and remain the property of High Five Properties who shall be free to use, for any purpose, any ideas, concepts, know-how or techniques contained in information a visitor to the Site provides High Five Properties through the Site. High Five Properties shall not be subject to any obligations of confidentiality or privacy regarding submitted information except as agreed by High Five Properties, as specifically set forth elsewhere on the Site in its Privacy Policy, or as otherwise specifically agreed or required by law.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">Third Party Links</h2>
            <p className="text-base text-black leading-relaxed font-mono">
              From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website. We have no responsibility for the content of the linked website.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">Forward-Looking Statements</h2>
            <p className="text-base text-black leading-relaxed font-mono">
              This website includes statements that are, or may be deemed to be, “forward looking statements”. These forward looking statements can be identified by the use of forward looking terminology, including the terms “believes”, “estimates”, “anticipates”, “expects”, “intends”, “may”, “will” or “should” or, in each case, their negative or other variations or comparable terminology. These forward looking statements include all matters that are not historical facts. They may appear in a number of places throughout this website and include statements regarding the intentions, beliefs or current expectations of High Five Properties concerning, among other things, the investment performance, results of operations, financial condition, liquidity and prospects of High Five Properties. By their nature, forward looking statements involve risks and uncertainties because they relate to events and depend on circumstances that may or may not occur in the future. Forward looking statements are not guarantees of future performance. Actual investment performance, results of operations, return on investments, timely completion of development or projects may differ materially from the impression created by the forward looking statements contained on this website.
            </p>
            <p className="text-base text-black leading-relaxed font-mono">
              High Five Properties does not undertake to update any of these forward-looking statements.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">Copyright and Trademarks</h2>
            <p className="text-base text-black leading-relaxed font-mono">
              Unless otherwise expressly noted, all content included on this website or mobile app, including, without limitation, images, logos, articles and other materials, are protected by copyrights, and/or other intellectual property owned, controlled or licensed by High Five Properties. All trademarks and logos displayed on this website are the property of their respective owners, who may or may not be affiliated with High Five Properties. Visitors are responsible for complying with all applicable copyright, trademark and other applicable laws. We allow visitors to make copies of this website as necessary incidental acts during their viewing of the website. Visitors can print, for their personal use, as much of the website as is reasonable for private purposes. All other use is strictly prohibited.
            </p>
          </section>

          <section className="section mb-12">
            <h2 className="text-2xl font-semibold text-customBg mb-4 custom-font">Contact</h2>
            <p className="text-base text-black leading-relaxed font-mono">
              Should you have any objections to the content posted on this website, you are requested to write to info@hi5properties.com with the subject: ‘content request clarification’ along with your name, address and telephone/mobile number, and we will respond as soon as possible.
            </p>
          </section>
        </section>
      </div>
    </section>
  );
};

export default TermsAndConditions;
