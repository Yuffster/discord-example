var config = {
	world_name   : 'DiscordMUD',
	world_path   : __dirname+'/world',
	start_room   : 'lobby',
	world_port   : 8000,
	web_port     : 8080
};

require('discord')
  .start(config)
  .listen(config.world_port);

require('discord-web')
  .start(config)
  .listen(config.web_port);