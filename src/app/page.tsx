'use client';

import Link from "next/link";
import React from "react";
import "../stylesheets/home.scss";

const HomePage = () => {
  return (
    <div>
      <h1>Just Beat Hit</h1>
      <Link href="/karakaku" className="start-button">Karakaku</Link>
    </div>
  );
};

export default HomePage;