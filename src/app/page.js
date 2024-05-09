import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 flex min-h-screen flex-col items-center justify-between py-10 px-24">
      <div className="w-full h-20 flex flex-row justify-between">
        <span> </span>
        <a href="#" target="_blank">
          <h1 className="text-gray-600 p-2 rounded-xl transition duration-300 ease-in-out hover:border-2">
            LOGIN
          </h1>
        </a>
      </div>
      <section className="w-full flex flex-col items-center justify-center">
        <h1 className="tracking-widest text-8xl font-bold">
          <span className="text-black/40">Miti</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-cyan-600">
            Geta
          </span>
        </h1>
        <p className="text-light text-gray-400 text-center w-96">
          we aim to address crisis mitigation by Fundraising, Donations, and
          Charity
        </p>

        {/* show this section only if user has not joined our wati list on the current user browser */}
        <div className="flex flex-row items-center justify-center space-x-2 mt-10 placeholder:text-gray-200">
          <input
            // value={userMail}
            // onChange={(event) => setUserMail(event.target.value)}
            type="email"
            placeholder="Waitlist"
            className="p-4 w-80 rounded-xl text-gray-800 active:outline-none"
          />
          <button
            // onClick={joinWaitList}
            className="p-2 bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600 w-20 rounded-xl h-14 from-blue-400 to-cyan-400 transition duration-400 ease-in-out"
          >
            join
          </button>
        </div>
      </section>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Link
          href="/createcampaigns"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-gray-600`}>
            Create Campaigns
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`text-gray-600 m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        <Link
          href="/viewcampaigns"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-gray-600`}>
            View Campaigns{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`text-gray-600 m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </Link>

        {/* <Link
          href="/custompos"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-gray-600`}>
            Custom POS{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`text-gray-600 m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </Link> */}

        {/* <Link
          href="/customshopifyfunctions"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-gray-600`}>
            Custom Shopify Functions{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`text-gray-600 4m-0 max-w-[30ch] text-sm opacity-50 text-balance`}
          >
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Link> */}
      </div>
      <h1 className="text-gray-400">@ 2024 - mitigeta</h1>
    </main>
  );
}
