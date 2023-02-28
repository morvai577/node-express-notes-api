import {faker} from '@faker-js/faker'
import prisma from './db.js'

// Seed sample data
async function seedData() {
  for (let i = 0; i < 10; i++) {
    const note = {
      title: faker.lorem.words(3),
      content: faker.lorem.paragraph(),
    }
    await prisma.note.create({
      data: note,
    })
  }
  await prisma.$disconnect()
}

seedData().catch((error) => {
  console.error(error)
  process.exit(1)
})
