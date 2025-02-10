import { faker } from "@faker-js/faker";
import * as fs from "fs";
import * as path from "path";

export const generateRandomData = (count: number) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    company: faker.company.name(),
    dateOfBirth: faker.date.birthdate({ min: 18, max: 70, mode: 'age' }),
    jobTitle: faker.person.jobTitle(),
    avatar: faker.image.avatar(),
    companyCatchPhrase: faker.company.catchPhrase(),
    city: faker.location.city(),
    country: faker.location.country(),
  }));
};

const count = 100; // Change this to generate more or fewer records
const data = generateRandomData(count);

const scriptFileName = path.basename(__filename, path.extname(__filename));

// Ensure the output directory exists
const outputDir = path.join(__dirname, "output", scriptFileName);
fs.mkdirSync(outputDir, { recursive: true });

// Save data to a JSON file
const filePath = path.join(outputDir, "user.json");
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

console.log(`Generated ${count} fake records and saved to ${filePath}`);
