import React from "react";

const WhyUs: React.FC = () => {
  return (
    <section className="pb-40 bg-customText2 font-mono">
      <div className="text-center px-2 mb-20 bg-customBg py-20">
        <h2 className="text-2xl font-bold text-white lg:text-3x custom-font">
          Find Out Why High Five Properties Stands Out
        </h2>
      </div>
      <div className="">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-4 lg:px-20 ">
          {/* Question 1 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              Why Choose High Five Properties?
            </h2>
            <p className="text-gray-600">
              At High Five Properties, we offer exclusive off-plan
              opportunities, a diverse property portfolio, and properties in
              prime locations. We are trusted by leading developers in the UAE,
              ensuring that your investment is secure and profitable.
            </p>
          </div>

          {/* Question 2 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              What Are the Benefits of Investing in UAE Real Estate?
            </h2>
            <p className="text-gray-600">
              Investing in UAE real estate offers numerous benefits, such as
              tax-free investment returns, a booming market with high potential
              for growth, and the possibility of securing long-term residency
              through property ownership.
            </p>
          </div>

          {/* Question 3 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              What Kind of Properties Does High Five Properties Offer?
            </h2>
            <p className="text-gray-600">
              High Five Properties provides a wide variety of luxury properties,
              including off-plan apartments, villas, townhouses, penthouses, and
              palaces. We ensure there is something for every lifestyle and
              budget.
            </p>
          </div>

          {/* Question 4 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              Where Are These Properties Located?
            </h2>
            <p className="text-gray-600">
              We specialize in properties located in Dubai most sought-after
              neighborhoods, including Downtown Dubai, Dubai Marina, Palm
              Jumeirah, Business Bay, and beyond. These areas offer incredible
              amenities and are known for their prime location.
            </p>
          </div>

          {/* Question 5 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              Why Are We Trusted by Leading Developers?
            </h2>
            <p className="text-gray-600">
              High Five Properties partners with the leading developers in the
              UAE, ensuring you have access to high-quality properties that
              promise excellent returns on investment. Our strong reputation is
              built on trust, expertise, and successful partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
