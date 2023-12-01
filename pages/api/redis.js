const { Redis } = require("@upstash/redis");

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// export default async function handler(req, res) {
//     let loc = req.geo?.country || "World";
//     const count = await redis.incr(loc);
//     res.status(200).send(`Location: ${loc}  View count: ${count}`);
//   }


export default async function handler(req, res) {
    const { id } = req.query; // Assuming the identifier is passed as a query parameter
    const loc = id || "default"; // Using "default" if no identifier is provided
    const count = await redis.incr(loc);
    // res.status(200).send(`Location: ${loc} View count: ${count}`);
    res.status(200).send(`${count}`);
  }
  
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  
