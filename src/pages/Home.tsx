export default function Home() {
  return (
    <div className="relative h-screen bg-cover bg-[url('../../public/images/rick_morty_bg_img.png')]">
      <div className="absolute bg-black bg-opacity-75 w-full h-full px-12">
        <div className="mt-20 flex flex-col items-center space-y-8 md:items-start">
          <img src="../../public/images/logo.png" alt="" className="max-w-72" />
          <h1 className="font-primary uppercase text-2xl font-bold border-b-2 border-cyanLight">
            Lasts Episodes
          </h1>

          <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 md:justify-items-center">
            <div className="relative w-[368px] h-[180px] border-2 border-cyanLight rounded flex items-center justify-center">
              <img
                src="../../../public/images/rick_img_test.png"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute bg-cyanBackground bg-opacity-50 w-full h-full flex justify-between items-end p-3">
                <div className="flex flex-col font-primary">
                  <h2 className="font-bold text-2xl">S01E01</h2>
                  <p className="font-semibold text-base">
                    The Ricklantis Mixup
                  </p>
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
    </div>
  );
}
