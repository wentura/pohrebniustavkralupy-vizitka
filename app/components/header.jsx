import Menu from "./menu";

export default function Header({ klas }) {
  klas ? klas : "";

  return (
    <header
      className={`container flex flex-wrap flex-col md:flex-row mx-auto items-center header justify-between p-4 top-0 sticky {klas} bg-white/20`}
    >
      <a className="" href="/">
        <span className="ml-3 text-xl">Tailblocks</span>
      </a>
      {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav> */}

      <Menu klas="min-w-[300px] items-center hidden md:flex" />
      {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Button
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button> */}
    </header>
  );
}
