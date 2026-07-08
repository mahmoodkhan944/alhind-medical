import path from 'node:path'
import type { PrismaConfig } from 'prisma'
import { prisma } from '@/lib/db'

const patients = await prisma.patient.findMany()


export default {
  earlyAccess: true,
  schema: path.join(__dirname, 'schema.prisma'),
  migrate: {
    async resolve({ datasourceUrl }: { datasourceUrl?: string }) {
      return {
        url: datasourceUrl ?? process.env.DATABASE_URL ?? '',
      }
    },
  },
  studio: {
    async resolve({ datasourceUrl }: { datasourceUrl?: string }) {
      return {
        url: datasourceUrl ?? process.env.DATABASE_URL ?? '',
      }
    },
  },
} satisfies PrismaConfig