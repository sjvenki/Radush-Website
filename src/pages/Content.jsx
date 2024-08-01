import React from "react";
import level from "../assets/level.png";
import error from "../assets/error.jpg";
import fault from "../assets/fault.jpg";
import dev from "../assets/dev.jpg";
import framing from "../assets/framing.jpg";
import alerts from "../assets/alerts.jpg";
import devops from "../assets/devops.jpg";
import need from "../assets/need.png";
import vel from "../assets/vel.jpg";

const Content = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 container mx-auto w-full max-w-screen-lg gap-9 my-20 justify-center items-center text-center">
        <a href="/Level">
          <div className="shadow-lg p-3 bg-footer">
            <img src={level} className="w-80 h-71 object-cover"/>

            <p className="text-base text-gray my-3">
              UNDERSTANDING SLO, SLA, AND SLI: KEY CONCEPTS FOR SERVICE LEVEL
              MANAGEMENT
            </p>
          </div>
        </a>

        <a href="/Budget">
          <div className="shadow-lg p-3 bg-footer">
            <img src={error} className="w-80 h-71 object-cover" />

            <p className="text-base text-gray my-3">
              UNDERSTANDING ERROR BUDGETS AND THEIR ROLE IN DEFINING SERVICE
              LEVEL OBJECTIVES
            </p>
          </div>
        </a>

        <a href="/Fault">
          <div className="shadow-lg p-3 bg-footer">
            <img src={fault} className="w-80 h-71 object-cover"/>

            <p className="text-base text-gray my-3">
              IS FAULT TOLERANCE TESTING NECESSARY WHEN RESILIENCE IS IN PLACE?
            </p>
          </div>
        </a>
      </div>

      {/* services -2 */}

      <div className="grid md:grid-cols-3 container mx-auto w-full max-w-screen-lg gap-9 my-20 justify-center items-center text-center">
        <a href="/Develop">
          {" "}
          <div className="shadow-lg p-3 bg-footer">
            <img src={dev} className="w-80 h-71 object-cover"/>

            <p className="text-base text-gray my-3">
              INTRODUCTION TO CANARY RELEASES,CANARY CHANGES AND CANARY
              DEVELOPMENTS
            </p>
          </div>
        </a>

        <a href="/Framing">
          <div className="shadow-lg p-3 bg-footer">
            <img src={framing} className="w-80 h-71 object-cover"/>

            <p className="text-base text-gray my-3">
              FRAMING ERROR BUDGET POLICIES: BALANCING RELIABILITY AND
              INNOVATION
            </p>
          </div>
        </a>

        <a href="/Alert">
          {" "}
          <div className="shadow-lg p-3 bg-footer">
            <img src={alerts} className="w-80 h-71 object-cover"/>

            <p className="text-base text-gray my-3">
              FALSE POSITIVES VS. NO ALERTS: NAVIGATING SOFTWARE DEVELOPMENT FOR
              NEWCOMERS
            </p>
          </div>
        </a>
      </div>

      {/* services -3 */}
      <div className="grid md:grid-cols-3 container mx-auto w-full max-w-screen-lg gap-9 my-20 justify-center items-center text-center">
        <a href="/Devops">
          <div className="shadow-lg p-3 bg-footer">
            <img src={devops} className="w-80 h-71 object-cover"/>

            <p className="text-base text-gray my-3">
              BREAKING DOWN SILOS: DEVOPS, COLLABORATION, SRE PRACTICES, AND
              SHARED OWNERSHIPS
            </p>
          </div>
        </a>

        <a href="/Need">
          <div className="shadow-lg p-3 bg-footer">
            <img src={need} className="object-cover w-80 h-48" />

            <p className="text-base text-gray my-3">
              THE NEED FOR REAL-WORLD SIMULATION
            </p>
          </div>
        </a>

        <a href="/Velocity">
       
          <div className="shadow-lg p-3 bg-footer">
            <img src={vel} className="w-80 h-71 object-cover"/>

            <p className="text-base text-gray my-3">
              DEV = VELOCITY OF RELEASE, OPS = RELIABILITY AND STABILITY
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Content;
