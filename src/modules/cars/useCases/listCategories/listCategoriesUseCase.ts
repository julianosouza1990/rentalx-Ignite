import { Category } from "../../model/category";
import { ICategoriesRepository } from "../../repositories/iCategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
