import Link from "next/link";

interface CardProps {
  title: string;
  fromColor: string;
  toColor: string;
}

const Card = ({ title, fromColor, toColor }: CardProps) => {
  return (
    <Link href="/" className="flex max-w-1/6">
      <div
        className={`flex bg-gradient-to-b ${fromColor} ${toColor} font-dot-gothic m-6 items-end rounded-lg pb-2 pl-2 text-4xl text-white shadow-[6px_7px_10px_1px_rgba(255,255,255,0.2)]`}
      >
        {title}
      </div>
    </Link>
  );
};

export default Card;
