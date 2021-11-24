// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["help", "assistance", "please help me"],
  ["account", "profile", "user"],
  ["seed", "crop", "plant"],
  ["fertilizer", "manure", "plant food"],
  ["farming equipment, machinery, equipment"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Welcome to Agri-Solutions, how can I help you? Take note, I am a bot with limited capabilities. I can only help with shop location referral and product category",
    "How can I be of assistance to you, today?",
    "Is there anything I can help you with?"
  ],
  [
    "Since you have successfully accessed the bot, it means you are a valid user and thus no account authentication is required",
    "You are a valid user, since my services are only available for existing profiles",
    "Yes, you are a user for our service"
  ],
  ["I can help with three things which are seed/crop, fertilizer/manure and/or farming equipment"],
  ["For all your seed needs in South Africa, feel free to visit one of the 3 links: https://www.seedsforafrica.co.za/ or https://www.agricol.co.za/ or even https://africanseedsgroup.co.za/"],
  ["For all your plant food needs in South Africa, please feel free to visit one of the 3 links: https:// or https:// or https:"],
  ["For all your farming equipment needs in South Africa, please feel free to visit one of the following 3 links: http:// or http:// or http://"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]