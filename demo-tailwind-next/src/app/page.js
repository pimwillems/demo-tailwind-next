import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
        {/* Vergeet niet dat je images.pexels.com moet toevoegen aan je
        next.config.mjs */}
        <Image
          src="https://images.pexels.com/photos/11998666/pexels-photo-11998666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sample Image"
          width={400}
          height={300}
          className="rounded-lg"
        />
        <h2 className="text-xl font-bold mt-4">Card Title</h2>
        <p className="mt-2 text-gray-600">
          This is a sample card layout using Tailwind CSS.
        </p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
}
