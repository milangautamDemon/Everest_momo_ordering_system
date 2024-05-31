import PageDescription from "../components/common/PageDescription";
import MomoMenuList from "../components/common/MomoMenuList";
import buffSteamMomo from "../assets/images/sea-momo.png";

import QrScanner from "../components/common/QrScanner";
import UniqueTitle from "../components/common/UniqueTitle";

const menuItems = [
  {
    category: "buff",
    menuImg: buffSteamMomo,
    menuName: "buff Steam Momo",
    itemDescription:
      "Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice",
    menuPrice: "200",
  },
  {
    category: "buff",
    menuImg: buffSteamMomo,
    menuName: "buff fry Momo",
    itemDescription:
      "Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice",
    menuPrice: "200",
  },
  {
    category: "buff",
    menuImg: buffSteamMomo,
    menuName: "buff chilly Momo",
    itemDescription:
      "Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice",
    menuPrice: "200",
  },
  {
    category: "chicken",
    menuImg: buffSteamMomo,
    menuName: "chicken Steam Momo",
    itemDescription:
      "Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice",
    menuPrice: "200",
  },
  {
    category: "chicken",
    menuImg: buffSteamMomo,
    menuName: "chicken fry Momo",
    itemDescription:
      "Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice",
    menuPrice: "200",
  },
  {
    category: "chicken",
    menuImg: buffSteamMomo,
    menuName: "chicken chilly Momo",
    itemDescription:
      "Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice",
    menuPrice: "200",
  },
  {
    category: "veg",
    menuImg: buffSteamMomo,
    menuName: "veg Steam Momo",
    itemDescription:
      "Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice",
    menuPrice: "200",
  },
  {
    category: "veg",
    menuImg: buffSteamMomo,
    menuName: "veg fry Momo",
    itemDescription:
      "Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice",
    menuPrice: "200",
  },
  {
    category: "veg",
    menuImg: buffSteamMomo,
    menuName: "veg chilly Momo",
    itemDescription:
      "Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice",
    menuPrice: "200",
  },
];

const groupItemsByCategory = (items) => {
  return items.reduce((accumulator, currentItem) => {
    if (accumulator[currentItem.category]) {
      accumulator[currentItem.category].push(currentItem);
    } else {
      accumulator[currentItem.category] = [currentItem];
    }
    return accumulator;
  }, {});
};

const Menu = () => {
  const groupedItems = groupItemsByCategory(menuItems);

  const mappedItems = Object.entries(groupedItems).map(([category, items]) => ({
    category,
    items,
  }));

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
                  menuImg={item.menuImg}
                  menuName={item.menuName}
                  menuPrice={item.menuPrice}
                  itemDescription={item.itemDescription}
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
