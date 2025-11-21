export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center gap-3 bg-red-100 text-red-700 px-4 py-3 rounded-lg shadow-sm border border-red-300 my-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-2-10a9 9 0 110 18 9 9 0 010-18z"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
};
