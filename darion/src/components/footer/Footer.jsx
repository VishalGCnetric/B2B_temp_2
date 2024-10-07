import React from 'react';
// import { Instagram, TikTok, Twitter, Facebook, Youtube, Pinterest } from 'lucide-react';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import navigationData from '../../json/NavigationData.json';

const FooterColumn = ({ title, items }) => (
  <div className="mb-8 md:mb-0">
    <h3 className="text-white font-bold mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.link} className="text-gray-400 hover:text-white transition-colors duration-200">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ name }) => {
  const IconComponent = {
    Instagram, TikTok, Twitter, Facebook, Youtube, Pinterest
  }[name];

  return (
    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
      <IconComponent size={20} />
    </a>
  );
};

export default function Footer() {
  const { columns, socialMedia, followTheFlock, bCorpLogo, countryFlags } = navigationData.footer;

  return (
    <footer className="bg-gray-900 text-white w-full h-auto py-12 -mb-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((column, index) => (
            <FooterColumn key={index} title={column.title} items={column.items} />
          ))}
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-white font-bold mb-4">{followTheFlock.title}</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              {followTheFlock.description}
            </p>
            {/* <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <SocialIcon key={index} name={social.name} />
              ))}
            </div> */}
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-2">
              {countryFlags.map(({ code, name }) => (
                <span key={code} className={`fi fi-${code}`} title={name} />
              ))}
            </div>
          </div>
         
        </div>
        <div className="mt-8 text-center text-gray-400 hover:text-white">
        <p>&copy; 2024 {navigationData.navbar.logo.text}, Inc. All Rights Reserved.</p>
      </div>
      </div>
    </footer>
  );
}