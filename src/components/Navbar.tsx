import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <header className="sticky top-0 z-50 w-full h-28 flex items-center justify-center">
      <div className="container flex items-center text-white gap-2 md:gap-4">
        <a className="flex items-center gap-2 me-8 lg:me-16" href="#">
          <img width={40} src="/logo.svg" />
          <span className="text-2xl lg:text-3xl font-poppins">
            <span className="font-extrabold ">Restau</span>rant
          </span>
        </a>
        <nav className="flex gap-4 sm:gap-6 font-raleway">
          {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <Button className="ms-auto py-6" size="lg">BOOK A TABLE</Button>
      </div>
    </header>
  );
}
