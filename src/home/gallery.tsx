export default function Gallery() {
  const dataImg = ['https://source.unsplash.com/random/301x301/'];
  return (
    <>
      <section className="py-6">
        <div className="w-full flex justify-center">
          <h1 className="m-8 text-6xl font-bold">
            Our <span className="text-red-500">Memory</span>
          </h1>
        </div>

        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {dataImg.map((url, index) => {
            if (index % 4 === 0) {
              return (
                <img
                  src={url}
                  key={index}
                  alt=""
                  className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                />
              );
            }
            return (
              <img
                src={url}
                key={index}
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
