import Image from "next/image";

const Home = () => {
  return (
    <div className="text-center">
      <header className=" pt-28 px-4">
        <h1 className="text-8xl font-bold">
          Bitropia&apos;s Weight Department
        </h1>
        <p className="text-xl mt-8">
          Mold Yourself into an action hero like plasticine
        </p>
      </header>
      <main>
        <section className="mt-16 w-3/5 mx-auto backdrop-blur-sm bg-white/20 rounded-md p-8">
          <h2 className="text-3xl ">
            Our &quot;Make It Happen Guarantee&quot;
          </h2>
          <div className="flex justify-center items-center mx-auto">
            <div className="w-1/3">
              <Image src="/man_1.png" alt="a man" width={300} height={500} />
            </div>
            <div className="w-2/3 text-left">
              <p className="text-xl">
                Your weight will drop, Your pants will drop, Your shirts will
                feel loose, You will loose skin. Otherwise this guy will eat his
                hat. Aliquip aliquip nostrud incididunt elit commodo ullamco est
                Lorem non eu tempor. Labore sint non eu exercitation sint.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
