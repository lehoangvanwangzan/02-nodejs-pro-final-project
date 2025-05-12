import { prisma } from "./client";

const initDatabase = async () => {
    const userCount = await prisma.user.count();
    if (userCount > 0) {
        console.log("Database already seeded");
    } else {
        console.log("Seeding database...");

        await prisma.user.createMany({
            data: [
                {
                    fullName: "admin",
                    password: "123456",
                    username: "Admin",
                    address: "Hà Nội",
                    phone: "0123456789",
                    accountType: "admin",
                },
                {
                    fullName: "Lê Hoàng Văn",
                    password: "123456",
                    username: "lehoangvan@gmail.com",
                    address: "Cần Thơ",
                    phone: "0123456789",
                    accountType: "client",
                },
                {
                    fullName: "Lê Hoàn Vũ",
                    password: "123456",
                    username: "lehoanvu@gmail.com",
                    address: "Hà Nội",
                    phone: "0123456789",
                    accountType: "client",
                }
            ]
        })
    }
}
export default initDatabase;