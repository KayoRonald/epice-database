import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

const bug = async () => {
  try {
    console.log('Conectando ao banco de dados')
    await prisma.$connect()
  } catch (error) {
    console.log('Falha ao conectar:\n', error)
    await prisma.$disconnect()
  }
}
bug()
