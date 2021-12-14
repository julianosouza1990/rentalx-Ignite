import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/iCategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {
    this.categoryRepository = categoryRepository;
  }
  async execute({ name, description }: IRequest) {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists!");
    }
    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
