import ResturantForCustomer from "../common/ResturantForCustomer";
import { SiCodechef } from "react-icons/si";
import { GiPartyPopper } from "react-icons/gi";

const customerServiceData = [
  {
    feature: "lg:flex-row",
    icon: GiPartyPopper,
    title: "private party",
    para: "Only the best food withOnly the best food with top quality products and ingred Only the best food with top quality products and ingred top quality products and ingredients",
  },
  {
    feature: "lg:flex-row-reverse",
    icon: SiCodechef,
    title: "categring",
    para: "Only the best food withOnly the best food with top quality products and ingred Only the best food with top quality products and ingred top quality products and ingredients",
  },
];

export const CustomerServices = () => {
  return (
    <>
      {customerServiceData?.map((data, index) => (
        <ResturantForCustomer
          key={index}
          feature={data.feature}
          icon={data.icon}
          title={data.title}
          para={data.para}
        />
      ))}
    </>
  );
};
