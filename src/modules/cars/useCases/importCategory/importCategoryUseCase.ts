import csvParser from "csv-parser";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/iCategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}
class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path);

      const parsedFile = csvParser();

      stream
        .pipe(parsedFile)
        .on("data", (line) => {
          const [name, description] = [...line];
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          console.log(categories);
          resolve(categories);
        })
        .on("error", (err) => reject(err));
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    console.log(categories);
  }
}
export { ImportCategoryUseCase };
