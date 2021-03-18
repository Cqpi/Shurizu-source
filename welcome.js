module.exports = client => {
    const channelID = "Server ID";
     client.on("guildMemberAdd", (member) => {
         console.log(member);
  
         const message = `Welcome to the Server, <@${member.id}>!`; //message if someone join
  
         const channel = member.guild.channels.cache.get(channelID);
         channel.send(message);
      });
  };
  
  
  