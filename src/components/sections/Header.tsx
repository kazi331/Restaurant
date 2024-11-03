import Navbar from "../Navbar";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: 'url("public/images/bg.png")',
        backgroundSize: "8%",
      }}
    >
      <div className="bg-accent/90">
        <Navbar />
        <div className="flex container py-28 h-full min-h-[calc(100vh-7rem)]">
          <div className="w-full lg:w-1/2 py-6 my-auto text-white relative">
            <h1 className="text-2xl md:text-4xl lg:text-9xl font-bebas">
              <span className="whitespace-nowrap">Taste the authentic</span>
              <br />
              Saudi cuisine
            </h1>
            <p className="my-4 text-2xl">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <Button>Explore Menu</Button>
          </div>
          {/* <img
            src="public/images/cover.jpeg"
            alt="cover image"
            className="w-full md:w-1/2"
          /> */}
          <div className="w-full lg:w-1/2 bg-[url('public/images/cover.jpeg')] bg-cover bg-no-repeat">
            <div className="relative h-full">
              <img
                src="public/images/starLogo.svg"
                alt="star"
                className="absolute -top-8 left-full -translate-x-1/2"
              />
              <div className="absolute bottom-0 left-full -translate-x-1/2 bg-primary p-2 h-28 w-28 rounded-full">
                <div className="border-dashed border-2 border-accent rounded-full w-full h-full text-3xl font-bold font-bebas text-center flex items-center justify-center">
                  Today Offer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
