export default function Loading() {

    return (
        <div className="mt-20 h-full flex flex-col gap-y-4 items-center justify-center">
        <div className="w-20 h-20 md:w-32 md:h-32 relative animate-spin rounded-full bg-gradient-to-r from-pink via-purple to-blue p-2 md:p-3">
          <div className="h-full w-full rounded-full items-center justify-center bg-white">
          </div>
        </div>
        <p className="text-base md:text-lg text-muted-foreground font-bold md:mt-5">
                  Cult Markets is thinking...
              </p>
      </div>
    )

}