const mineflayer = require('mineflayer');
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');
const { Vec3 } = require('vec3');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'example.aternos.me',
    port: 58212,
    version: '1.20.4',
    username: 'Anti_AFK'
  });

  bot.loadPlugin(pathfinder);

  bot.on('login', () => {
    startRandomMovement();
    announceUptime();
  });

  bot.on('end', () => {
    setTimeout(createBot, 5000); 
  });

  bot.on('kicked', (reason) => {
    setTimeout(createBot, 5000); 
  });

  bot.on('death', () => {
    bot.emit('respawn');
  });

  function startRandomMovement() {
    setInterval(() => {
      const radius = 10;
      const randomX = Math.floor(Math.random() * 2 * radius - radius);
      const randomZ = Math.floor(Math.random() * 2 * radius - radius);
      const goal = new goals.GoalBlock(bot.entity.position.x + randomX, bot.entity.position.y, bot.entity.position.z + randomZ);
      bot.pathfinder.setMovements(new Movements(bot, require('minecraft-data')(bot.version)));
      bot.pathfinder.setGoal(goal);
    }, 5000); 
  }

  setInterval(() => {
    bot.end();
    setTimeout(createBot, 5000); 
  }, 900000); 
}

createBot(); 
