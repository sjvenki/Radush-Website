import React from "react";

const Budget = () => {
  return (
    <div>
      {/* banner */}
      <div className="bg-product py-12 flex flex-col justify-center text-center">
        <div className="w-full max-w-screen-lg container mx-auto ">
          <div>
            <h3 className="text-2xl">UNDERSTANDING ERROR BUDGETS </h3>
            <h3 className="text-xl">
              THEIR ROLE IN DEFINING SERVICE LEVEL OBJECTIVES
            </h3>
            <p className="text-base my-3">
              {" "}
              In the world of service management, ensuring reliability and
              meeting customer expectations is crucial. Two important concepts
              that help achieve this are error budgets and Service Level
              Objectives (SLOs). In this blog post, we'll explain what an error
              budget is, how it works, and its relationship with the calculation
              of SLOs, using relatable real-life examples.
            </p>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="container mx-auto flex flex-col w-f max-w-screen-lg my-12">
        <h3 className="text-xl font-semibold mt-6">
          1. What is an Error Budget?
        </h3>
        <p className="text-base">
          Imagine you're organizing a backyard barbecue with a limited budget.
          You allocate a certain amount of money for food, drinks, and
          decorations. The allocated budget represents what you can spend
          without going overboard. Similarly, an error budget in software
          development represents the margin or allowance for errors or incidents
          that can occur without compromising the overall reliability of the
          service.
        </p>

        <h3 className="text-xl font-semibold mt-6">2. Real-Life Example</h3>
        <p className="text-base">
          Let's say you have a music streaming app, and you want to ensure
          uninterrupted playback for your users. You define an SLO that the app
          should have an uptime of 99.9% (i.e., be available 99.9% of the time).
          To achieve this, you calculate your error budget, which may be 0.1% of
          the total possible service disruptions. This means you can tolerate a
          limited number of errors or incidents, such as brief periods of
          unavailability, within a given timeframe.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          3.The Relationship with SLOs
        </h3>
        <p className="text-base">
          In service management, SLOs define the desired performance or quality
          targets for a service. They are established based on factors like
          business requirements, user needs, and industry standards. SLOs
          provide a clear understanding of what should be achieved.To calculate
          SLOs accurately, an error budget is determined first. The error budget
          represents the maximum acceptable level of errors or incidents within
          a specific timeframe. It acts as a threshold that helps assess the
          reliability of a service.
        </p>
        <p className="text-base">
          By setting an error budget, you establish boundaries for the number
          and impact of errors. It guides your efforts to prioritize resources
          effectively, ensuring you allocate them for continuous improvement
          while staying within acceptable limits. Monitoring and managing the
          error budget helps you maintain a high level of service reliability.
        </p>
      </div>
    </div>
  );
};

export default Budget;
