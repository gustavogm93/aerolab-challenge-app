import {Category} from "./types";

export function getBadgeColor(category: Category): string {
  if (category === Category.Phones) return "orange";

  if (category === Category.Phone_Accessories) return "orange";

  if (category === Category.Android_Wear) return "blue";

  if (category === Category.Laptops) return "blue";

  if (category === Category.PC_Accessories) return "teal";

  if (category === Category.Tablets_and_Ereaders) return "teal";

  if (category === Category.Monitors_and_TV) return "cyan";

  if (category === Category.Gaming) return "red";

  if (category === Category.Smart_Home) return "green";

  if (category === Category.Audio) return "pink";

  if (category === Category.Cameras) return "pink";

  if (category === Category.Drones) return "purple";

  return "cyan";
}
