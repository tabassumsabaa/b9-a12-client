import React from 'react';

const Faqs = () => {
    return (
        <section className="faq-section py-16 px-4 bg-orange-300 rounded-xl relative">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions (FAQ)s</h2>
        <div className="space-y-4">
          {/* Question 1: What is CivicSurvey? */}
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              ❓ What is CivicSurvey?
            </div>
            <div className="collapse-content">
              <p>
                CivicSurvey is a platform designed to gather valuable data and feedback from citizens during the flood season in Bangladesh. It helps local authorities, NGOs, and the government understand the needs and challenges faced by affected communities, enabling them to provide better assistance and make informed decisions.
              </p>
            </div>
          </div>

          {/* Question 2: How to Create a Survey on CivicSurvey? */}
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              ❓ How to Create a Survey on CivicSurvey?
            </div>
            <div className="collapse-content">
              <p>
                To create a survey, sign up or log in to your CivicSurvey account. Once logged in, navigate to the 'Survey' section, fill out the survey details such as the title, description, questions, and target audience, and then click 'Submit'. Your survey will be available for users to participate and provide feedback.
              </p>
            </div>
          </div>

          {/* Question 3: What is the Goal of CivicSurvey? */}
          <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
              ❓ What is the Goal of CivicSurvey?
            </div>
            <div className="collapse-content">
              <p>
                The goal of CivicSurvey is to provide a centralized platform where citizens can share their experiences, needs, and opinions during the flood seasons in Bangladesh. The data collected helps policymakers and organizations to improve flood response, allocate resources effectively, and develop better flood prevention strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Faqs;