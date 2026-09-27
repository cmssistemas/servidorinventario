const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function run() {
  const hash = await bcrypt.hash('Coomsocial2026*', 10);
  await prisma.usuarios.update({
    where: { correo: 'aux.sistemas@coomsocialips.com' },
    data: { contrasena: hash }
  });
  console.log('¡LISTO_OK!');
  await prisma.$disconnect();
}
run();
