const NewsLetter = () => {
    
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-2 mt-16 sm:mt-24 pb-10 sm:pb-14 px-4">
            <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
            <p className="md:text-lg text-sm text-gray-500/70 pb-4 sm:pb-8">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            <form className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between max-w-2xl w-full gap-3 sm:gap-0 md:h-13 h-12">
                <input
                    className="border border-gray-300 h-12 md:h-full outline-none w-full px-3 text-gray-500 rounded-md sm:rounded-r-none sm:border-r-0 text-sm"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <button
                  type="submit"
                  className="md:px-12 px-8 h-12 md:h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md sm:rounded-l-none w-full sm:w-auto text-sm"
                >
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default NewsLetter
