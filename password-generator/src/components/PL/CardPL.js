const CardPL = () => {
  return (
    <div className="flex space-x-10 justify-center mt-20 mb-10 pb-10 bg-gray-300">
      <div className="block max-w-sm p-6 rounded-lg shadow bg-gray-500">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">
          Czy wiedziałeś że?
        </h5>
        <p class="font-normal text-gray-200 text-center">
          Czas potrzebny żeby złamac 12-znakowe hasło z przynajmniej jedną dużą
          literą + cyfrą + symbolem to 34,000 lat -{" "}
          <span className="underline">
            <a
              class=""
              href="https://ocdn.eu/pulscms-transforms/1/Aegk9kuTURBXy84YjAxYWFmZC1jODRhLTRmMmYtYThhZi0zNmU3YWFlMjEwYjEuanBlZ5KVAs0DFADCw5UCAM0C-MLD3gABoTAF"
            >
              Ciekawy graf
            </a>
          </span>
        </p>
      </div>
      <div className="block max-w-sm p-6 rounded-lg shadow bg-gray-500">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">
          Jeśli zdecydujemy się na 8
        </h5>
        <p class="font-normal text-gray-200 text-center">
          Ośmio znakowe hasło mające duże litery, małe litery i cyfry ma
          218 340 105 584 896 możliwości
        </p>
      </div>
      <div className="block max-w-sm p-6 rounded-lg shadow bg-gray-500">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">
          Ciekawostka
        </h5>
        <p class="font-normal text-gray-200 text-center">
          <span className="underline">
            <a href="https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10-million-password-list-top-10000.txt">
              Strona GitHub dla projektu OWASP's SecLists
            </a>
          </span>{" "}
          podaje, że pięc najpopularniejszych haseł na świecie to: '123456',
          'Password', '12345678', 'qwerty' oraz '123456789'
        </p>
      </div>
    </div>
  );
};

export default CardPL;
