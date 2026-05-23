import React, { useEffect, useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Blogs from "./pages/Blogs.jsx";
import BuildingPublic from "./pages/BuildingPublic.jsx";
import Contact from "./pages/Contact.jsx";
import FamilyTravel from "./pages/FamilyTravel.jsx";
import FreedomWealth from "./pages/FreedomWealth.jsx";
import Home from "./pages/Home.jsx";
import HomeLifestyle from "./pages/HomeLifestyle.jsx";
import Journey from "./pages/Journey.jsx";
import OurStory from "./pages/OurStory.jsx";
import SpiritualConscious from "./pages/SpiritualConscious.jsx";
import StartHere from "./pages/StartHere.jsx";

const routes = {
  "/": Home,
  "/our-story": OurStory,
  "/journey": Journey,
  "/blogs": Blogs,
  "/start-here": StartHere,
  "/contact": Contact,
  "/family-travel": FamilyTravel,
  "/freedom-wealth": FreedomWealth,
  "/home-lifestyle": HomeLifestyle,
  "/building-public": BuildingPublic,
  "/spiritual-conscious": SpiritualConscious,
  "/spiritual-conscious/mindset": SpiritualConscious,
  "/spiritual-conscious/qhht": SpiritualConscious,
  "/spiritual-conscious/sovereignty": SpiritualConscious
};

function getRoute() {
  const hash = window.location.hash.replace("#", "") || "/";
  const path = hash.split(/[?#]/)[0];
  return routes[path] ? path : "/";
}

function getTargetSection() {
  const hash = window.location.hash.replace("#", "") || "/";
  const query = hash.split("?")[1]?.split("#")[0] || "";
  const sectionFromQuery = new URLSearchParams(query).get("section");
  const sectionFromHash = hash.split("#")[1];
  return sectionFromQuery || sectionFromHash || "";
}

function scrollToTargetSection() {
  const targetSection = getTargetSection();

  if (!targetSection) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  window.setTimeout(() => {
    const target = document.getElementById(targetSection);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 80);
}

export default function App() {
  const [route, setRoute] = useState(getRoute);
  const Page = routes[route];

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      scrollToTargetSection();
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    scrollToTargetSection();
  }, [route]);

  return (
    <div className="min-h-screen bg-mist">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}
