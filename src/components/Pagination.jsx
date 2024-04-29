const Pagination = () => {
  return (
    <div className="flex justify-between mt-5">
      <div>
        <h1 className="text-xm">Showing 1 to 10 of 48 records</h1>
      </div>
      <div>
        <ol className="flex justify-center gap-1 text-xs font-medium">
          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 py-3 px-5"
            >
              <span className="">Previous</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              1
            </a>
          </li>

          <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
            2
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 py-3 px-5"
            >
              <span className="">Next</span>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Pagination;
