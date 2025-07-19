import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Header";
import SortingVisualizer from "./Virsulization";
import { Helmet } from "react-helmet";

const Home = () => {
  const pageTitle =
    "Algorithms Simulator - Interactive Sorting & Data Structure Learning Tool";
  const pageDescription =
    "Learn sorting algorithms visually with our interactive algorithms simulator. Explore bubble sort, merge sort, quick sort, and more with step-by-step animations. Perfect for students and developers.";
  const keywords =
    "algorithms simulator, sorting algorithms, data structures, bubble sort, merge sort, quick sort, interactive learning, computer science, programming tutorial, algorithm animation, educational tool";

  return (
    // Time Completity
    // Some Content abot algorith
    <>
      {/* SEO Helmet Configuration */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Algorithms Simulator Team" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.com/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://yoursite.com/algorithms-simulator-preview.jpg"
        />
        <meta property="og:site_name" content="Algorithms Simulator" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yoursite.com/" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta
          property="twitter:image"
          content="https://yoursite.com/algorithms-simulator-preview.jpg"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yoursite.com/" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Algorithms Simulator",
            description: pageDescription,
            url: "https://yoursite.com",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Organization",
              name: "Algorithms Simulator Team",
            },
            keywords: keywords.split(", "),
          })}
        </script>
      </Helmet>

      <div className=" w-full min-h-screen  flex flex-col justify-center max-md:overflow-x-hidden items-center">
        <Navbar />
        <div className="w-full max-w-4xl px-6 py-8 max-sm:px-0 ">
          <SortingVisualizer />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
