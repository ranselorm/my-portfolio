import Button from "@/components/Button";
import CurvedCard from "./curved/CurvedCard";
import Social from "./Social";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#f9f9f9] py-20 font-primary flex items-center justify-center section-padding">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="text-center md:text-left flex-1 flex flex-col space-y-5">
          {/* <h3 className="text-[80px] font-hero text-black">Randy S.</h3> */}
          <p className="text-black text-4xl font-hero font-bold tracking-widest leading-relaxed">
            creative designer <br />& developer
          </p>
          <p className="text-lg w-full md:max-w-5xl font-hero ">
            Specialized in MERN Stack, I welcome you to my world of innovative
            web applications development. Let's create something great together!
          </p>
          {/* <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button
              label="Portfolio"
              variant="secondary"
              icon="pepicons-pencil:arrow-up-right"
            />
          </div> */}
          <div className="flex items-center ">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <p className="text-xs -ml-4 font-black font-mont">SEE MY WORKS</p>
            <Icon icon="radix-icons:arrow-right" className="ml-3" />
          </div>
        </div>

        <main className="flex-1 flex items-center justify-center gap-x-20 bg-red-400 h-[400px]">
          {/* <div className="relative md:w-[350px]">
            <CurvedCard src="/images/passport.jpg" />
            <div className="w-24 h-24 bg-primary absolute -bottom-2 right-6 z-10 rounded-full flex items-center justify-center">
              <Icon
                icon="fluent:arrow-up-right-28-regular"
                className="text-5xl text-white"
              />
            </div>
          </div> */}{" "}
          he
          {/* <Social /> */}
        </main>
      </div>
    </section>
  );
};

export default Hero;
