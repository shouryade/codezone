import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";

import { Timeline } from "flowbite-react";
import { Card } from "flowbite-react";

import {
  HiTemplate,
  HiUserGroup,
  HiOutlineHand,
  HiOutlineLibrary,
  HiOutlineUsers,
} from "react-icons/hi";
import {
  FaCode,
  FaDatabase,
  FaCog,
  FaCube,
  FaCommentAlt,
  FaPencilAlt,
} from "react-icons/fa";

import JotForm from "../components/form";

import { StaticImage } from "gatsby-plugin-image";

import codezone from "../images/codezone-white.png";
import psir from "../images/prashant-sir.jpg";
import prsir from "../images/prabhat-sir.jpg";

import { Footer } from "flowbite-react";

const ListItem = ({ icon, children }) => (
  <li className="flex items-start mb-4">
    <div className="mr-2">{icon}</div>
    <div>{children}</div>
  </li>
);

AOS.init({
  duration: 800, // Animation duration in milliseconds
  easing: "ease-in-out", // Animation easing
  offset: 100, // Offset (in pixels) from the element's top before the animation triggers
});

const IndexPage = () => {
  return (
    <main>
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 !bg-gray-800">
          <div class="font-montserrat flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" class="flex items-center text-white">
              <img
                src={codezone}
                class="mr-3 h-6 sm:h-9"
                alt="Code Zone Logo"
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap !text-white">
                Code Zone
              </span>
            </a>

            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 !text-gray-400 lg:!hover:text-white !hover:bg-gray-700 !hover:text-white lg:!hover:bg-transparent !border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about-us"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 !text-gray-400 lg:!hover:text-white !hover:bg-gray-700 !hover:text-white lg:!hover:bg-transparent !border-gray-700"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 !text-gray-400 lg:!hover:text-white !hover:bg-gray-700 !hover:text-white lg:!hover:bg-transparent !border-gray-700"
                  >
                    Courses
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section class="font-roboto !bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl !text-white">
              Get a Job faster
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl !text-gray-400">
              At Code Zone, we're not just an online developer training
              institute; we're a global family of aspiring coders, experienced
              developers, and industry professionals dedicated to transforming
              your coding aspirations into reality.
              <br />
              We envision a world where every aspiring coder has access to the
              education and skills needed to crack any interview or coding
              contest globally.
              <br />
              Ready to embark on your coding journey? Join the Code Zone family
              today and let's turn your coding dreams into reality. Your coding
              adventure starts here!
            </p>

            <a
              href="#contact-us"
              onClick={() => smoothScrollTo("contact-us")}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 bg-white border border-red-500 rounded-lg focus:ring-4 focus:ring-gray-100 text-gray-900 border-[#000b76] pulse-animation border-4"
            >
              Yes! Where do I sign up?
            </a>
          </div>

          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      {/* Section for About Us */}

      <section class="bg-white font-montserrat">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-black md:text-4xl">
            Grow with Code Zone
          </h2>
          <p class="mb-8 text-2xl text-grey-900">
            Our students have secured internships and PPOs from some of the top
            companies in the world, including:
          </p>
          <div
            class="flex flex-wrap justify-center items-center mb-6 lg:mb-16"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-duration="500"
            data-aos-anchor-placement="top-center"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/logo-amazon.svg"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />

            <img
              src="https://cdn.worldvectorlogo.com/logos/walmart.svg"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />

            <img
              src="https://design.gs.com/downloads/Goldman_Sachs_Signature.svg"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/deloitte-2.svg"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/J_P_Morgan_Chase_Logo_2008_1.svg/1199px-J_P_Morgan_Chase_Logo_2008_1.svg.png?20230527022026"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />

            <img
              src="https://cdn.worldvectorlogo.com/logos/bain-company-logo.svg"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/accenture-6.svg"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/J_P_Morgan_Logo_2008_1.svg/2560px-J_P_Morgan_Logo_2008_1.svg.png"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Nagarro_logo_new.svg"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />
            <img
              src="https://ww1.freelogovectors.net/wp-content/uploads/2021/12/narvarlogo-freelogovectors.net_-400x102.png?lossy=1&ssl=1&fit=400%2C102"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/768px-Tata_Consultancy_Services_Logo.svg.png?20210617123944"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />

            <img
              src="https://vtlogo.com/wp-content/uploads/2020/10/national-payments-corporation-of-india-npci-vector-logo.png"
              class="max-h-16 mx-4 my-2 sm:my-0 py-2"
            />
          </div>
        </div>
      </section>

      <section class="bg-white " id="about-us">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
          <path
            fill="#000b76"
            fill-opacity="1"
            d="M0,224L48,208C96,192,192,160,288,149.3C384,139,480,149,576,149.3C672,149,768,139,864,144C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <div class="!pt-px py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Why CodeZone?
            </h2>
            <p class="mb-8 font-light text-gray-500 sm:text-xl ">
              Our mission is clear - to nurture talent from some of India's most
              esteemed universities, equipping them with the skills needed to
              thrive in the competitive world of coding, and securing coveted
              positions in tech giants like Google, Facebook, Walmart, and more.
            </p>
          </div>
          <div class="px-4 py-8 rounded-lg">
            <Timeline horizontal>
              <Timeline.Item data-aos="fade-right" data-aos-delay="100">
                <Timeline.Point icon={HiTemplate} />
                <Timeline.Content>
                  <Timeline.Title>Comprehensive Learning</Timeline.Title>

                  <Timeline.Body>
                    We offer a comprehensive curriculum that spans coding
                    languages, web development, data science, and beyond.
                    Whether you're a beginner taking your first coding steps or
                    a seasoned developer looking to advance your skills, we've
                    got you covered.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item data-aos="fade-right" data-aos-delay="250">
                <Timeline.Point icon={HiOutlineUsers} />
                <Timeline.Content>
                  <Timeline.Title>Experienced Faculty</Timeline.Title>

                  <Timeline.Body>
                    Our instructors aren't just educators; they're industry
                    experts with over a decade of experience. They bring
                    real-world knowledge and insider insights to the classroom.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item data-aos="fade-right" data-aos-delay="400">
                <Timeline.Point icon={HiOutlineHand} />
                <Timeline.Content>
                  <Timeline.Title>Hands-On Approach</Timeline.Title>

                  <Timeline.Body>
                    At Code Zone, we believe in learning by doing. Our
                    interactive, hands-on learning style ensures that you not
                    only understand the theory but also gain practical
                    experience.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item data-aos="fade-right" data-aos-delay="550">
                <Timeline.Point icon={HiOutlineLibrary} />
                <Timeline.Content>
                  <Timeline.Title>Placement Support</Timeline.Title>

                  <Timeline.Body>
                    Your journey with Code Zone doesn't end with certification.
                    We offer dedicated placement support to help you land your
                    dream job with a competitive package.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item data-aos="fade-right" data-aos-delay="700">
                <Timeline.Point icon={HiUserGroup} />
                <Timeline.Content>
                  <Timeline.Title>Community</Timeline.Title>

                  <Timeline.Body>
                    Join a thriving community of learners, connect with fellow
                    students and professionals worldwide, collaborate on
                    projects, and build lasting relationships.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </section>

      <section className="font-montserrat bg-gray-900 text-white" id="courses">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              What We Offer
            </h2>
            <p className="font-light text-gray-200 lg:mb-16 sm:text-xl">
              An in-depth course designed to get you job-ready and hired by top
              companies. This course will help you ace any interview, whether
              it's for a tech giant or a startup. Our course covers the
              following topics:
            </p>
          </div>
          <div className="container mx-auto px-4 my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded shadow-md md:w-full">
                <Card className="bg-indigo-200">
                  <StaticImage
                    src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                    alt="developer"
                    height={170}
                  />
                  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    <ListItem
                      icon={<FaCode className="w-6 h-6 text-blue-500" />}
                    >
                      Coding Languages
                    </ListItem>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Master the art of coding with our in-depth courses in
                    various programming languages.
                  </p>
                </Card>
              </div>

              <div className="p-4 rounded shadow-md md:w-full">
                <Card className="bg-indigo-200">
                  <StaticImage
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--AO0dFdQ5--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/srnvrd7vfeeq5qpxnabq.png"
                    alt="dsa"
                    height={170}
                  />
                  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    <ListItem
                      icon={<FaCube className="w-6 h-6 text-green-500" />}
                    >
                      Data Structures and Algorithms
                    </ListItem>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Build a strong foundation in the fundamental concepts of
                    Data Structures and Algorithms.
                  </p>
                </Card>
              </div>

              <div className="p-4 rounded shadow-md md:w-full">
                <Card className="bg-indigo-200">
                  <StaticImage
                    src="https://cdn-ajfbi.nitrocdn.com/GuYcnotRkcKfJXshTEEKnCZTOtUwxDnm/assets/images/optimized/rev-ec5e39c/bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15493/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3-1890x0.png"
                    alt="dbms"
                    height={170}
                  />
                  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    <ListItem
                      icon={<FaDatabase className="w-6 h-6 text-yellow-500" />}
                    >
                      Database Management Systems
                    </ListItem>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Learn the ins and outs of database management and SQL,
                    complete with queries frequently asked in interviews.
                  </p>
                </Card>
              </div>

              {/* Repeat the structure for the remaining grid elements */}

              {/* Fourth Grid Element */}
              <div className="p-4 rounded shadow-md md:w-full">
                <Card className="bg-indigo-200">
                  <StaticImage
                    src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2018/02/08190510/Generate-More-Revenue-Using-Project-Management-Software.jpg"
                    alt="hello"
                    height={170}
                  />
                  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    <ListItem icon={<FaCog className="w-6 h-6 text-red-500" />}>
                      Project Development
                    </ListItem>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Bring your coding skills to life with real-world projects.
                  </p>
                </Card>
              </div>

              {/* Fifth Grid Element */}
              <div className="p-4 rounded shadow-md md:w-full">
                <Card className="bg-indigo-200">
                  <StaticImage
                    src="https://www.usability.gov/sites/default/files/images/individual-interview-full.jpg"
                    alt="hello"
                    height={170}
                  />
                  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    <ListItem
                      icon={
                        <FaCommentAlt className="w-6 h-6 text-purple-500" />
                      }
                    >
                      Mock Interviews
                    </ListItem>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Prepare for interviews with realistic, interview-like
                    experiences.
                  </p>
                </Card>
              </div>

              {/* Sixth Grid Element */}
              <div className="p-4 rounded shadow-md md:w-full">
                <Card className="bg-indigo-200">
                  <StaticImage
                    src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                    alt="hello"
                    height={170}
                  />
                  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    <ListItem
                      icon={<FaPencilAlt className="w-6 h-6 text-indigo-500" />}
                    >
                      System Design
                    </ListItem>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Understand the intricacies of designing complex systems.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white !bg-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 160 1440 159">
          <path
            fill="#000b76"
            fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <section class="bg-[#000b76]">
          <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 class="mb-4 lg:mb-8 text-3xl font-extrabold tracking-tight leading-tight text-left text-white !text-white md:text-4xl">
              Our Faculty
            </h2>
            <p class="mb-8 lg:mb-12 text-white md:text-lg">
              At Code Zone, we go beyond standard teaching. We offer dedicated
              doubt-solving sessions and quiz contests to keep you at the top of
              your game and prepare you for the world's top coding competitions.
            </p>
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="w-full h-[250px] rounded-lg sm:rounded-none sm:rounded-l-lg object-cover"
                    src={psir}
                    alt="Prashant Sir"
                  />
                </a>
                <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Prashant Goel</p>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">
                    Senior Faculty - Code Zone
                  </span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    <ul class="list-disc pl-6">
                      <li class="text-indigo-600">Ex Oracle (SDE-1)</li>
                      <li class="text-indigo-600">Ex Narvar (SDE-2)</li>
                      <li class="text-indigo-600">Flipkart (SDE-3)</li>
                      <li class="text-indigo-600">7+ yrs of experience</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="w-full h-[250px] rounded-lg sm:rounded-none sm:rounded-l-lg object-cover"
                    src={prsir}
                    alt="Prabhat Sir"
                  />
                </a>
                <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Prabhat Goel</p>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">
                    Management Head - Code Zone
                  </span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    <ul class="list-disc pl-6">
                      <li class="text-indigo-600">Software Developer-1</li>
                      <li class="text-indigo-600">3+ yrs of experience</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000b76"
            fill-opacity="1"
            d="M0,256L40,229.3C80,203,160,149,240,128C320,107,400,117,480,133.3C560,149,640,171,720,176C800,181,880,171,960,170.7C1040,171,1120,181,1200,176C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>

        <div class="py-10 pt-0" id="contact-us">
          <div class="container mx-auto text-center">
            <h2 class="text-3xl font-semibold font-montserrat text-[#000b76] mb-4">
              Ready to embark on your coding journey?
            </h2>
            <p class="text-lg text-black font-montserrat mb-8">
              Join the Code Zone family today and let's turn your coding dreams
              into reality. Your coding adventure starts here!
            </p>
            <div className="flex justify-center">
              <JotForm />
            </div>
          </div>
        </div>
      </section>
      <Footer container>
        <Footer.Copyright by="Code Zone™" href="/" year={2023} />
        <Footer.LinkGroup>
          <Footer.Link href="#about-us">About</Footer.Link>
          <Footer.Link href="/terms-of-service">Terms of Service</Footer.Link>
          <Footer.Link href="mailto:codezone001@gmail.com">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Code Zone</title>;
