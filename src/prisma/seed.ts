import { faker } from '@faker-js/faker';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from './generated/prisma-client';
import * as dotenv from 'dotenv';
// ...existing code...

dotenv.config();

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  connectionLimit: 5,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Emptying database...');

  await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=0');
  await prisma.recommendation.deleteMany({});
  await prisma.client.deleteMany({});
  await prisma.item.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=1');

  console.log('Seeding database...');

  await prisma.user.create({
    data: {
      password:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMDAwMTEsInVzZXJuYW1lIjoiYmFrb3NpcCJ9.RYs282ZM9336fR-8oY8TI1hl3F9mzvfyAsk3uwgSSdg',
      beosztas: '',
      email: 'bakosi.peter@exesoft.hu',
      salesperson: true,
      ID_devices: 1,
      image: '',
      username: 'bakosip',
      name: 'Bakosi Péter',
    },
  });

  // -----------------------------
  // ITEMS (50)
  // -----------------------------
  const items = await Promise.all(
    Array.from({ length: 50 }).map(() =>
      prisma.item.create({
        data: {
          arukod: faker.number.int({ min: 100000, max: 999999 }),
          megnev: faker.commerce.productName(),
          csoport: faker.commerce.department(),
          cikkszam: faker.string.alphanumeric(10),
          has_ready_to_cook_variants: faker.datatype.boolean(),
          ear: faker.number.float({ min: 100, max: 10000, fractionDigits: 2 }),
          ear4: faker.number.float({ min: 100, max: 10000, fractionDigits: 2 }),
          ear3: faker.number.float({ min: 100, max: 10000, fractionDigits: 2 }),
          ear1: faker.number.float({ min: 100, max: 10000, fractionDigits: 2 }),
          tipus: faker.number.int({ min: -1, max: 10 }),
          new: faker.datatype.boolean(),
          keszlet: faker.number.float({ min: 0, max: 500 }),
          batch: faker.number.float({ min: 0, max: 500 }),
          unit: faker.number.float({ min: 0, max: 500 }),
          uom: faker.helpers.arrayElement(['kg', 'pcs', 'box']),
          passziv: faker.datatype.boolean(),
          fix: faker.datatype.boolean(),
          fix_name: faker.commerce.productName(),
          sold_in_batches: faker.datatype.boolean(),
          hide_batch: faker.datatype.boolean(),
          rendelheto: faker.datatype.boolean(),
          custom_unit: faker.number.float({ min: 0, max: 10 }),
          image: faker.image.url(),
          vat: 1.27,
        },
      }),
    ),
  );

  // -----------------------------
  // CLIENTS (50)
  // -----------------------------
  // Generate unique IDs for clients
  const usedClientIds = new Set<number>();
  const clients = await Promise.all(
    Array.from({ length: 50 }).map(() => {
      let uniqueId;
      do {
        uniqueId = faker.number.int({ min: 100000, max: 999999 });
      } while (usedClientIds.has(uniqueId));
      usedClientIds.add(uniqueId);
      return prisma.client.create({
        data: {
          ID: uniqueId,
          vat: faker.string.alphanumeric(10),
          name: faker.company.name(),
          address_city: faker.location.city(),
          address_zip: faker.location.zipCode(),
          address_combined: faker.location.streetAddress(),
          del: faker.datatype.boolean(),
          email: faker.internet.email(),
          ID_salesman: faker.number.int({ min: 1, max: 50 }),
          ID_branch: faker.string.alphanumeric(10),
          seasonal: faker.word.adjective(),
          sms_group: faker.number.int({ min: 1, max: 10 }),
          business_name: faker.company.name(),
          UNAS_customer_group_ID: faker.number.int({ min: 1, max: 10 }),
          discount_group_id: faker.number.int({ min: 1, max: 10 }),
          discount_percentage: faker.number.float({ min: 0, max: 50 }),
          teruleti_id: faker.number.int({ min: 1, max: 10 }),
        },
      });
    }),
  );

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
