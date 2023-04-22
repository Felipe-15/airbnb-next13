import { IconType } from "react-icons";

interface Props {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryBox = ({ label, icon: Icon, selected }: Props) => {
  return (
    <div
      className={`
      flex
      flex-col
      justify-center
      items-center
      gap-2
      p-3
      border-b-2
      hover:text-neutral-800
      transition
      cursor-pointer
      ${selected ? "border-b-neutral-800" : "border-transparent"}
      ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={26} />
      <div
        className="
        font-md
        text-sm
      "
      >
        {label}
      </div>
    </div>
  );
};

export default CategoryBox;
