export default function Episode() {
  return (
    <div className=" h-full bg-zinc-600">
      <div className="p-5 md:px-20 md:pt-28 space-y-20">
        <div className="mx-auto max-w-96 flex flex-col items-start space-y-8 md:grid md:grid-cols-3 md:max-w-full md:gap-x-16">
          <div className="flex flex-col space-y-5 w-full ">
            <h1 className=" text-white font-['Montserrat_Alternates'] font-bold text-2xl">
              <span className="border-b border-cyan-400 inline-block">
                The Ricklantis Mixup
              </span>
            </h1>
            <div className="flex justify-center items-center w- md:max-w-[360px]">
              <img
                src="../../../public/images/rick_img_test.png"
                alt=""
                className="rounded-lg object-cover w-full max-h-64 md:max-h-72"
              />
            </div>
          </div>
          <div className="text-white font-['Montserrat_Alternates'] font-bold text-xl flex flex-col w-full space-y-4">
            <p>Episode: S03E07</p>
            <div className="border-b border-cyan-400"></div>
            <p>Release date : September 10, 2017</p>
            <div className="border-b border-cyan-400"></div>
            <p>Characters: 12</p>
            <div className="border-b border-cyan-400"></div>
          </div>
        </div>
        <div className="mx-auto max-w-96 flex flex-col items-center space-y-10 md:max-w-full md:items-start">
          <p className="text-white font-['Montserrat_Alternates'] font-bold text-2xl border-b border-cyan-400">
            5 Characters in the episode
          </p>
          <div className="flex flex-col gap-y-20 md:flex-row md:gap-x-10">
            <div className="flex flex-col items-start space-y-4 max-w-48">
              <img
                src="../../../public/images/morty_img_test.png"
                alt=""
                className="rounded-lg object-contain max-h-40"
              />
              <p className="text-white font-['Montserrat_Alternates'] font-bold text-xl">
                Morty Smith
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
