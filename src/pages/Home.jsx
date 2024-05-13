import React from "react";
import pink from "./../assets/pink sketch.png";
const Home = () => {
  return (
    <div className="text-white mt-[22%] md:mt-[10%] lg:-mt-[5%] grid place-items-center bg-black lg:grid lg:grid-flow-col">
      <div className="lg:ml-[10%] w-[75%] lg:-mt-12 mt-[10%]  text-center lg:text-left">
        <p className="text-2xl text-white font-medium mb-4 text-center lg:text-left">
          Hey! This is
        </p>
        <p className="font-bold text-center text-4xl md:text-5xl lg:text-7xl lg:text-left bg-gradient-to-r from-pink-400 via-pink-200 to-pink-500  inline-block text-transparent bg-clip-text ">
          Rajdeep Kaur
        </p>
        <p className="mt-10 text-l md:text-xl font-medium lg:text-xl text-center lg:text-justify opacity-70">
          Intern, Front-End Developer, Open Source Contributor, CSE Student and{" "}
          <span className="bg-gradient-to-r from-[#ec4899] via-pink-200 to-[#ff168a]  inline-block text-transparent bg-clip-text">
            Artist
          </span>
        </p>
        <div className="inline-flex">
          <a
            href="https://github.com/kaur-rajdeep"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 64 64"
              style={{ fill: "#ec4899", marginTop: 20 }}
            >
              <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
            </svg>
          </a>
          <a
            href="http://www.linkedin.com/in/rajdeep-kaur-831047218"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0,0,300,250"
              style={{ fill: "#ec4899", marginTop: 15, marginLeft: 12 }}
            >
              <g
                fill="#ec4899"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(4,4)">
                  <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,14.359 11.641,26 26,26c14.359,0 26,-11.641 26,-26c0,-14.359 -11.641,-26 -26,-26zM25,44h-5v-18h5zM22.485,24h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM44,44h-5v-9c0,-3 -1.446,-4 -3,-4c-1.445,0 -3,1 -3,4v9h-5v-18h5v3c0.343,-0.981 1.984,-3 5,-3c4,0 6,3 6,8z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end lg:ml-[-300px]">
        <img src={pink} className="w-[70%]" alt="pink" />
      </div>
    </div>
  );
};

export default Home;
