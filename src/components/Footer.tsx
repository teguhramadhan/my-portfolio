import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-darkText py-8 text-center text-sm border-t border-slate-700">
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Teguh Ramadhan. All rights reserved.
        </p>
        <p className="mt-2 text-xs">
          Designed & Developed with ❤️ using Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
