import Link from "next/link";
import navigations from "@/data/NavbarLinks";

const Navbar = () => {
  return (
    <div className="background-color-rose-200 to-my-gray-50/0 fixed z-5 flex w-full justify-between bg-linear-to-b from-black from-60%">
      <div className="flex gap-x-20">
        <div className="font-koulen text-dusty-rose m-4 ml-8 flex w-20 items-center text-center text-2xl/6">
          Motunrayo Lawrence
        </div>
        <div className="mt-7 space-x-8 text-white">
          {navigations.map(({ name, link }) => (
            <Link key={name} href={link}>
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="m-5 flex h-10 w-10 rounded-lg bg-linear-to-b from-rose-400 to-amber-950"></div>
    </div>
  );
};

export default Navbar;
