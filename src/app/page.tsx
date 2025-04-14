// Import necessary modules and components

import Alf from "./components/Alf";


export default function Home() {
  return (
    <main className="container grid grid-cols-1 md:grid-cols-2 items-center justify-items-center min-h-screen pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-3xl font-bold  pb-10 ">
        <h2 className="pb-10 ">xd?</h2>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Comprar ahora</button>
      </div>

      <Alf />

      <section>
        <div>
         
        </div>
      </section>

    </main>


  );
}
