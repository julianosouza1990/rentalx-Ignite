import { CategoriesRepository } from "../../repositories/implementations/categoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

const categoryRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
