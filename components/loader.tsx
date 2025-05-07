export default function Loader() {

    return (
        <div className="h-full flex flex-col gap-y-5 items-center justify-center">
        <div className="w-20 h-20 md:w-[100px] md:h-[100px] relative animate-spin">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple600 via-pink500 to-pink-00"></div>
          <div className="absolute inset-[3px] rounded-full bg-[#352f3e]"></div>
        </div>
      </div>
    )

}