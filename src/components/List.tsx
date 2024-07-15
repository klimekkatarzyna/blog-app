export const List: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Blog posts
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a className="group" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              alt="Image Description"
            />
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              Studio by Preline
            </h3>
            <p className="mt-3 text-gray-800">
              Produce professional, reliable streams easily leveraging Preline's
              innovative broadcast studio
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 uppercase text-blue-500 group-hover:text-blue-400 font-medium text-xs">
              Read more
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>

        <a className="group" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              Onsite
            </h3>
            <p className="mt-3 text-gray-800">
              Optimize your in-person experience with best-in-class capabilities
              like badge printing and lead retrieval
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 uppercase text-blue-500 group-hover:text-blue-400 font-medium text-xs">
              Read more
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>

        <a className="group" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              Onsite
            </h3>
            <p className="mt-3 text-gray-800">
              Optimize your in-person experience with best-in-class capabilities
              like badge printing and lead retrieval
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 uppercase text-blue-500 group-hover:text-blue-400 font-medium text-xs">
              Read more
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
