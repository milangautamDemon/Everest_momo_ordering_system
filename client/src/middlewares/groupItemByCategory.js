export const groupItemsByCategory = (items) => {
  return items.reduce((accumulator, currentItem) => {
    if (accumulator[currentItem.category]) {
      accumulator[currentItem.category].push(currentItem);
    } else {
      accumulator[currentItem.category] = [currentItem];
    }
    return accumulator;
  }, {});
};
export default groupItemsByCategory;
