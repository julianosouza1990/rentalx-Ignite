import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/iCategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/categoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
