import { TypeAnimation } from 'react-type-animation';
import CV from '../../assets/CV/LeTuTuan_CV.pdf';
import profilePic from '../../assets/image/avatar.png';
import { ShinyEffect } from '../shinyEffect';

export const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] min-h-[800px] mx-auto mb-8 md:mb-32 mt-14">
      <div className="max-w-[800px]">
        <p className="text-gray-200 md:text-6xl text-3xl tracking-tight">
          HEY , I AM <br /> <span>LE TU TUAN</span>
          <br />
          <TypeAnimation
            sequence={[
              'Developer',
              1000,
              'Web designer',
              1000,
              'Consultant',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>
        <h2 className="text-gray-300 mt-[10px]">
          with 3+ years of experience
        </h2>
        <div className="flex flex-row gap-4 md-4 md:mb-0">
          <a
            href={CV}
            className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl"
          >
            <div className="text-center">Download CV</div>
          </a>

          <button className="transform transition-transform hover:scale-105 hover:shadow-lg border border-gray-400 z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 rounded-xl">
            View Work
          </button>
        </div>
      </div>
      <div className="absolute inset-0">
        <div className="hidden md:block">
          <ShinyEffect left={50} top={70} size={1200} />
        </div>
        <ShinyEffect left={-100} top={0} size={1200} />
      </div>
      <div className="bg-gradient-to-b from-[#4db5ff] to-transparent w-72 h-120    mt-12 rounded-t-full overflow-hidden p-20 px-6">
        <img src={profilePic} alt="me" />
      </div>
    </div>
  );
};
