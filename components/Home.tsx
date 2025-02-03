import HeroSection from "@/components/HeroSection";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Spotlight overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Rest of the content */}
      <section className="relative z-10 mt-10 p-6">
        <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
        <p className="mt-4 text-gray-600">
          I am a software developer specializing in building beautiful and
          functional web applications.
        </p>
      </section>
    </div>
  );
};

export default Home;
