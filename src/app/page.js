import Image from "next/image";

const Home = () => {
  return (
    <div className="text-center">
      <header className=" pt-20 px-4">
        <h1 className="leading-normal text-8xl li font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-pink-500">
          Bitropia&apos;s Weight Department
        </h1>
        <p className="text-xl mt-8">
          Mold Yourself into an action hero like plasticine
        </p>
      </header>
      <main>
        <section className="mt-6 w-3/5 mx-auto backdrop-blur-sm bg-white/20 rounded-md p-8 pb-2 border-solid border-2 border-gray-500 translate-y-12">
          <h2 className="text-3xl font-semibold">
            Our &quot;
            <span className="bg-black text-white px-1 rounded-sm">
              Make It Happen Guarantee
            </span>
            &quot;
          </h2>
          <div className="flex justify-center items-center mx-auto">
            <div className="w-1/3">
              <Image src="/man_1.png" alt="a man" width={300} height={500} />
            </div>
            <div className="w-2/3 text-left">
              <p className="text-xl">
                Your weight will drop, Your pants will drop, Your shirts will
                feel loose, You will have loose skin. Otherwise this guy will
                eat his hat. Aliquip aliquip nostrud incididunt elit commodo
                ullamco est Lorem non eu tempor. Labore sint non eu exercitation
                sint.
              </p>
            </div>
          </div>
        </section>
        <section className="section_background h-48 pt-16">
          <h2 className="text-3xl font-semibold text-white">
            Roll the dice on Your new life
          </h2>
        </section>
      </main>
    </div>
  );
};

export default Home;
