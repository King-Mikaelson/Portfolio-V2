import Image from "next/image";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              builtbyalucard
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setDarkMode((prevValue) => !prevValue)}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1zAvFAOg7kDLptZm1n08M4PkeeZDJ2i8X/view?usp=drive_link"
                  download={"MichaelAnazodoResume"}
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Michael Anazodo
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              {" "}
              Full stack magician weaving code spells to craft digital wonders.
              From front-end enchantments to back-end sorcery, I bring web
              dreams to life. 🚀✨
            </p>
          </div>
          <div className="md:text-5xl text-3xl  flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="https://github.com/King-Mikaelson" target="_blank">
              <BsGithub />
            </a>
            <a href="https://twitter.com/1amNumberFour" target="_blank">
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://www.linkedin.com/in/anazodo-michael/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative mx-auto my-0 flex justify-center items-center mt-20">
            <Image
              src={"/mikeImage.jpeg"}
              width={300}
              height={300}
              className="rounded-full w-80 h-80 md:h-96 md:w-96"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              As a fullstack developer, I offer a range of solutions to help you
              build and enhance your web projects. I specialize in front-end
              development, where I can create responsive, user-friendly
              interfaces using HTML5, CSS3, and JavaScript. On the back end, I'm
              proficient in Node.js and can develop server-side logic and APIs.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Additionally, I can work with popular databases like MongoDB and
              MySQL to store and retrieve data efficiently. Whether you need a
              fullstack solution or help with specific front-end or back-end
              tasks, I'm here to contribute my skills and knowledge to make your
              project a success. Let's collaborate and bring your ideas to life!
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="lg:w-1/2 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src="/code.png" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2"></h3>
              <p className="py-2">
                Converting designs into code, I'm obsessed with precision and
                driven by design principles. I turn visions into pixel-perfect
                reality with creativity as my compass. 💻🎨✨
              </p>
              <h4 className="py-4  text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Tailwind Css</p>
              <p className="text-gray-800 py-1">Next Js</p>
              <p className="text-gray-800 py-1">SCSS</p>
              <p className="text-gray-800 py-1">Vue Js</p>
              <p className="text-gray-800 py-1">Git</p>
            </div>

            <div className="lg:w-1/2 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
                <Image src="/consulting.png" width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2"></h3>
              <p className="py-2">
                As a backend developer, I specialize in building the strong,
                reliable infrastructure that drives web applications. With
                expertise in server-side logic and database management, I'm the
                engine behind the scenes that powers exceptional digital
                experiences. Let's work together to create the backbone of your
                vision. 💻🔧🚀
              </p>
              <h4 className="py-4  text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1">Vs Code</p>
              <p className="text-gray-800 py-1">Node JS</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">Mongo DB</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md dark:text-white py-2 leading-8 text-gray-800">
              I'm a frontend engineer skilled in crafting user-centric web
              experiences. With expertise in HTML5, CSS3, JavaScript, React, and
              Vue.js, I excel at turning design concepts into responsive,
              high-performance applications. I pride myself on optimizing UIs,
              ensuring cross-browser compatibility, and enhancing website
              accessibility.
            </p>

            <p className="text-md py-2 dark:text-white leading-8 text-gray-800">
              Explore my portfolio to see how I bring ideas to life through code
              and let's collaborate to create exceptional digital experiences
              together!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1  gap-4 flex flex-col">
              <Image
                src="/artsy1.png"
                width={100}
                height={100}
                layout="responsive"
                className=" rounded-lg object-cover"
              />
              <div className="flex flex-col gap-6 p-6 rounded-lg shadow-md  dark:bg-white">
                <h4>Featured Project</h4>
                <p>Artsy Ecommerce</p>
                <p>
                  Explore my portfolio and uncover an enchanting artsy
                  e-commerce platform. With Next.js and Tailwind CSS, I've woven
                  a digital masterpiece, orchestrated by the magical useReducer
                  hook. This platform seamlessly melds technology and artistry,
                  delivering a captivating gallery experience for art lovers.
                </p>

                <div className="text-2xl flex gap-4 cursor-pointer">
                  <a
                    href="https://github.com/King-Mikaelson/ARTSY-ECOMMERCE"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a href="https://artsy-ecommerce.vercel.app/" target="_blank">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1  gap-4 flex flex-col">
              <Image
                src="/budget.png"
                width={100}
                height={100}
                layout="responsive"
                className=" rounded-lg object-cover"
              />
              <div className="flex flex-col gap-6 p-6 rounded-lg shadow-md  dark:bg-white">
                <h4>Featured Project</h4>
                <p>Consord Budget Manager App</p>

                <p>
                  Introducing the Consord Budget Manager App—a financial
                  companion designed to empower your financial journey. With its
                  sleek interface and robust features, it simplifies budgeting,
                  tracks expenses, and forecasts your financial future
                  effortlessly. Experience the art of financial management with
                  Consord, where your financial well-being is just a swipe away.
                </p>

                <div className="text-2xl flex gap-4 cursor-pointer">
                  <a
                    href="https://github.com/King-Mikaelson/CONCORD-BUDGET-APP"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://concord-budget-app.vercel.app/"
                    target="_blank"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1  gap-4 flex flex-col">
              <Image
                src="/ecommerce.png"
                width={100}
                height={100}
                layout="responsive"
                className=" rounded-lg object-cover"
              />
              <div className="flex flex-col gap-6 p-6 rounded-lg shadow-md  dark:bg-white">
                <h4>Featured Project</h4>
                <p>nextLevel Ecommerce</p>

                <p>
                  Welcome to NextLevel Ecommerce, your ultimate destination for
                  top-tier audio gear. Dive into a world of immersive sound with
                  our meticulously curated collection of headphones, earphones,
                  and speakers. Discover the perfect harmony of quality, style,
                  and innovation. Elevate your audio experience to the next
                  level with us – where every beat, every note, and every sound
                  comes alive.
                </p>

                <div className="text-2xl flex gap-4 cursor-pointer">
                  <a
                    href="https://github.com/King-Mikaelson/ECOMMERCE-NEXTJS-REDUXTOOLKIT"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://ecommerce-nextjs-reduxtoolkit.vercel.app/"
                    target="_blank"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            <div className="basis-1/3 flex-1  gap-4 flex flex-col">
              <Image
                src="/hulu.png"
                width={100}
                height={100}
                layout="responsive"
                className=" rounded-lg object-cover"
              />
              <div className="flex flex-col gap-6 p-6 rounded-lg shadow-md  dark:bg-white">
                <h4>Featured Project</h4>
                <p>Hulu Clone</p>

                <p>
                  The Hulu Clone, meticulously built with Next.js and styled
                  using Tailwind CSS, reimagines your favorite streaming
                  platform. Dive into a captivating world of seamless
                  navigation, stunning design, and an extensive library of
                  binge-worthy content. Experience the future of streaming with
                  our Hulu Clone and elevate your entertainment journey.
                </p>

                <div className="text-2xl flex gap-4 cursor-pointer">
                  <a
                    href="https://github.com/King-Mikaelson/Hulu-Clone-2.0"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://hulu-clone-2-0-king-mikaelson.vercel.app/"
                    target="_blank"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1  gap-4 flex flex-col">
              <Image
                src="/mediv.png"
                width={100}
                height={100}
                layout="responsive"
                className=" rounded-lg object-cover"
              />

              <div className="flex flex-col gap-6 p-6 rounded-lg shadow-md  dark:bg-white">
                <h4>Featured Project</h4>
                <p>Medic Health</p>

                <p>
                  Step into a healthier future with Medic Health, your virtual
                  medical weight loss pharmacy. Our mission is to help you
                  achieve your weight loss goals with personalized prescriptions
                  and expert guidance, all from the comfort of your home. Say
                  goodbye to the extra pounds and hello to a happier, healthier
                  you. Your journey to a balanced life begins here, at Medic
                  Health.
                </p>

                <div className="text-2xl flex gap-4 cursor-pointer">
                  <a
                    href="https://github.com/King-Mikaelson/MedicHealth-LP"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://www.medichealthwellness.com/"
                    target="_blank"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1  gap-4 flex flex-col">
              <Image
                src="/varscon.png"
                width={100}
                height={100}
                layout="responsive"
                className=" rounded-lg object-cover"
              />

              <div className="flex flex-col gap-6 p-6 rounded-lg shadow-md  dark:bg-white">
                <h4>Featured Project</h4>
                <p>Vasrcon Freelance website</p>

                <p>
                  Discover Varscon, your leading freelance agency with a unique
                  twist. We not only connect you with top-tier freelancers but
                  also house our own talented experts. At Varscon, we specialize
                  in crafting custom products for companies, blending the
                  expertise of our in-house team with our extensive network of
                  freelancers
                </p>

                <div className="text-2xl flex gap-4 cursor-pointer">
                  <a
                    href="https://github.com/King-Mikaelson/VARSCON-FREELANCE"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a href="https://www.varscon.com/" target="_blank">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1  gap-4 flex flex-col">
              <Image
                src="/scissors.png"
                width={100}
                height={100}
                layout="responsive"
                className=" rounded-lg object-cover"
              />

              <div className="flex flex-col gap-6 p-6 rounded-lg shadow-md  dark:bg-white">
                <h4>Featured Project</h4>
                <p>Scissors</p>

                <p>
                  Introducing "Scissors" – your go-to URL link shortener powered
                  by Next.js and styled with Tailwind CSS. Trim those lengthy
                  URLs into sleek, shareable links with ease. Simplify your
                  online presence and streamline your content sharing. Start
                  snipping with Scissors today!
                </p>

                <div className="text-2xl flex gap-4 cursor-pointer">
                  <a
                    href="https://github.com/King-Mikaelson/SCISSOR-REPO"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://zippy-granita-416707.netlify.app/"
                    target="_blank"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
