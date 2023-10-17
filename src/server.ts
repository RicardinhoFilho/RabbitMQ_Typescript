
import client, { Connection, Channel, ConsumeMessage } from "amqplib";
function sendMessages(channel: Channel): void {
    for (let index = 0; index < 10; index++) {
        const teste_const = { id: index, titulo: `Mensagem ${index}` };
        channel.sendToQueue("teste", Buffer.from(JSON.stringify(teste_const)))

    }

}

const consumer = (channel: Channel) => (msg: ConsumeMessage | null): void => {
    if (msg) {
        console.log(JSON.parse(msg.content.toString()));
        channel.ack(msg);
    }
}


const execute = async () => {
    const connection: Connection = await client.connect("amqp://guest:guest@localhost:5672");
    const channel: Channel = await connection.createChannel();
    await channel.assertQueue("teste");
    sendMessages(channel);
    await channel.consume('teste', consumer(channel))
}

execute()