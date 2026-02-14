import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Facebook = ({ className }: Props) => {
  return (
    <img
      src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
      alt="Facebook"
      className={cn("w-full h-auto", className)}
    />
  );
};

export default Facebook;