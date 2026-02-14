import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Linkedin = ({ className }: Props) => {
  return (
    <img
      src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
      alt="Linkedin"
      className={cn("w-full h-auto", className)}
    />
  );
};

export default Linkedin;