import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Custom component for social media icons
const SocialIcon = ({ Component }) => {
  return (
    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
      <Component className="text-black" />
    </div>
  );
};

// Footer link data
const footerLinks = [
  {
    title: "About Us",
    links: ["Our Shops", "Contact", "Artists", "Local Giving", "Press"]
  },
  {
    title: "Help",
    links: ["FAQs", "Pricing Plans", "Track", "Your Order", "My Account"]
  },
  {
    title: "Customer Services",
    links: ["FAQs", "Store Locator", "Returns", "Shipping Information", "Wholesale"]
  }
];

// Social media data
const socialMedia = [
  { name: "Facebook", url: "#", Component: FaFacebookF },
  { name: "Twitter", url: "#", Component: FaTwitter },
  { name: "Instagram", url: "#", Component: FaInstagram },
  { name: "LinkedIn", url: "#", Component: FaLinkedinIn }
];

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling animation
  });
};

const FooterLinkSection = ({ title, links }) => (
  <div>
    <h3 className="font-bold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Sign Up For Our Newsletter To Receive Notifications & Other Promotions
            </h2>
          </div>
          <div className="flex items-center">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Email address..."
                className="w-full bg-transparent border border-gray-700 rounded-full py-3 px-6 focus:outline-none focus:border-white"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 ">© <span className="logofont">SuPra</span>  zone</h2>
            <p className="text-gray-300 mb-4">
              Powered By<br />
              Universal Commerce
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a key={index} href={social.url} className="text-gray-300 hover:text-white">
                  <SocialIcon Component={social.Component} />
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((section, index) => (
            <FooterLinkSection key={index} title={section.title} links={section.links} />
          ))}
        </div>

        <div className="flex justify-between items-center border-t border-gray-700 pt-8">
          <p className="text-gray-300">Copyright © 2024. All Right Reserved</p>
          <div className="flex space-x-4">
            {socialMedia.map((social, index) => (
              <a key={index} href={social.url} className="text-gray-300 hover:text-white">
                <SocialIcon Component={social.Component} />
              </a>
            ))}
          </div>
          <button
            className="bg-black fixed bottom-10 right-6 text-white border-2 border-white p-2 rounded-full hover:bg-gray-200 hover:text-black transition-colors"
            onClick={handleScrollToTop}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
