import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const GoogleMap = ({ className }: Props) => {
  return (
    <img
      src="https://img.icons8.com/?size=100&id=DcygmpZqBEd9&format=png&color=000000"
      alt="Google Map"
      className={cn("w-full h-auto", className)}
    />
  );
};

export default GoogleMap;
