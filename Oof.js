bot.on('message', message => {
  
const swearWords = ['dammit', 'damn', 'fuck', 'nigga']
  if(swearWords.some(word => message.content.includes(word)) ) {
message.delete()

  message.member.send('That word is not allowed! wash your filthy mouth ')
  
}
})