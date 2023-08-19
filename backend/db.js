// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// async function createUser(userName) {
//   try {
//     const newUser = await prisma.user.create({
//       data: {
//         name: userName,
//       },
//     });

//     return newUser.id;
//   } catch (error) {
//     throw new Error("Error creating user: " + error.message);
//   }
// }

// async function storeChatHistory(userId, description, chatHistory) {
//   try {
//     const user = await prisma.user.findUnique({
//       where: { id: userId },
//     });

//     if (!user) {
//       throw new Error("User not found");
//     }

//     const newChatHistory = await prisma.chatHistory.create({
//       data: {
//         userId: user.id,
//         description,
//         chatHistory,
//       },
//     });

//     return newChatHistory;
//   } catch (error) {
//     throw new Error("Error storing chat history: " + error.message);
//   }
// }

// async function fetchChatHistory(userId) {
//   try {
//     const chatHistory = await prisma.chatHistory.findMany({
//       where: { userId },
//     });

//     return chatHistory;
//   } catch (error) {
//     throw new Error("Error fetching chat history: " + error.message);
//   }
// }

// // async function fetchAll() {
// //   try {
// //     const chatHistory = await prisma.chatHistory.findMany({
// //       select: {
// //         userId: true,
// //         createdAt: true
// //       },
// //     });

// //     return chatHistory.map((item) => item.userId);
// //   } catch (error) {
// //     throw new Error("Error fetching user IDs: " + error.message);
// //   }
// // }

// async function fetchAll() {
//   try {
//     const chatHistory = await prisma.chatHistory.findMany({
//       select: {
//         userId: true,
//         createdAt: true,
//       },
//     });

//     const userIds = chatHistory.map((item) => item.userId);
//     const users = await prisma.user.findMany({
//       where: {
//         id: {
//           in: userIds,
//         },
//       },
//       select: {
//         id: true,
//         name: true,
//       },
//     });

//     return chatHistory.map((item) => {
//       const user = users.find((user) => user.id === item.userId);
//       return {
//         userId: user.id,
//         username: user.name,
//         createdAt: item.createdAt,
//       };
//     });
//   } catch (error) {
//     throw new Error("Error fetching data: " + error.message);
//   }
// }

// module.exports = {
//   createUser,
//   storeChatHistory,
//   fetchChatHistory,
//   fetchAll
// };

