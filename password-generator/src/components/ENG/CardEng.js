const CardEng = () => {
  return (
    <div className="flex justify-center mt-20 mb-10 pb-10 bg-gray-300 max-md:mt-10 max-md:grid max-md:grid-colss-1 max-md:gap-y-4 md:space-x-10">
      <div className="block max-w-sm p-6 rounded-lg shadow bg-gray-500">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">
          Did u know?
        </h5>
        <p class="font-normal text-gray-200 text-center">
          The time needed to break 12-character password with at least one
          uppercase letter + number + symbol is 34,000 years -{" "}
          <span className="underline">
            <a
              class=""
              href="https://ocdn.eu/pulscms-transforms/1/Aegk9kuTURBXy84YjAxYWFmZC1jODRhLTRmMmYtYThhZi0zNmU3YWFlMjEwYjEuanBlZ5KVAs0DFADCw5UCAM0C-MLD3gABoTAF"
            >
              Fun graph
            </a>
          </span>
        </p>
      </div>
      <div className="block max-w-sm p-6 rounded-lg shadow bg-gray-500">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">
          If we make it 8
        </h5>
        <p class="font-normal text-gray-200 text-center">
          An eight-character password using upercases, lowercases and numbers
          has 218 340 105 584 896 possibilities
        </p>
      </div>
      <div className="block max-w-sm p-6 rounded-lg shadow bg-gray-500">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">
          Fun fact
        </h5>
        <p class="font-normal text-gray-200 text-center">
          A{" "}
          <span className="underline">
            <a href="https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10-million-password-list-top-10000.txt">
              GitHub page for OWASP's SecLists project
            </a>
          </span>{" "}
          shows the top five most popular passwords across the globe are:
          '123456', 'Password', '12345678', 'qwerty' and '123456789'
        </p>
      </div>
    </div>
  );
};

export default CardEng;
