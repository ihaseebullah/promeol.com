"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Loader } from "./loader";
import { useLoading } from "@/context/uicontext";

export default function Header() {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const { loading, setLoading } = useLoading();
  const [productsDropdownTimeout, setProductsDropdownTimeout] =
    useState<NodeJS.Timeout | null>(null);
  const [companyDropdownTimeout, setCompanyDropdownTimeout] =
    useState<NodeJS.Timeout | null>(null);
  const [resourcesDropdownTimeout, setResourcesDropdownTimeout] =
    useState<NodeJS.Timeout | null>(null);
  const [getInvolvedDropdownTimeout, setGetInvolvedDropdownTimeout] =
    useState<NodeJS.Timeout | null>(null);

  const handleProductsMouseEnter = () => {
    if (productsDropdownTimeout) {
      clearTimeout(productsDropdownTimeout);
    }
    setShowProductsDropdown(true);
  };

  const handleProductsMouseLeave = () => {
    setProductsDropdownTimeout(
      setTimeout(() => {
        setShowProductsDropdown(false);
      }, 100)
    );
  };

  const handleCompanyMouseEnter = () => {
    if (companyDropdownTimeout) {
      clearTimeout(companyDropdownTimeout);
    }
    setShowCompanyDropdown(true);
  };

  const handleCompanyMouseLeave = () => {
    setCompanyDropdownTimeout(
      setTimeout(() => {
        setShowCompanyDropdown(false);
      }, 100)
    );
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesDropdownTimeout) {
      clearTimeout(resourcesDropdownTimeout);
    }
    setShowResourcesDropdown(true);
  };

  const handleResourcesMouseLeave = () => {
    setResourcesDropdownTimeout(
      setTimeout(() => {
        setShowResourcesDropdown(false);
      }, 100)
    );
  };

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      {loading && <Loader />}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo footer={false} />
          </div>
          {/* Desktop sign in links */}
          <ul className="hidden md:flex flex-1 items-center justify-end gap-1">
            {/* Our Products Dropdown */}
            <li
              className="relative group hover:text-indigo-500"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <Link
                onClick={() => setLoading(true)}
                href="/products"
                className="btn-sm relative z-10"
              >
                <FontAwesomeIcon icon={faLaptop} className="fa-fw mx-1" />
                Our Products
              </Link>
              {showProductsDropdown && (
                <div>
                  <div
                    className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
                    aria-hidden="true"
                  >
                    <Image
                      className="max-w-none"
                      src={FooterIllustration}
                      width={1076}
                      height={378}
                      alt="Footer illustration"
                    />
                  </div>
                  <ul
                    className={`my-3 absolute left-0 top-10 mt-2 w-40 bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm  rounded-md shadow-lg animation-dropdown ${
                      showProductsDropdown ? "show" : "hide"
                    }`}
                    style={{ borderRadius: 10, minWidth: 245 }}
                  >
                    <li className="dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                      <Link
                        onClick={() => setLoading(true)}
                        href="/products/pb365"
                        className="relative z-10"
                      >
                        <FontAwesomeIcon
                          icon={Icons.faCaretRight}
                          className="fa-fw mr-1 hover:text-indigo-500"
                        />
                        Promeol Business 365
                      </Link>
                      <span className="expanding-line"></span>
                    </li>

                    <li className=" dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                      <Link
                        onClick={() => setLoading(true)}
                        href="/products/lms"
                      >
                        <FontAwesomeIcon
                          icon={Icons.faCaretRight}
                          className="fa-fw mr-1 hover:text-indigo-500"
                        />
                        Learning Managment System
                      </Link>
                      <span className="expanding-line"></span>
                    </li>
                    <li className=" dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                      <Link
                        onClick={() => setLoading(true)}
                        href="/products/property_go"
                      >
                        <FontAwesomeIcon
                          icon={Icons.faCaretRight}
                          className="fa-fw mr-1 hover:text-indigo-500"
                        />
                        Property Go
                      </Link>
                      <span className="expanding-line"></span>
                    </li>
                    <li className="dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                      <Link
                        onClick={() => setLoading(true)}
                        href="/products/aeroestate"
                      >
                        <FontAwesomeIcon
                          icon={Icons.faCaretRight}
                          className="fa-fw mr-1 hover:text-indigo-500"
                        />
                        AeroEstate (Dev)
                      </Link>
                      <span className="expanding-line"></span>
                    </li>
                    <li className=" dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                      <Link
                        onClick={() => setLoading(true)}
                        href="/products/menu_khwaga"
                      >
                        <FontAwesomeIcon
                          icon={Icons.faCaretRight}
                          className="fa-fw mr-1 hover:text-indigo-500"
                        />
                        Menu Khwaga (Dev)
                      </Link>
                      <span className="expanding-line"></span>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Company Dropdown */}
            <li
              className="relative group hover:text-indigo-500"
              onMouseEnter={handleCompanyMouseEnter}
              onMouseLeave={handleCompanyMouseLeave}
            >
              <Link
                onClick={() => setLoading(true)}
                href="/company"
                className="btn-sm relative z-10"
              >
                <Image
                  src={require("@/public/images/ico.svg")}
                  width={20}
                  height={20}
                  className="mr-1"
                  alt="Footer illustration"
                />
                Company
              </Link>
              {showCompanyDropdown && (
                <ul
                  className={`absolute left-0 top-10 mt-2 w-40 bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm  rounded-md shadow-lg animation-dropdown ${
                    showCompanyDropdown ? "show" : "hide"
                  }`}
                  style={{ borderRadius: 10, minWidth: 235 }}
                >
                  <li className=" dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                    <FontAwesomeIcon
                      icon={Icons.faCaretRight}
                      className="fa-fw mr-1 hover:text-indigo-500"
                    />
                    <Link
                      onClick={() => setLoading(true)}
                      href="/products/category2"
                    >
                      Blog
                    </Link>
                    <span className="expanding-line"></span>
                  </li>
                  <li className=" dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                    <FontAwesomeIcon
                      icon={Icons.faCaretRight}
                      className="fa-fw mr-1 hover:text-indigo-500"
                    />
                    <Link
                      onClick={() => setLoading(true)}
                      href="/products/category2"
                    >
                      Careers
                    </Link>
                    <span className="expanding-line"></span>
                  </li>
                  <li className=" dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                    <FontAwesomeIcon
                      icon={Icons.faCaretRight}
                      className="fa-fw mr-1 hover:text-indigo-500"
                    />
                    <Link
                      onClick={() => setLoading(true)}
                      href="/products/category2"
                    >
                      Our Team
                    </Link>
                    <span className="expanding-line"></span>
                  </li>
                  <li className=" dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                    <FontAwesomeIcon
                      icon={Icons.faCaretRight}
                      className="fa-fw mr-1 hover:text-indigo-500"
                    />
                    <Link
                      onClick={() => setLoading(true)}
                      href="/products/category1"
                    >
                      About Us
                    </Link>
                    <span className="expanding-line"></span>
                  </li>
                  <li className=" dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                    <FontAwesomeIcon
                      icon={Icons.faCaretRight}
                      className="fa-fw mr-1 hover:text-indigo-500"
                    />
                    <Link
                      onClick={() => setLoading(true)}
                      href="/products/category2"
                    >
                      Diversity & Inclusion
                    </Link>
                    <span className="expanding-line"></span>
                  </li>
                </ul>
              )}
            </li>

            {/* Resources Dropdown */}
            <li
              className="relative group hover:text-indigo-500"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <Link
                onClick={() => setLoading(true)}
                href="/resources"
                className="btn-sm relative z-10"
              >
                <FontAwesomeIcon
                  icon={faClipboard}
                  className="fa-fw mx-1 hover:text-indigo-500"
                />
                Resources
              </Link>
              {showResourcesDropdown && (
                <ul
                  className={`absolute left-0 top-10 mt-2 w-40 bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm  rounded-md shadow-lg animation-dropdown ${
                    showResourcesDropdown ? "show" : "hide"
                  }`}
                  style={{ borderRadius: 10, minWidth: 224 }}
                >
                  <li className=" dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                    <FontAwesomeIcon
                      icon={Icons.faCaretRight}
                      className="fa-fw mr-1 hover:text-indigo-500"
                    />
                    <Link
                      onClick={() => setLoading(true)}
                      href="/products/category1"
                    >
                      Community
                    </Link>
                    <span className="expanding-line"></span>
                  </li>
                  <li className=" dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                    <FontAwesomeIcon
                      icon={Icons.faCaretRight}
                      className="fa-fw mr-1 hover:text-indigo-500"
                    />
                    <Link
                      onClick={() => setLoading(true)}
                      href="/products/category2"
                    >
                      Terms of services
                    </Link>
                    <span className="expanding-line"></span>
                  </li>
                  <li className=" dropdown-item py-1 text-sm font-sm text-indigo-200/65  hover:text-indigo-500 relative group">
                    <FontAwesomeIcon
                      icon={Icons.faCaretRight}
                      className="fa-fw mr-1 hover:text-indigo-500"
                    />
                    <Link
                      onClick={() => setLoading(true)}
                      href="/products/category2"
                    >
                      Report a vulnerability
                    </Link>
                    <span className="expanding-line"></span>
                  </li>
                </ul>
              )}
            </li>

            {/* Get Involved Dropdown */}
            <li className="relative group hover:text-indigo-500">
              <div data-aos="fade-down" data-aos-delay={400}>
                <Link onClick={() => setLoading(true)} href="/signup">
                  <div className="btn group mb-2 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto">
                    <span className="relative inline-flex items-center">
                      Become a partner
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Add the animation styles */}
      <style jsx>{`
        @keyframes drop {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animation-dropdown {
          animation: drop 0.3s ease forwards;
          opacity: 1; /* Ensure opacity is set to 1 during animation */
        }

        .hide {
          display: none; /* Hide the element */
        }

        .show {
          display: block; /* Show the element */
        }

        /* Styles for dropdown list items */
        .dropdown-item {
          position: relative; /* Necessary for absolute positioning of the span */
        }

        .expanding-line {
          position: absolute; /* Position relative to the list item */
          bottom: 0; /* Position at the bottom of the list item */
          left: 0%; /* Center it horizontally */
          width: 0%; /* Start with width 0 */
          height: 0.5px !important; /* Adjust height as needed */
          background-color: currentColor; /* Match text color */
          transform: translateX(0%); /* Adjust to center */
          transition: width 0.4s ease-in-out; /* Smooth transition */
        }

        /* Expand only on hover of dropdown items */
        .dropdown-item:hover .expanding-line {
          width: 100%; /* Expand to full width on hover */
        }
      `}</style>
    </header>
  );
}
