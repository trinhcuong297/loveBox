import { MinusIcon } from '@heroicons/react/24/outline';

export default function AboutUs() {
  return (
    <>
      <div className="space-y-12 text-gray-800 px-4 md:px-20 scroll-smooth">
        <section className="">
          {/* <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
			<h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
				<span className="text-violet-400">laborum doloribus</span>delectus
			</h1>
			<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
			<div className="flex flex-wrap justify-center">
				<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Get started</button>
				<button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">Learn more</button>
        </div>
		</div> */}
          <div id="intro" className="flex items-center justify-center mt-6">
            <MinusIcon
              className="text-gray-600 mx-4 h-10 w-10"
              aria-hidden="true"
            />
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-gray-800 to-gray-700">
              Introduction
            </h2>
            <MinusIcon
              className="text-gray-600 mx-4 h-10 w-10"
              aria-hidden="true"
            />
          </div>
          <div className="mockup-code bg-gray-200 text-gray-800">
            <pre data-prefix="1">
              <code>npm i RF3i</code>
            </pre>
            <pre data-prefix="2">
              <code>research for Antena, Embedded System</code>
            </pre>
            <pre data-prefix="3">
              <code>initialization by Assoc. Prof. Le Minh Thuy</code>
            </pre>
            <pre data-prefix="4">
              <code>since 2015</code>
            </pre>
            <pre data-prefix="5" className="bg-success text-success-content">
              <code>Success!</code>
            </pre>
            <section className="p-6">
              <div className="container grid justify-center grid-cols-2 mx-auto text-center lg:grid-cols-3">
                <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">
                    50+
                  </p>
                  <p className="text-sm sm:text-base">Clients</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">
                    89K
                  </p>
                  <p className="text-sm sm:text-base">
                    Followers on social media
                  </p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">
                    3
                  </p>
                  <p className="text-sm sm:text-base">Published books</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">
                    8
                  </p>
                  <p className="text-sm sm:text-base">TED talks</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">
                    22
                  </p>
                  <p className="text-sm sm:text-base">Years of experience</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="text-4xl font-bold leading-none lg:text-6xl">
                    10+
                  </p>
                  <p className="text-sm sm:text-base">Workshops</p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="py-8 " id="researchLeader">
          <div className="container mx-auto">
            <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
              <h2 className="text-2xl font-bold leading-none sm:text-4xl">
                Research Leader
              </h2>
              <p className="px-8 my-4">Assoc. Prof. Le Minh Thuy</p>
            </div>
            <div className="grid grid-cols-5 p-4 md:p-8">
              <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
                <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">
                  Mucius
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-violet-400 text-gray-50">
                  Fabellas
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">
                  Aperiam
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">
                  Nonumy
                </button>
                <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">
                  Propriae
                </button>
              </div>
              <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">
                    Est facilisis necessitatibus ea
                  </h5>
                  <p>
                    Ex audiam inermis elaboraret eam, oratio petentium ne cum,
                    mundi interesset sit no.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">
                    Vim iudico iisque te
                  </h5>
                  <p>
                    At cibo possim impetus pro, ius id mutat commodo offendit.
                    Cum inani pertinax definitiones ad.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">Sea inani viris at</h5>
                  <p>
                    Et eos atomorum urbanitas accommodare, in suscipit petentium
                    vis. Pro ea nibh praesent postulant.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  <h5 className="text-xl font-semibold">
                    Error nihil primis sit ut
                  </h5>
                  <p>
                    Eu vis urbanitas scripserit, civibus scripserit pro id.
                    Omnes congue contentiones te eos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ourMember" className=" bg-gray-200 rounded-2xl p-4 m-4">
          <div className="flex items-center justify-center mt-6">
            <h2 className="text-4xl font-extrabold pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-900">
              Our Member
            </h2>
          </div>
          <div className="container flex flex-col items-center justify-center px-4 mx-auto space-y-8 sm:px-10 ">
            <div className="flex flex-row flex-wrap-reverse justify-center">
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?0"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?1"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?2"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?3"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?4"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                  src="https://source.unsplash.com/100x100/?portrait?5"
                />
                <p className="text-xl font-semibold leading-tight">
                  Leroy Jenkins
                </p>
                <p className="text-gray-600">Visual Designer</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <section className="my-8 " id="Alumni">
            <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
              <h1 className="text-4xl font-semibold leading-none text-center">
                Alumni
              </h1>
            </div>
            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
              <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                <div className="px-2 pb-12 pt-4 rounded-t-lg sm:px-6 md:px-8 bg-gray-900">
                  <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 text-violet-400"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 text-violet-400"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?1"
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
              <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                <div className="px-2 pb-12 pt-4 rounded-t-lg sm:px-6 md:px-8 bg-gray-900">
                  <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 text-violet-400"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 text-violet-400"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?2"
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
              <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                <div className="px-2 pb-12 pt-4 rounded-t-lg sm:px-6 md:px-8 bg-gray-900">
                  <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 text-violet-400"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 text-violet-400"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?3"
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
              <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                <div className="px-2 pb-12 pt-4 rounded-t-lg sm:px-6 md:px-8 bg-gray-900">
                  <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 text-violet-400"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 text-violet-400"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait?4"
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700"
                  />
                  <p className="text-xl font-semibold leading-tight">
                    Distinctio Animi
                  </p>
                  <p className="text-sm uppercase">Aliquam illum</p>
                </div>
              </div>
            </div>
          </section>{' '}
        </section>
      </div>
    </>
  );
}
