import React from "react";

const Develop = () => {
  return (
    <div>
      {/* banner */}
      <div className="bg-product py-12 flex flex-col justify-center text-center">
        <div className="w-full max-w-screen-lg container mx-auto ">
          <div>
            <h3 className="text-2xl">INTRODUCTION TO CANARY RELEASES</h3>
            <h3 className="text-xl">CANARY CHANGES AND CANARY DEVELOPMENTS</h3>
            <p className="text-base my-3">
              {" "}
              Canary releases and canary changes are: terms used in software
              development to describe a deployment strategy that involves
              gradually rolling out updates or changes to a small subset of
              users or systems before making them available to everyone. Here's
              an explanation in non-technical terms. Imagine you have a new
              version of a software application or a change to an existing
              feature that you want to release to your users. Instead of
              releasing it to all users at once, you start by introducing it to
              a small group of users or a limited part of the system. This small
              group, or a subset of users, is like a canary bird in a coal mine
              that acts as an early warning system. If any issues or problems
              arise, they serve as indicators, just like the canary would
              indicate the presence of harmful gases in the mine.
            </p>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="container mx-auto flex flex-col w-f max-w-screen-lg my-12">
        <h3 className="text-xl font-semibold mt-6">
          1. Identifying the Canary Group:
        </h3>
        <p className="text-base">
          Developers select a subset of users or systems that represent a small
          portion of the overall user base or infrastructure. These users or
          systems serve as the “canary group.”
        </p>

        <h3 className="text-xl font-semibold mt-6">2. Deploying Changes:</h3>
        <p className="text-base">
          The changes, such as new features or code updates, are deployed to the
          canary group while keeping the rest of the system unchanged.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          3. Monitoring and Feedback:
        </h3>
        <p className="text-base">
          The canary group's experience is closely monitored, collecting
          metrics, logs, and user feedback. This helps identify any issues,
          performance problems, or negative user experiences caused by the
          changes.
        </p>

        <h3 className="text-xl font-semibold mt-6">
          4. Analysis and Iteration:
        </h3>
        <p className="text-base">
          The collected data is analyzed to assess the impact of the changes. If
          any issues or concerns arise, developers can make adjustments, bug
          fixes, or optimizations before proceeding with a wider deployment.
        </p>

        <h3 className="text-xl font-semibold mt-6">5. Gradual rollout:</h3>
        <p className="text-base">
          After successful validation with the canary group, the changes can be
          gradually rolled out to additional users or systems, ensuring a
          smoother transition.
        </p>
      </div>
    </div>
  );
};

export default Develop;
