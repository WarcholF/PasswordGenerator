import { useState } from "react";

const Form = () => {
  let generatedPassword;
  let passwordSymbols = [];
  let length = [8, 16, 20, 24, 28, 32, 64, 128, 256, 512, 1024, 2048];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let symbols = [
    "`",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "{",
    "}",
    "]",
    ";",
    ":",
    '"',
    ",",
    "<",
    ".",
    ">",
    "?",
    "/",
  ];
  let lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [passwordChange, setPasswordChange] = useState("");
  const [checkedNumber, setCheckedNumber] = useState(8);
  const [checkedLower, setCheckedLower] = useState(false);
  const [checkedUpper, setCheckedUpper] = useState(false);
  const [checkedSymbols, setCheckedSymbols] = useState(false);

  const handleLower = () => setCheckedLower(!checkedLower);
  const handleUpper = () => setCheckedUpper(!checkedUpper);
  const handleSymbols = () => setCheckedSymbols(!checkedSymbols);

  const handleNumberChange = ({ target }) => {
    setCheckedNumber(target.value);
  };

  const generatePassword = () => {
    passwordSymbols = passwordSymbols.concat(numbers);

    if (checkedLower) {
      passwordSymbols = passwordSymbols.concat(lowerCase);
    }
    if (checkedUpper) {
      passwordSymbols = passwordSymbols.concat(upperCase);
    }
    if (checkedSymbols) {
      passwordSymbols = passwordSymbols.concat(symbols);
    }

    let password = "";
    for (let i = 0; i < checkedNumber; i++) {
      password +=
        passwordSymbols[Math.floor(Math.random() * passwordSymbols.length)];
    }
    passwordSymbols = [];
    setPasswordChange(password);
  };

  return (
    <div>
      <div class="flex justify-center">
        <div class="flex">
          <select
            id="numbers"
            class=" mx-2 my-2 w-18 bg-gray-50 text-gray-900 text-sm rounded-lg  block  p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white "
            onChange={handleNumberChange}
          >
            {length.map((length) => (
              <option value={length}>{length}</option>
            ))}
          </select>
          <label
            for="checked-checkbox"
            class="mt-5  text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Length
          </label>
        </div>
        <div class="flex mx-2 my-5">
          <input
            id="default-checkbox"
            type="checkbox"
            onClick={handleLower}
            value=""
            class="w-4 h-4  bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Include Lowercase
          </label>
        </div>
        <div class="flex mx-2 my-5">
          <input
            id="default-checkbox"
            type="checkbox"
            onClick={handleUpper}
            value=""
            class="w-4 h-4  bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Include Uppercase
          </label>
        </div>
        <div class="flex mx-2 my-5">
          <input
            id="default-checkbox"
            type="checkbox"
            onClick={handleSymbols}
            value=""
            class="w-4 h-4  bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Include Symbols
          </label>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          type="button"
          class="py-2.5 px-5 mx-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10    dark:bg-gray-700 dark:text-white  dark:hover:text-white"
          onClick={generatePassword}
        >
          Generate Password
        </button>
        <input
          type="text"
          id="first_name"
          class="w-96 py-2.5 px-5 mx-2 mb-2 font-medium bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={passwordChange}
        ></input>
        <button
          type="button"
          class="py-2.5 px-5 mx-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10    dark:bg-gray-200 dark:text-white  dark:hover:text-white"
          onClick={() => {
            navigator.clipboard.writeText(passwordChange);
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default Form;
