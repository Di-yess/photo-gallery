import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
// prisma/seed.ts

// initialize Prisma Client
const prisma = new PrismaClient();
const images = [
  {
    name: 'Picture',
    description:
      ' dolorum corrupti ratione temporibus libero aliquid hic iste deserunt, commodi',
    link: '030df390-f657-49f1-aa5f-7c7f33fde837.jpg',
    coordX: 51.505,
    coordY: -0.5,
    userId: 1,
  },
  {
    name: 'Another picture',
    description:
      ' dolorum corrupti ratione temporibus libero aliquid hic iste deserunt, commodi',
    link: 'photo_01.jpg',
    coordX: 51.505,
    coordY: -0.5,
    userId: 1,
  },
  {
    name: 'Some picture',
    description:
      ' dolorum corrupti ratione temporibus libero aliquid hic iste deserunt, commodi',
    link: 'photo_20.jpg',
    coordX: 51.505,
    coordY: -0.5,
    userId: 1,
  },
  {
    name: 'Phenomenal',
    description:
      ' dolorum corrupti ratione temporibus libero aliquid hic iste deserunt, commodi',
    link: 'photo_20.jpg',
    coordX: 51.505,
    coordY: -0.5,
    userId: 1,
  },
  {
    name: 'Nice picture',
    description:
      ' dolorum corrupti ratione temporibus libero aliquid hic iste deserunt, commodi',
    link: 'photo_15.jpg',
    coordX: 51.505,
    coordY: -0.5,
    userId: 1,
  },
  {
    name: 'Another picture',
    description:
      ' dolorum corrupti ratione temporibus libero aliquid hic iste deserunt, commodi',
    link: 'photo_05.jpg',
    coordX: 51.505,
    coordY: -0.5,
    userId: 2,
  },
  {
    name: 'Another picture',
    description:
      ' dolorum corrupti ratione temporibus libero aliquid hic iste deserunt, commodi',
    link: 'photo_10.jpg',
    coordX: 51.505,
    coordY: -0.5,
    userId: 2,
  },
  {
    name: 'Another picture',
    description:
      ' dolorum corrupti ratione temporibus libero aliquid hic iste deserunt, commodi',
    link: 'photo_15.jpg',
    coordX: 51.505,
    coordY: -0.5,
    userId: 2,
  },
  {
    name: 'Another picture',
    description:
      ' dolorum corrupti ratione temporibus libero aliquid hic iste deserunt, commodi',
    link: 'photo_20.jpg',
    coordX: 51.505,
    coordY: -0.5,
    userId: 2,
  },
  {
    name: 'Another picture',
    description:
      ' dolorum corrupti ratione temporibus libero aliquid hic iste deserunt, commodi',
    link: '030df390-f657-49f1-aa5f-7c7f33fde837.jpg',
    coordX: 51.505,
    coordY: -0.5,
    userId: 2,
  },
];
const comments = [
  { text: 'explicabo similique', userId: 2, imageId: 2 },
  { text: 'Lorem ipsum dolor sit amet consectetur', userId: 2, imageId: 5 },
  { text: 'Lorem ipsum dolor sit amet consectetur', userId: 2, imageId: 7 },
  { text: 'Lorem ipsum dolor sit amet consectetur', userId: 2, imageId: 2 },
  { text: 'Lorem ipsum dolor sit amet', userId: 2, imageId: 10 },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    userId: 1,
    imageId: 4,
  },
  { text: 'Lorem ipsum dolor sit amet ', userId: 1, imageId: 7 },
  { text: 'Lorem ipsum dolor sit amet ', userId: 1, imageId: 1 },
  { text: 'Lorem ipsum dolor sit amet ', userId: 1, imageId: 1 },
  { text: 'Lorem ipsum dolor sit amet ', userId: 1, imageId: 9 },
];

async function main() {
  const password = await bcrypt.hash('11', 5);
  const users = [
    { name: 'test', email: 'test@test', password },
    { name: 'user', email: 'test@user@user', password },
  ];
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo similique. Porro alias qui cum quisquam velit minus accusantium

  for (let i = 0; i < users.length; i++) {
    await prisma.user.create({
      data: {
        ...users[i],
        avatar: { create: { link: `photo_${i == 0 ? '05' : '10'}.jpg` } },
      },
    });
  }

  for (let i = 0; i < images.length; i++) {
    await prisma.image.create({
      data: {
        ...images[i],
      },
    });
  }

  for (let i = 0; i < comments.length; i++) {
    await prisma.comment.create({
      data: {
        ...comments[i],
      },
    });
  }
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
