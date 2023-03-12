import { useState } from "react";

const FormPL = () => {
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
  const [includeNumber, setIncludeNumber] = useState(false);
  const [checkedLower, setCheckedLower] = useState(false);
  const [checkedUpper, setCheckedUpper] = useState(false);
  const [checkedSymbols, setCheckedSymbols] = useState(false);

  const handleNumber = () => {
    setIncludeNumber(!includeNumber);
  };
  const handleLower = () => setCheckedLower(!checkedLower);
  const handleUpper = () => setCheckedUpper(!checkedUpper);
  const handleSymbols = () => setCheckedSymbols(!checkedSymbols);

  const handleNumberChange = ({ target }) => {
    setCheckedNumber(target.value);
  };

  const generatePassword = () => {
    if (includeNumber) {
      passwordSymbols = passwordSymbols.concat(numbers);
    }
    if (checkedLower) {
      passwordSymbols = passwordSymbols.concat(lowerCase);
    }
    if (checkedUpper) {
      passwordSymbols = passwordSymbols.concat(upperCase);
    }
    if (checkedSymbols) {
      passwordSymbols = passwordSymbols.concat(symbols);
    }
    if (!includeNumber & !checkedLower & !checkedUpper & !checkedSymbols) {
      alert("Musisz wybrać co najmniej jeden parametr!");
      return false;
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
      <div class="flex justify-center max-md:grid">
        <div class="flex max-md:justify-center">
          <label
            for="checked-checkbox"
            class="mt-5  text-sm font-medium text-gray-700 dark:text-gray-700"
          >
            Długość
          </label>
          <select
            id="numbers"
            class=" mx-2 my-2 w-18 bg-gray-500 text-gray-900 text-sm rounded-lg  block  p-2.5 dark:bg-gray-500 dark:border-gray-600  dark:text-white "
            onChange={handleNumberChange}
          >
            {length.map((length) => (
              <option value={length}>{length}</option>
            ))}
          </select>
        </div>
        <div class="flex justify-center max-md:grid max-md:grid-cols-2">
          <div class="flex mx-2 my-5">
            <label
              for="checked-checkbox"
              class="mx-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Cyfry
            </label>
            <input
              id="number-select"
              type="checkbox"
              onClick={handleNumber}
              value=""
              class="w-4 h-5  bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            ></input>
          </div>
          <div class="flex mx-2 my-5">
            <label
              for="checked-checkbox"
              class="mx-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Małe litery
            </label>
            <input
              id="default-checkbox"
              type="checkbox"
              onClick={handleLower}
              value=""
              class="w-4 h-5  bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            ></input>
          </div>
          <div class="flex mx-2 my-5">
            <label
              for="checked-checkbox"
              class="mx-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Duże litery
            </label>
            <input
              id="default-checkbox"
              type="checkbox"
              onClick={handleUpper}
              value=""
              class="w-4 h-5  bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            ></input>
          </div>
          <div class="flex mx-2 my-5">
            <label
              for="checked-checkbox"
              class="mx-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Symbole
            </label>
            <input
              id="default-checkbox"
              type="checkbox"
              onClick={handleSymbols}
              value=""
              class="w-4 h-5  bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            ></input>
          </div>
        </div>
      </div>
      <div class="flex justify-center max-sm:grid bg-gray-300">
        <button
          type="button"
          class="py-2.5 px-5 mx-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-500 rounded-lg focus:z-10  dark:bg-gray-500 dark:text-white  dark:hover:text-white"
          onClick={generatePassword}
        >
          Wygeneruj hasło
        </button>
        <input
          type="text"
          id="first_name"
          class="w-96 max-md:w-48 py-2.5 px-5 mx-2 mb-2 font-medium bg-gray-500 text-sm rounded-lg  p-2.5 dark:bg-gray-500  dark:text-white "
          value={passwordChange}
        ></input>
        <button
          type="button"
          class="py-2.5 px-5 mx-2 mb-2 max-sm:mb-0 text-sm font-medium  text-white focus:outline-none bg-gray-500 rounded-lg focus:z-10 dark:bg-gray-500 dark:text-white dark:hover:text-white"
          onClick={() => {
            navigator.clipboard.writeText(passwordChange);
          }}
        >
          Kopiuj
        </button>
      </div>
    </div>
  );
};

export default FormPL;
