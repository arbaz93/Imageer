const UnderConstructionPage = () => {

    return (
        <div className={"absolute top-0 left-0 h-screen w-screen z-10 flex items-center justify-center bg-clr-100  px-4 "}>
            <div className="text-center">
                <div className="mb-6">
                    <svg
                        className="w-16 h-16 mx-auto text-red-400 dark:text-red-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m0 3.75h.007v.008H12v-.008z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <h1 className="text-2xl font-semibold text-clr-100 mb-2">
                   This Page is currently under construction.
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Try again later. Thank You!
                </p>
                <a
                    href="/"
                    className="inline-block px-5 py-2 text-white bg-primary-100 rounded-md transition"
                >
                    Go Back
                </a>
            </div>
        </div>
    );
};

export default UnderConstructionPage;
