const FooterEng = () => {
  return (
    <footer class="fixed h-16 bottom-0 w-full p-4 bg-gray-500 shadow md:px-6 md:py-4 ">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex items-center mb-4 sm:mb-0">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Password Generator
          </span>
        </div>
        <ul class="flex flex-wrap items-center mb-4 text-sm text-white sm:mb-0 dark:text-white">
          <li>
            <a
              href="https://github.com/WarcholF"
              class="mr-4 hover:underline md:mr-6 "
            >
              My GitHub profile
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterEng;
