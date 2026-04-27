import React from "react";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// --monochrome-1: #ffffff;
// --monochrome-2: #f2f2f2;
// --monochrome-3: #c4c4c4;
// --monochrome-4: #1f1f1f;
// --monochrome-5: #151515;
// --monochrome-6: #040404;

const projectsInfo = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1763546181/Portfolio%20Website/nxt-watch-img.png",
    previewUrl: "https://fb-nxtwatch.netlify.app",
    projectName: "Nxt Watch",
    projectUrl: "https://github.com/fishbraised/nxt-watch",
    description:
      "Nxt Watch is a simple, YouTube-style web app where people can browse curated categories (Home, Trending, Gaming), open a video to see details and playback, sign in to access protected sections, and save favorite videos to a personal list — all presented with a familiar navbar/sidebar layout and small promotional banner.",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1763551140/Portfolio%20Website/cineverse-img.png",
    previewUrl: "https://fb-cineverse.netlify.app",
    projectName: "Cineverse Movie Reviews",
    projectUrl: "https://github.com/fishbraised/cineverse-movie-reviews",
    description:
      "Cineverse is a simple web app that pulls current movie info from The Movie Database and lets you browse a carousel of featured films, view trending movie cards, and save favorites to a personal watchlist stored in your browser; the watchlist can be searched, filtered by genre, sorted, and is remembered between visits.",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1764863280/Portfolio%20Website/jobby-app-img.png",
    previewUrl: "https://fb-jobby-app.netlify.app",
    projectName: "Jobby App",
    projectUrl: "https://github.com/fishbraised/jobby-app",
    description:
      "Jobby App is a React front-end for finding jobs: sign in, browse and filter listings, view job details and similar roles, and manage your profile—wrapped in a clean UI with a navbar and protected routes.",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1765365999/Portfolio%20Website/cart-app-img.png",
    previewUrl: "https://fb-cart-app.netlify.app/",
    projectName: "Cart App",
    projectUrl: "https://github.com/fishbraised/cart-app",
    description:
      "Cart App is a small React + Redux demo that lets a user browse products, add or remove items from a shopping cart, and see the cart’s contents and totals update in real time; UI pieces live in components and pages, and the shared product and cart state is managed centrally in store/, making it a simple prototype of how an e‑commerce cart works.",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1765365498/Portfolio%20Website/eco-tracker-img.png",
    previewUrl: "https://fb-eco-tracker.netlify.app/",
    projectName: "Eco Tracker",
    projectUrl: "https://github.com/fishbraised/eco-tracker",
    description:
      "Eco Tracker is a small, user-friendly web app that helps people monitor and improve their everyday environmental impact — letting you log simple eco-actions (like biking, recycling, or saving energy), see your progress over time, and form greener habits through clear feedback and visuals.",
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1765267613/Portfolio%20Website/rock-paper-scissors-img.png",
    previewUrl: "https://fb-markdown-editor.netlify.app/",
    projectName: "Rock Paper Scissors",
    projectUrl: "https://github.com/fishbraised/rock-paper-scissors",
    description:
      "This project is a small browser game that lets you play Rock–Paper–Scissors against the computer: pick rock, paper, or scissors on the screen, the app randomly chooses its move, shows simple visuals/feedback, and keeps track of wins and losses so you can play rounds and see who’s ahead.",
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1768656830/Portfolio%20Website/tic-tac-toe-game-img.png",
    previewUrl: "https://fb-markdown-editor.netlify.app/",
    projectName: "Tic Tac Toe Game",
    projectUrl: "https://github.com/fishbraised/tic-tac-toe-game",
    description:
      "This project is a small browser-based Tic-Tac-Toe app: it provides a clickable game board where two players take turns placing Xs and Os, enforces valid moves, detects wins or ties, and offers a way to restart the game — all implemented as a lightweight React front-end with styles and a simple app shell so you can run and play it locally.",
  },
];

const PortfolioPage = () => {
  const bannerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".banner-heading", {
        y: -75,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".banner-paragraph", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "back.out",
      });
    },
    { scope: bannerRef },
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header>
        <nav className="dark:bg-monochrome-4 bg-monochrome-1 fixed top-0 flex w-full items-center justify-between px-10 py-4">
          {/* Light Mode Logo*/}
          <img
            className="inline w-18 dark:hidden"
            src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1763213998/Portfolio%20Website/dark-website-logo.png"
            alt="website logo"
          />
          {/* Dark Mode Logo */}
          <img
            className="hidden w-18 dark:inline"
            src="
            
            https://res.cloudinary.com/dkoqbt4pc/image/upload/v1763213950/Portfolio%20Website/light-website-logo.png"
            alt="website logo"
          />

          <div>
            <a
              className="font-roboto border-monochrome-4 text-monochrome-4 dark:border-monochrome-3 dark:text-monochrome-3 mr-6 rounded-md border px-3 py-1 text-2xl font-light"
              href="#aboutSection"
            >
              About
            </a>
            <a
              className="font-roboto border-monochrome-4 text-monochrome-4 dark:border-monochrome-3 dark:text-monochrome-3 mr-6 rounded-md border px-3 py-1 text-2xl font-light"
              href="#projectsSection"
            >
              Projects
            </a>
          </div>
        </nav>

        <div className="bg-monochrome-1 dark:bg-monochrome-4 flex h-120 items-center justify-center pt-8">
          <div ref={bannerRef} className="flex flex-col text-center">
            <h1 className="banner-heading font-eb-garamond text-monochrome-4 dark:text-monochrome-3 mb-4 text-7xl font-medium">
              Hi, I'm Lewis.
            </h1>
            <p className="banner-paragraph font-roboto text-monochrome-4 dark:text-monochrome-3 text-xl">
              I design and build things.
            </p>
          </div>
        </div>
      </header>

      <main>
        {/* About Me Section */}
        <section
          id="aboutSection"
          className="bg-monochrome-2 dark:bg-monochrome-5 min-h-120 px-36 py-12"
        >
          <div className="mb-8 flex items-center gap-4">
            <hr className="border-monochrome-4 dark:border-monochrome-3 flex-1 border" />
            <h2 className="font-open-sans text-monochrome-4 dark:text-monochrome-3 text-4xl font-medium">
              About Me
            </h2>
            <hr className="border-monochrome-4 dark:border-monochrome-3 flex-1 border" />
          </div>

          <div className="flex">
            <div className="mr-24">
              <p className="text-monochrome-4 dark:text-monochrome-3 font-roboto mt-8 text-xl tracking-wider">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus assumenda, animi dolor error velit qui doloribus sunt
                architecto deleniti, quo facere exercitationem tempora nostrum
                iste numquam. Nulla reiciendis pariatur nobis placeat corrupti
                amet maxime tenetur vitae.
              </p>
              <p className="text-monochrome-4 dark:text-monochrome-3 font-roboto mt-8 text-xl tracking-wider">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea at
                saepe asperiores non quo minima cumque, sapiente numquam
                recusandae ab illum, rerum doloremque tempora accusantium
                aliquam quos magnam eveniet iure sed! At corrupti eum itaque id
                reiciendis explicabo voluptate facilis.
              </p>
              <p className="text-monochrome-4 dark:text-monochrome-3 font-roboto mt-8 text-xl tracking-wider">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam laborum, amet sapiente nam nostrum quas repellendus ad
                culpa totam aliquid? Commodi quo fugiat iure. Aliquid deleniti
                est, omnis in reiciendis optio quibusdam sint. Commodi itaque
                voluptate in ipsa aspernatur id voluptates expedita a, autem
                optio modi alias eaque, at pariatur incidunt perspiciatis quia
                atque recusandae totam non molestiae hic? In commodi quaerat
                quae necessitatibus dolores.
              </p>
            </div>

            <img
              className="aspect-square w-100 object-cover object-center"
              src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1763290464/Portfolio%20Website/cat-profile-picture.jpg"
              alt="self picture"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projectsSection"
          className="bg-monochrome-1 dark:bg-monochrome-4 min-h-120 px-36 py-12"
        >
          <div className="mb-8 flex items-center gap-4">
            <hr className="border-monochrome-4 dark:border-monochrome-3 flex-1 border" />
            <h2 className="font-open-sans text-monochrome-4 dark:text-monochrome-3 text-4xl font-medium">
              Projects
            </h2>
            <hr className="border-monochrome-4 dark:border-monochrome-3 flex-1 border" />
          </div>

          <ul className="flex flex-wrap justify-between">
            {projectsInfo.map((eachProject) => (
              <li className="mb-12 w-[30%]">
                <img
                  className="aspect-video w-[full] object-cover object-top"
                  src={eachProject.imageUrl}
                  alt="project picture"
                />

                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-open-sans text-monochrome-6 dark:text-monochrome-2 text-3xl font-medium">
                    {eachProject.projectName}
                  </h3>

                  <div className="flex items-center gap-x-4">
                    <a
                      className="font-open-sans text-3xl font-medium text-blue-700 dark:text-blue-400"
                      href={eachProject.previewUrl}
                    >
                      Preview
                    </a>

                    <a
                      className="font-open-sans text-3xl font-medium text-blue-700 dark:text-blue-400"
                      href={eachProject.projectUrl}
                    >
                      Project
                    </a>
                  </div>
                </div>

                <p className="text-monochrome-4 dark:text-monochrome-3 font-roboto mt-6 text-xl tracking-wider">
                  {eachProject.description}
                </p>

                {/* Note: Remember to run Map on this component. (Make it a component as
            well.) */}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="bg-monochrome-4 dark:bg-monochrome-6 min-h-70 px-8 py-12">
        <hr className="border-monochrome-1 flex-1 border-t" />
        <div className="flex justify-around">
          <p className="text-monochrome-2 dark:text-monochrome-3 font-roboto mt-8 w-[20%] text-xl tracking-wider">
            © 2025 Lewis
          </p>
          <p className="text-monochrome-2 dark:text-monochrome-3 font-roboto mt-8 w-[20%] text-xl tracking-wider">
            Built with React & TailwindCSS
          </p>
          <p className="text-monochrome-2 dark:text-monochrome-3 font-roboto mt-8 w-[25%] text-xl tracking-wider">
            A minimalist portfolio project to display Lewis' personal creations.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
