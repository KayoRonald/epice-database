import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import Logger from '../config/logger'

export const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error']
})

// Middleware Prisma hash
prisma.$use(async (params, next) => {
  if (params.model === 'Admin' && params.action === 'create') {
    const hashedPassword = await bcrypt.hash(params.args.data.password, 10)
    params.args.data.password = hashedPassword
  }
  return next(params)
})

const bug = async () => {
  try {
    Logger.info('Conectando ao banco de dados')
    await prisma.$connect()
  } catch (error) {
    Logger.error('Falha ao conectar:\n', error)
    await prisma.$disconnect()
  }
}
bug()

async function main () {
  const admin = await prisma.admin.count()
  if (admin === 0) {
    await prisma.admin.create({
      data: {
        name: 'Kayo Ronald',
        email: 'admin@admin.com',
        password: 'admin'
      }
    })
  }
}
main()
