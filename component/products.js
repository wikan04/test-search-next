import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";

export default function Products(props) {
  const search = (s) => {
    props.setFilters({
      s,
    });
  };

  return (
    <>
      <div className="flex flex-row mx-32 mb-2">
        <h1 className="container text-4xl font-medium title-font text-purple-800 mb-2">
          Berita Terpopular
        </h1>
        {/* <Search/> */}
        <div className="container flex justify-end items-center">
          <div className="container bg-white border-1 rounded-full shadow px-4 max-w-xl sm:px-6 lg:px-8">
            <div className="flex items-center">
              <input
                type="text"
                className="h-14 w-full pr-8 rounded z-0 bg-transparent focus:outline-none"
                placeholder="Kampus Merdeka"
                onKeyUp={(e) => search(e.target.value)}
              />
              <SearchIcon className="relative h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl max-w-6xl mx-auto">
        {props.beritapop.map((products) => {
          return (
            <Link href="#">
              <div
                key={products.news_id}
                className="flex flex-row flex-grow px-4 sm:px-6 lg:px-8 border-2 border-transparent hover:border-gray-300 cursor-pointer"
              >
                <div className="flex flex-col my-4 sm:my-6 lg:my-8">
                  <p className="mt-2 text-gray-500">
                    {products.publisher_date}
                  </p>
                  <h2 className="text-gray-900 title-font text-2xl font-bold text-justify mt-2 mr-4">
                    {products.title}
                  </h2>
                </div>
                <img
                  className="relative rounded overflow-hidden object-cover object-center w-full mx-auto max-w-xs my-4 sm:my-6 lg:my-8 ml-4"
                  src={products.thumbnail_image}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
