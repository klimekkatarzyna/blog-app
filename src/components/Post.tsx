type PostProps = {
  title: string;
  body: string;
};

export const Post: React.FC<{ data: PostProps }> = ({ data }) => (
  <a className="group">
    <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
      <img
        className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
        src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        alt="Image Description"
      />
    </div>

    <div className="mt-7">
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 capitalize">
        {data.title}
      </h3>
      <p className="mt-3 text-gray-800">{data.body}</p>
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </p>
    </div>
  </a>
);
