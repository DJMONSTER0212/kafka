const {kafka} = require("./client")

async function init(){
    const producer = kafka.producer();
    console.log("connecting Producer")
    await producer.connect();
    console.log("Producer Connected Successfully..")

    await producer.send({
        topic : "rider-updates",
        messages : [
            {
                partition : 0,
                key : "location-update" , value : JSON.stringify({name : "Tony Stark", loc : "SOUTH"}),
            },

        ]
    });

    await producer.disconnect()
}

init();