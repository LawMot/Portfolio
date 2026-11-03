import { footerData } from "../data/FooterLinks";
import Link from "next/link";
const Footer = () => {
  return <footer className=" bg-black border-top border-dusty-rose w-full border-t-4 px-4 py-6 sm:px-8">
      <div className="flex w-full items-center justify-between">
        <div className="text-dusty-rose font-koulen text-3xl font-medium tracking-wide sm:text-xl">
          <div className="block sm:hidden">MOTUNRAYO LAWRENCE</div>
          <div className="hidden sm:block text-3xl">
            MOTUNRAYO LAWRENCE
          </div>
        </div>

        <div className="flex items-center gap-5 sm:gap-6">
          {footerData.map(({ icon: Icon, url }, index) => (
            <Link key={index} href={url} target="_blank">
              <Icon className="text-gray-200 text-2xl sm:text-3xl" />
            </Link>
          ))}
        </div>
      </div>
    </footer>;
};

export default Footer;
