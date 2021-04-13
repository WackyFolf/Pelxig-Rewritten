import discord
import json
from discord.ext import commands

client = commands.Bot(command_prefix='$')


with open('config/botconfig.json') as f:
    config = json.load(f) # Load config file from config/botconfig.json
TOKEN = config['token']
VERSION = config['version']
UDPATED = config['updated'] # Set respective variables

@client.event
async def on_ready():
    await client.change_presence(status=discord.Status.idle, activity=(discord.Activity(type=3,name="over the server as I sit here with no other function but display this status"))) # :)
    print("Logged in as {0.user}".format(client))

client.run(TOKEN)