import PageDescription from "../components/common/PageDescription";
import MomoMenuList from "../components/common/MomoMenuList";
import QrScanner from "../components/common/QrScanner";
import UniqueTitle from "../components/common/UniqueTitle";
import { useContext } from "react";
import menuContext from "../contexts/menuContext";
import groupItemsByCategory from "../middlewares/groupItemByCategory";

const Menu = () => {
  const { menuData, loading } = useContext(menuContext);
  const groupedItems = groupItemsByCategory(menuData);

  const mappedItems = Object.entries(groupedItems).map(([category, items]) => ({
    category,
    items,
  }));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-8 md:mx-16 xl:mx-32">
      <PageDescription
        pageTitle="our menu"
        pageParaPrimary="Our menu is more than just momos,"
        pageParaSecondary="with a variety of dishes to cater to all taste and preferences"
        classFeature="text-center"
        flexFeature="justify-center"
      />

      <QrScanner />

      <div className="mt-6 flex flex-col gap-10 py-4 md:mt-12 md:py-6">
        {mappedItems.map(({ category, items }, index) => (
          <div key={index} className="flex flex-col gap-8">
            <UniqueTitle primaryTitle={category} secondaryTitle={`momo's`} />
            <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 sm:justify-between lg:grid-cols-3 lg:gap-12">
              {items.map((item, index) => (
                <MomoMenuList
                  key={index}
                  menuImg={`http://localhost:3000/${item.image}`}
                  menuName={item.name}
                  menuPrice={item.price}
                  itemDescription={item.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
