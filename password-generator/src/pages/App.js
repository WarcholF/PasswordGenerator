import { useState } from "react";
import CardEng from "../components/ENG/CardEng";
import CardPL from "../components/PL/CardPL";
import FooterEng from "../components/ENG/FooterEng";
import FormEng from "../components/ENG/FormEng";
import HeadingEng from "../components/ENG/HeadingEng";
import FooterPL from "../components/PL/FooterPL";
import FormPL from "../components/PL/FormPL";
import HeadingPL from "../components/PL/HeadingPL";

const MainContent = () => {
  const [languageChange, setLanguageChange] = useState("true");

  const handleLanguageChange = () => setLanguageChange(!languageChange);
  return (
    <div className="h-screen flex flex-col bg-gray-300">
      <div class="flex justify-between">
        <label class="mt-2 mx-2 relative inline-flex items-center cursor-pointer">
          <div>
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              onChange={handleLanguageChange}
            ></input>
            <div class="w-11 h-6 peer-focus:outline-none rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-gray-500"></div>
          </div>
          {languageChange ? (
            <span class="ml-3 text-base font-medium text-gray-900 dark:text-gray-900">
              ENG
            </span>
          ) : (
            <span class="ml-3 text-base font-medium text-gray-900 dark:text-gray-900">
              PL
            </span>
          )}
        </label>
        {/* <button
          id="theme-toggle"
          type="button"
          class="text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-5"
        ></button> */}
      </div>
      {languageChange ? (
        <div>
          <div>
            <HeadingEng />
            <FormEng />
            <CardEng />
          </div>
          <FooterEng />
        </div>
      ) : (
        <div>
          <HeadingPL />
          <FormPL />
          <CardPL />
          <FooterPL />
        </div>
      )}
    </div>
  );
};

export default function App() {
  return <MainContent />;
}
