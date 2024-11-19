const Expo = require("expo-server-sdk").default;

const expo = new Expo();

const params = process.argv;
const TOKEN = params[2];
async function sendNotification(token) {
  if (Expo.isExpoPushToken(token)) {
    const notificationResponse = await expo.sendPushNotificationsAsync([
      {
        to: token,
        title: "Hello",
        body: "This is an expo notification",
      },
    ]);
    console.log("Notification sent!");
  } else {
    console.log(`${token} is not an Expo token`);
  }
}

sendNotification(TOKEN);
