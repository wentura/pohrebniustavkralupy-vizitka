export default function SmallHero({ title }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col  mt-[-80px]">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="font-nadpis sm:text-5xl text-3xl mb-2  mt-8 font-medium text-natyzlata first-letter:capitalize">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
