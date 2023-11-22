export default function BannerContact() {
  return (
    <section>
      <div className="flex flex-col 2xl:flex-row flex-wrap text-center items-center">
        <div className="w-4/5 mb-10 md:px-4 mx-auto">
          <h2 className="font-nadpis text-lg md:text-xl lg:text-3xl font-medium text-natyzlata md:mt-6 md:mb-3 md:px-24">
            Při úmrtí Vašeho blízkého a
            <br /> potřeby pomoci či podpory,
            <br /> nás kdykoliv kontaktujte.
          </h2>
        </div>
        <div className="w-4/5 flex flex-col justify-center align-middle items-center mx-auto">
          <h2 className="font-nadpis text-2xl md:text-4xl font-medium text-natyzlata mt-6 mb-3 md:px-24 flex items-center">
            <a
              href="tel:+420723192379"
              className="no-underline underline-offset-4 decoration-zlata decoration-2 inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.314 28.323"
                className="h-6 md:h-10 px-4 fill-zlata"
              >
                <path d="M27.728 20.384l-4.242-4.242a1.982 1.982 0 00-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 006.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 000 1.414l9.899 9.899a.999.999 0 001.414 0l3.535-3.536 4.243 4.244-4.242 4.242z"></path>
              </svg>
              723 192 379
            </a>
            <span className="pl-4 text-sm">nonstop</span>
          </h2>
          <h2 className="font-nadpis text-2xl md:text-4xl font-medium text-natyzlata mt-6 mb-3 md:px-24 flex items-center">
            <a
              href="tel:+420315726961"
              className="no-underline underline-offset-4 decoration-zlata decoration-2 inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 32 32"
                viewBox="0 0 32 32"
                className="h-6 md:h-10 px-4 fill-zlata"
              >
                <path d="M16 0C.449 0 0 5.387 0 6.001v6C0 13.103.897 14 2 14h6c1.103 0 2-.897 2-1.999V8h12v4.001c0 1.102.897 1.999 2 1.999h6c1.103 0 2-.897 2-1.999v-6C32 5.387 31.551 0 16 0zm14 12l-6 .001V7a1 1 0 00-1-1H9a1 1 0 00-1 1v5l-6 .001-.001-5.957C2.002 6.004 2.536 2 16 2c13.458 0 13.997 4.001 14 4.001V12zm-3 16c0 1.103-.897 2-2 2H7c-1.103 0-2-.897-2-2V16H3v12c0 2.206 1.794 4 4 4h18c2.206 0 4-1.794 4-4V16h-2v12z"></path>
                <path d="M23 21c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7 7-3.14 7-7zm-12 0c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"></path>
                <circle cx="16" cy="21" r="2"></circle>
              </svg>
              315 726 961
            </a>
            <span className="pl-4 text-sm">kancelář</span>
          </h2>
          {/* <h2 className="title-font text-2xl font-medium text-neutral-50 mt-6 mb-3 px-24">
              kancelář
              <br />
              <a href="tel:+420315726961">315 726 961</a>
            </h2> */}
        </div>
      </div>
    </section>
  );
}
