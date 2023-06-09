import Container from "../Container";

import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "beach",
    icon: TbBeach,
    description: "This property is close to the beach.",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills.",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern.",
  },
];

const Categories = () => {
  return (
    <Container>
      <div
        className="
                pt-4
                flex
                flex-row
                items-center
                justify-center
                overflow-x-auto
            "
      >
        {categories.map((category) => (
          <CategoryBox key={category.label} {...category} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
