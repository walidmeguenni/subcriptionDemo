const { RedisPubSub } = require( "graphql-redis-subscriptions")
const Redis = require('ioredis');
const options = {
  host: "localhost",
  port: 6379,
};
const redis = new Redis(options);

redis.on('connect', () => {
  console.log('Connected to Redis server');
});

redis.on('error', (error) => {
  console.error('Redis connection error:', error);
});

const pubsub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options),
});

module.exports = { pubsub };