const { AMQPPubSub } = require("graphql-amqp-subscriptions");
const amqp = require("amqplib");

const createRabbitMqPubSub = async () => {
  return await amqp
    .connect("amqp://localhost:5672?heartbeat=30")
    .then((connection) => {
      console.log(`<------------------Connected to RabbitMQ server:------------------>\n`);
      return new AMQPPubSub({connection})
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { createRabbitMqPubSub };
