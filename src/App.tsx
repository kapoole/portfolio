import { Project } from './Project';

function App() {

  return (
    <div className="min-h-screen bg-white">
      <div className="relative lg:flex lg:items-start">


        <aside id="sidebar"
          className="min-h-screen hidden fixed top-0 bottom-0 left-0 z-20 h-full w-16 bg-gradient-to-b from-gray-100 to-white transition-all duration-300 overflow-hidden lg:sticky lg:w-80 lg:shrink-0 lg:flex lg:flex-col lg:justify-end lg:items-end 2xl:max-w-lg 2xl:w-full dark:from-dark-800 dark:to-dark-700">
          <div className="relative min-h-0 flex-1 flex flex-col xl:w-80">
            <a href="/" className="flex items-center pt-8 px-4 lg:px-8 xl:px-16">
              <h1 className="hidden grow lg:block text-blue-500 text-3xl font-medium text-right">Kenan Poole</h1>
            </a>
            <div className="overflow-y-auto overflow-x-hidden px-4 lg:overflow-hidden lg:px-8 xl:px-16">
              <nav id="indexed-nav" className="hidden lg:block lg:mt-4">
                <div>
                  <ul>
                    <li className="py-2.5">
                      <h2 className="text-right font-medium text-lg"><a id="introduction" href="#introduction"
                        className="heading-permalink" title="Permalink">Introduction</a></h2>
                    </li>
                    <li className="py-2.5">
                      <h2 className="text-right font-medium text-lg"><a id="experience" href="#experience"
                        className="heading-permalink" title="Permalink">Experience</a></h2>
                    </li>
                    <li className="py-2.5">
                      <h2 className="text-right font-medium text-lg"><a id="projects" href="#projects"
                        className="heading-permalink" title="Permalink">Projects</a></h2>
                    </li>
                    <li className="py-2.5">
                      <h2 className="text-right font-medium text-lg"><a id="web-art" href="#web-art"
                        className="heading-permalink" title="Permalink">Web Art</a></h2>
                    </li>
                    <li className="py-2.5">
                      <h2 className="text-right font-medium text-lg"><a id="other-projects" href="#other-projects"
                        className="heading-permalink" title="Permalink">Other Projects</a></h2>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="flex-grow flex flex-col justify-end">
            </div>
          </div>
        </aside>

        <section className="flex-1 mt-8">
          <div className="px-8 sm:px-16 lg:px-24 mt-8 sm:mt-16 lg:mt-2 grid grid-cols-3 gap-8">
            <Project projectName="Hello" imageName='Lycaon'/>
            <Project projectName="World" imageName='Lycaon'/>
            
           
            
            
          </div>
        </section>
      </div>
      {/* <header>
        <div className="bg-white mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Kenan Poole
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-500">
                        Raleigh, NC 🎉
                    </p>
                </div>

                <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                    <button
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                        type="button">
                        <span className="text-sm font-medium"> View Website </span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </button>

                    <button
                        className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                        type="button">
                        Create Post
                    </button>
                </div>
            </div>
        </div>
    </header>

    <div className="bg-white border-b border-gray-100">
        <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2 bg-red-100 text-right align-bottom">
                1
            </div>

            <h1 className="text-3xl font-bold">Kenan Poole</h1>
            <h2 className="text-xl">Raleigh, NC</h2>



        </div>
    </div>
    <main>
        <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
            <p>Hello world!</p>
        </div>
    </main> */}


    </div>
  )
}

export default App
