import React from "react";

const About = () => {
  return (
   <div className="w-full">
      <div className="container mx-auto">
        <div className="flex w-full flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:gap-2 gap-6">
          {/* ----------------Images-------------------- */}
          <div
            className="lg:w-1/2 bg-cover h-screen bg-center bg-no-repeat relative"
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/1263914795/photo/indian-rupee-money-bags-and-residential-buildings-figures-investments-in-real-estate-mortgage.jpg?s=1024x1024&w=is&k=20&c=EzmY2Up7oKGuIH9ZzLBpZIRMEzJKJ3Ftgb2uIny9h24=')",
            }}
          ></div>
          {/* ------------Text + Images --------------- */}
          <div className="lg:w-1/2  ">
            <div className="lg:w-11/12 h-full lg:mx-auto  flex flex-col justify-evenly gap-7">
              <div className="text-3xl font-bold ">
              A home is a place to start your story.
              </div>
              <div className="text-xl font-semibold ">
              The stars will never align, and the traffic lights of life will never all be green at the same time. The universe doesn’t conspire against you, but it doesn’t go out of its way to line up the pins either. Conditions are never perfect. ‘Someday’ is a disease that will take your dreams to the grave with you. Pro and con lists are just as bad. If it’s important to you and you want to do it ‘eventually,’ just do it and correct course along the way.
              </div>
              <div className="text-lg font-bold">120 PROJECT COMPLETE</div>
              <div>
                <div className="flex justify-around flex-wrap lg:flex-nowrap gap-2 ">
                  <div
                    className="h-[300px] w-10/12 bg-cover bg-no-repeat bg-center "
                    style={{
                      backgroundImage:
                        "url('https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y=')",
                      backgroundSize: "",
                    }}
                  ></div>
                  <div
                    className="h-[300px] w-10/12 bg-cover bg-no-repeat bg-center "
                    style={{
                      backgroundImage:
                        "url('https://media.istockphoto.com/id/143071446/photo/student-working-in-library-at-night.jpg?s=1024x1024&w=is&k=20&c=wacdMFJK_YwaABcHbzXMGaN7g9KHdqXAwfgqI3LrDDA=')",
                      backgroundSize: "",
                    }}
                  ></div>
                </div>

                <div className="mt-4">
                  <p className="text-xl">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia..
                  </p>
                </div>
                <div className="mt-3">— Lucy Lee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;