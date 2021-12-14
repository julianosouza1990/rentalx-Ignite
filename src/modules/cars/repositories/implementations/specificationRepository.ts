import { Specification } from "../../entities/specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "../iSpecificationsRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }
  create({ name, description }: ICreateSpecificationDTO) {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  async findByName(name: string): Promise<Specification | undefined> {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationRepository };
