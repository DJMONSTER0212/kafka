const  {kafka}  =require("./client")



async function init() {
  const admin = kafka.admin();
  console.log("Admin Connecting..");
  admin.connect();
  console.log("Admin connection Success ...");

  console.log("Creating Topic [rider-updates]")
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });

  console.log("Topic Created Success [rider-updates]")

  console.log("disconnecting admin..")
  await admin.disconnect();

}

init();

