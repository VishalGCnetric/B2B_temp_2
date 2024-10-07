import React from 'react';
import { Link } from 'react-router-dom';

const sharedClasses = {
  mainContainer: 'w-[80%] mx-auto flex flex-col items-start justify-start h-screen-1/2 p-4 ',
  textContainer: 'text-left',
  title: 'text-3xl font-bold mb-4',
  description: 'text-lg text-zinc-700 dark:text-zinc-300 mb-4',
  link: 'text-lg text-zinc-600 hover:underline'
};

const ThankYouPage = () => {
  return (
    <div className={sharedClasses.mainContainer}>
      <div className={sharedClasses.textContainer}>
        <h1 className={sharedClasses.title}>Thank you.</h1>
        <p className={sharedClasses.description}>
          Your order has been placed successfully. You will get the order confirmation email in a few minutes. You can check and track your order in Your Account.
        </p>
        <Link to="" className={sharedClasses.link}>
          Go to "My Account" <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
