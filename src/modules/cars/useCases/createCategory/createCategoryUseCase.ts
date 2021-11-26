import { ICategoriesRepository } from "../../repositories/iCategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {
    this.categoryRepository = categoryRepository;
  }
  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists!");
    }
    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
