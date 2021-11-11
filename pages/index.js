import { ChevronRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import Products from "../component/products";

export default function Home() {
  const [listBerita, setlistBerita] = useState([]);
  const [filteredBerita, setfilteredBerita] = useState([]);
  const [filters, setFilters] = useState({
    s: "",
  });

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "http://10.2.155.209:8089/news?category_id=3&page=1"
      );
      const content = await res.json();

      setlistBerita(content.data);
      setfilteredBerita(content.data);
    })();
  });

  useEffect(() => {
    let berita = listBerita.filter(
      (p) => p.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0
    );
    setfilteredBerita(berita);
  }, [filteredBerita]);

  return (
    <section className="body-font items-center mx-16 my-auto">
      <div className="container mx-auto my-10">
        <a className="flex flex-row items-center mb-24 mx-32 text-gray-500">
          <p>Beranda</p>
          <ChevronRightIcon className="h-4 w-4" />
          <p>Pengumuman</p>
          <ChevronRightIcon className="h-4 w-4" />
          <p className="text-purple-700 font-bold">Berita Populer</p>
        </a>

        <Products
          beritapop={filteredBerita}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </section>
  );
}
