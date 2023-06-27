import Butter from "buttercms";
import Image from "next/image";

import Form from "./components/Form.jsx";

const getStaticProps = async () => {
  let butter;
  try {
    butter = Butter(process.env.BUTTER_AUTH_TOKEN, 0);
  } catch (e) {
    console.log(e);
  }
  const data = await butter.page.retrieve(
    "landing-page",
    "home-bitropias-weight-department"
  );
  return data.data.data.fields;
};
const { seo, body } = await getStaticProps();

export const generateMetadata = async () => {
  const metadata = {
    title: seo.title,
    description: seo.description,
  };
  return metadata;
};
const Home = async () => {
  return (
    <div className="text-center">
      <header className=" pt-20 px-4">
        <h1 className="leading-normal text-8xl li font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-pink-500">
          {body ? body[1].fields.headline : "Bitropia"}
        </h1>
        <p className="text-xl mt-8">
          {body
            ? body[1].fields.subheadline.replace("<p>", "").replace("</p>", "")
            : "Welcome"}
        </p>
      </header>
      <main>
        <section className="mt-6 w-3/5 mx-auto backdrop-blur-sm bg-white/20 rounded-md p-8 pb-2 border-solid border-2 border-black translate-y-12">
          <h2 className="text-3xl font-semibold">
            Our &quot;
            <span className="bg-black text-white px-1 rounded-sm">
              {body ? body[0].fields.headline : "Guarantee"}
            </span>
            &quot;
          </h2>
          <div className="flex justify-center items-center mx-auto">
            <div className="w-1/3">
              <Image
                src={body[0].fields.image}
                alt="a man"
                width={300}
                height={500}
              />
            </div>
            <div className="w-2/3 text-left">
              <p className="text-xl">
                {body
                  ? body[0].fields.subheadline
                      .replace("<p>", "")
                      .replace("</p>", "")
                  : "Dolor labore officia nostrud incididunt qui ea labore incididunt labore. No butter."}
              </p>
            </div>
          </div>
        </section>
        <section className="section_background py-16">
          <h2 className="text-3xl font-semibold text-white">
            Roll the dice on Your new life
          </h2>
          <div>
            <h3 className="text-white mt-6 text-xl">
              Please fill out this form by giving us all of Your personal data.
            </h3>
            <p className="text-gray-400 mb-6 text-md">
              (Yes it will be sold to a third party)
            </p>
            <Form />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
