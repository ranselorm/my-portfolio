import Button from "@/components/Button";
import CurvedCard from "./curved/CurvedCard";
import Social from "./Social";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero: React.FC = () => {
  return (
    <section className="py-20 font-primary flex items-center justify-center section-padding text-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="text-center md:text-left flex-1 flex flex-col space-y-5">
          <p className="text-xl font-semibold">Hello there👋,</p>
          <h3 className="font-bold text-5xl font-heading">
            I'm <span className="text-primary">Randy</span>, a Software <br />{" "}
            Engineer.
          </h3>
          <p className="text-xl w-full md:max-w-5xl">
            Specialized in MERN Stack, I welcome you to my world of innovative
            web applications development. Let's create something great together!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            {/* <Button label="About" variant="primary" /> */}
            <Button
              label="Portfolio"
              variant="secondary"
              icon="pepicons-pencil:arrow-up-right"
            />
          </div>
        </div>

        {/* Right Image */}
        <main className="flex-1 flex items-center justify-center gap-x-20">
          <div className="relative md:w-[350px]">
            <CurvedCard src="/images/passport.jpg" />
            <div className="w-24 h-24 bg-primary absolute -bottom-2 right-6 z-10 rounded-full flex items-center justify-center">
              <Icon
                icon="fluent:arrow-up-right-28-regular"
                className="text-5xl text-white"
              />
            </div>
          </div>
          <Social />
        </main>
      </div>
    </section>
  );
};

export default Hero;
