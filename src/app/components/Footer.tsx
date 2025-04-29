"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
  
   
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2025</span>
                <Link
                  href="www.github.com/kerlyn-lipa-perez"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                />{" "}
                Kerlyn Lipa.
      
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
