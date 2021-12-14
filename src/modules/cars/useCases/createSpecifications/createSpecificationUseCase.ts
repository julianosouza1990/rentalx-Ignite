import { ISpecificationRepository } from "../../repositories/iSpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}
  async execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("Specification Already Exists!");
    }
    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
