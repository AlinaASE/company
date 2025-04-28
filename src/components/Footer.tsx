import React from "react";
import SmartButton from "@/components/SmartButton";
import { ServicesLink, SocialLink } from "@/utils";
import FooterLinks from "./FooterLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#4A4B4F] to-[#000000] py-10 px-[4%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1  gap-8  md:grid-cols-2 lg:grid-cols-[400px_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-[2rem] flex items-center">
            <span className="text-[2.5rem] text-orange">♔</span>
            Check<span>mate</span>
          </Link>
          <p>
            We are a team of passionate developers and designers committed to
            delivering high-quality software solutions that drive business
            growth and innovation.
          </p>
          <div className="flex space-x-4 mt-4">
            {SocialLink.map((link) => (
              <div
                className="ring-1 ring-orange bg-black rounded-full w-10 h-10 flex items-center justify-center"
                key={link.name}
              >
                <SmartButton
                  as="a"
                  href={link.url}
                  target="_blank"
                  className="text-orange"
                  label={link.name}
                >
                  {link.icon}
                </SmartButton>
              </div>
            ))}
          </div>
        </div>
        <div>
          <FooterLinks data={ServicesLink} />
        </div>
        <div>
          <FooterLinks data={ServicesLink} />
        </div>
        <div>
          <FooterLinks data={ServicesLink} />
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Checkmate. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <SmartButton as="a" href="#" label="Privacy Policy" />
          <SmartButton as="a" href="#" label="Terms of Service" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
