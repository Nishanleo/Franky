const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1118539289286955158',
  status: {
    rotateDefault: [
      { name: 'frankyhere', type: ActivityType.Watching },
      { name: 'GTA VI', type: ActivityType.Playing },
      { name: 'KOVILAM UNIVERSE', type: ActivityType.Streaming, url: 'https://discord.gg/E3ja3JMhxe' },
      { name: 'Spotify', type: ActivityType.Listening },
    ],
    songStatus: true
  },
  spotifyClientId: "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret: "199a619d22dd4e55a4a2c1a7a3d70e63",
}
