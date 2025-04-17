import { CheckCircle2 } from "lucide-react";
import { donateOptions } from "../constants";
import houstonImage from "../assets/profile-pictures/houston.png";


const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Donations
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {donateOptions.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/1 p-2 flex justify-center"
          >
            <div className="p-10 border border-neutral-700 rounded-xl text-center w-full max-w-sm">
              <p className="text-4xl mb-8 flex flex-col items-center justify-center">
                {option.title}
                <h1 className="text-3xl font-bold mb-2 text-center"></h1>
                  <div className="flex justify-center mb-0">
                   <img
                    src={houstonImage}
                     alt="Houston SPCA"
                   />
                  </div>
              </p>
              <ul className="text-left inline-block mx-auto">
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://act.houstonspca.org/onlineactions/6O3ESosuu0q44qfLhzrYQw2?_ga=2.30273654.831125813.1744778082-821034640.1743655213"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Donate Here
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;