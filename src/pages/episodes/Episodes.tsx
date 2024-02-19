export default function Episodes() {
  return (
    <div className="h-full bg-zinc-600">
      <div className="relative w-full h-72">
        <img
          className="h-full w-full object-cover opacity-75"
          src="../../../public/images/rick_morty_img_all_episodes.png"
          alt=""
        />
        <div className="absolute bottom-0 px-12 py-8">
          <h1 className="font-primary uppercase text-2xl font-bold opacity-100 border-b-2  border-cyanLight">
            All Episodes
          </h1>
        </div>
      </div>
      <div className="mt-10 px-12 py-5">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 md:grid-rows-2 md:justify-items-center">
          <div className="relative w-[368px] h-[180px] border-2 border-cyanLight rounded flex items-center justify-center">
            <img
              src="../../../public/images/rick_img_test.png"
              alt=""
              className="object-cover w-full h-full"
            />
            <div className="absolute bg-cyanBackground bg-opacity-50 w-full h-full flex justify-between items-end p-3">
              <div className="flex flex-col font-primary">
                <h2 className="font-bold text-2xl">S01E01</h2>
                <p className="font-semibold text-base">The Ricklantis Mixup</p>
                <p className="font-medium text-xs">
                  Release: September 10, 2017
                </p>
              </div>
              <div>
                <button className="bg-cyanLight max-w-28 px-4 py-1 rounded-lg border-2 border-cyanDark  hover:bg-cyanDark hover:border-cyanLight">
                  <span className="font-primary font-bold text-sm">
                    See more
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
