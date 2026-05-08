import Link from "next/link";

interface CardProps {
  title: string;
  fromColor: string;
  toColor: string;
}

const Card = ({ title, fromColor, toColor }: CardProps) => {
  return (
    <Link href="/" className="flex w-1/6">
      <div
        className={`flex bg-gradient-to-b ${fromColor} ${toColor} font-dot-gothic m-6 items-end rounded-lg pb-2 pl-2 text-4xl text-white shadow-sm inset-shadow-2xs`}
      >
        {title}
      </div>
    </Link>
  );
};

export default Card;
