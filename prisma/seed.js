const {PrismaClient} = require ('@prisma/client')
const prisma = new PrismaClient()

async function main(){
   const laksman = await prisma.userGame.upsert({
        where :{username : "laksman"},
        update :{},
        create :{
            username :"laksman",
            password :"test123",
        },
    })

    const dieny = await prisma.userGame.upsert({
        where :{
            username :"dieny",
        },
        update: {},
        create: {
            username: "dieny",
            password: "12345678",
        },
    })
}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) =>{
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})