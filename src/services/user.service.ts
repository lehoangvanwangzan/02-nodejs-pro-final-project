import { prisma } from "config/client";
import getConnection from "config/database";

const handleCreateUser = async (
    fullName: string,
    email: string,
    address: string) => {

    //insert into database
    await prisma.user.create({
        data: {
            name: fullName,
            email: email,
            address: address
        }

    });


}
const getAllUsers = async () => {
    const user = await prisma.user.findMany();
    return user;
};

const handleDeleteUser = async (id: string) => {

    await prisma.user.delete({
        where: {
            id: +id
        }
    })

}
const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: +id
        },

    })
    return user
}
const updateUserById = async (id: string, email: string, address: string, fullName: string) => {
    const updateUserById = await prisma.user.update({
        where: { id: +id },
        data: {
            name: fullName,
            email: email,
            address: address
        }
    })
    return updateUserById;
}
export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, updateUserById };