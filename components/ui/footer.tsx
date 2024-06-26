"use client";
import Link from "next/link";
import Logo from "./logo";
import { FormEvent, useRef, useState } from "react";
import { encodeURL } from "@/utils";

const productsLinks = [
  {
    legend: "Chatbot Development",
    path: "#chatbots-dev",
  },
  {
    legend: "Consulting",
    path: "/contact",
  },
];

const resourceLinks = [
  {
    legend: "FAQs",
    path: "/faqs",
  },
];

const companyLinks = [
  {
    legend: "Home",
    path: "/",
  },
  {
    legend: "How we work",
    path: "/process",
  },
];

export default function Footer() {
  const [isSubmited, setIsSubmited] = useState(false);
  const inputRef = useRef(null);

  const openChatbot = () => {
    //@ts-ignore
    window.botpressWebChat.sendEvent({ type: "toggle" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeURL({
        "form-name": "newsletter",
        //@ts-ignore
        newsletter: inputRef.current.value,
      }),
    })
      .then(() => {
        setIsSubmited(true);
      })
      .catch(() => {
        alert("Upps... Something wrong happens, please try again later");
      });
  };

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2 text-sm">
              <Logo small />
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              {productsLinks.map((item, index) => (
                <LinkeableItem key={index} {...item} />
              ))}
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <span
                  className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
                  onClick={openChatbot}
                >
                  Try our Chatbot
                </span>
              </li>
              {/* {resourceLinks.map((item, index) => (
                <LinkeableItem key={index} {...item} />
              ))} */}
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              {companyLinks.map((item, index) => (
                <LinkeableItem key={index} {...item} />
              ))}
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            {isSubmited ? (
              <p
                className="mt-2 text-green-600 text-sm"
                data-aos="fade-out"
                data-aos-delay="150"
              >
                Thanks for subscribing!
              </p>
            ) : (
              <>
                <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest news and articles to your inbox every month.
                </p>
                <form name="newsletter" onSubmit={(e) => handleSubmit(e)}>
                  <input type="hidden" name="form-name" value="newsletter" />
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full">
                      <label
                        className="block text-sm sr-only"
                        htmlFor="newsletter"
                      >
                        Email
                      </label>
                      <div className="relative flex items-center max-w-xs">
                        <input
                          ref={inputRef}
                          id="newsletter"
                          name="newsletter"
                          type="email"
                          className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                          placeholder="Your email"
                          required={true}
                        />
                        <button
                          type="submit"
                          className="absolute inset-0 left-auto"
                          aria-label="Subscribe"
                        >
                          <span
                            className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                            aria-hidden="true"
                          ></span>
                          <svg
                            className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 border-t border-gray-200">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://twitter.com/SiliconMindAI"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; SiliconMind AI 2024 - All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

interface linkeableItemProps {
  legend: string;
  path: string;
}
function LinkeableItem({ legend, path }: linkeableItemProps) {
  return (
    <li className="mb-2">
      <Link
        href={path}
        className="cursor-pointer text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
      >
        {legend}
      </Link>
    </li>
  );
}
