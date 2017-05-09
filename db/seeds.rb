# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(fname: "Guest", lname: "User", email: "guest@domain.com", password: "password")
guest.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/missing.png"
guest.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
guest.save!

dfw = User.create!(fname: "David", lname: "Foster Wallace", email: "dfw@domain.com", password: "password")
dfw.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/002/original/DFW.jpg"
dfw.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
dfw.birthday = "1962-02-21"
dfw.save!

wilde = User.create!(fname: "Oscar", lname: "Wilde", email: "wilde@domain.com", password: "password")
wilde.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/003/original/Wilde.jpg"
wilde.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
wilde.birthday = "1854-10-16"
wilde.save!

adams = User.create!(fname: "Douglas", lname: "Adams", email: "adams@domain.com", password: "password")
adams.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/004/original/Adams.jpg"
adams.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
adams.birthday = "1952-03-11"
adams.save!

sanderson = User.create!(fname: "Brandon", lname: "Sanderson", email: "sanderson@domain.com", password: "password")
sanderson.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/005/original/Sanderson.jpg"
sanderson.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
sanderson.birthday = "1975-12-19"
sanderson.save!

salinger = User.create!(fname: "J. D.", lname: "Salinger", email: "salinger@domain.com", password: "password")
salinger.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/006/original/Salinger.jpg"
salinger.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
salinger.birthday = "1919-01-01"
salinger.save!

plath = User.create!(fname: "Sylvia", lname: "Plath", email: "plath@domain.com", password: "password")
plath.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/007/original/Plath.jpg"
plath.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
plath.birthday = "1932-10-27"
plath.save!

vinge = User.create!(fname: "Vernor", lname: "Vinge", email: "vinge@domain.com", password: "password")
vinge.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/008/original/Vinge.jpg"
vinge.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
vinge.birthday = "1944-10-02"
vinge.save!

vonnegut = User.create!(fname: "Kurt", lname: "Vonnegut", email: "vonnegut@domain.com", password: "password")
vonnegut.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/009/original/Vonnegut.jpg"
vonnegut.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
vonnegut.birthday = "1922-11-11"
vonnegut.save!

stephenson = User.create!(fname: "Neal", lname: "Stephenson", email: "stephenson@domain.com", password: "password")
stephenson.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/010/original/Stephenson.jpg"
stephenson.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
stephenson.birthday = "1959-10-31"
stephenson.save!

grossman = User.create!(fname: "Lev", lname: "Grossman", email: "grossman@domain.com", password: "password")
grossman.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/011/original/Grossman.jpg"
grossman.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
grossman.birthday = "1969-06-26"
grossman.save!


Post.create!([
  {body: "e", author_id: 1, host_id: 1, thumbnail_file_name: nil, thumbnail_content_type: nil, thumbnail_file_size: nil, thumbnail_updated_at: nil}
])

dfw_posts = [
              "Everybody is identical in their secret unspoken belief that way deep down they are different from everyone else.",
              "The truth will set you free. But not until it is finished with you.",
              "You will become way less concerned with what other people think of you when you realize how seldom they do.",
              "Everything I’ve ever let go of has claw marks on it.",
              "Try to learn to let what is unfair teach you.",
              "It's weird to feel like you miss someone you're not even sure you know.",
              "How odd I can have all this inside me and to you it’s just words.",
              "The parts of me that used to think I was different or smarter or whatever, almost made me die.",
              "Acceptance is usually more a matter of fatigue than anything else.",
              "Good fiction’s job is to comfort the disturbed and disturb the comfortable.",
              "I'd like to be the sort of person who can enjoy things at the time, instead of having to go back in my head and enjoy them.",
              "Every love story is a ghost story.",
              "I'd tell you all you want and more, if the sounds I made could be what you hear",
              "Mediocrity is contextual.",
              "God seems to have a kind of laid-back management style I’m not crazy about.",
              "Truly decent, innocent people can be taxing to be around.",
              "I am not what you see and hear."
]

wilde_posts = [
                "Be yourself; everyone else is already taken.",
                "Always forgive your enemies; nothing annoys them so much.",
                "To live is the rarest thing in the world. Most people exist, that is all.",
                "I am so clever that sometimes I don't understand a single word of what I am saying.",
                "We are all in the gutter, but some of us are looking at the stars.",
                "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
                "It is what you read when you don't have to that determines what you will be when you can't help it.",
                "The truth is rarely pure and never simple.",
                "The books that the world calls immoral are books that show the world its own shame.",
                "You can never be overdressed or overeducated.",
                "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.",
                "Never love anyone who treats you like you're ordinary.",
                "A good friend will always stab you in the front.",
                "You will always be fond of me. I represent to you all the sins you never had the courage to commit.",
                "Every saint has a past, and every sinner has a future.",
                "I am not young enough to know everything.",
                "The heart was made to be broken.",
                "A thing is not necessarily true because a man dies for it.",
                "I think God, in creating man, somewhat overestimated his ability.",
                "I never travel without my diary. One should always have something sensational to read in the train.",
                "The very essence of romance is uncertainty."
]

adams_posts = [
                "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
                "I love deadlines. I love the whooshing noise they make as they go by.",
                "I refuse to answer that question on the grounds that I don't know the answer",
                "Don't Panic.",
                "A learning experience is one of those things that says, 'You know that thing you just did? Don't do that.",
                "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
                "Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?",
                "If there's anything more important than my ego around, I want it caught and shot now.",
                "I'd far rather be happy than right any day.",
                "You live and learn. At any rate, you live.",
                "I'd take the awe of understanding over the awe of ignorance any day.",
                "Reality is frequently inaccurate.",
                "There are some people you like immediately, some whom you think you might learn to like in the fullness of time, and some that you simply want to push away from you with a sharp stick.",
                "Beethoven tells you what it's like to be Beethoven and Mozart tells you what it's like to be human. Bach tells you what it's like to be the universe.",
                "It is a mistake to think you can solve any major problems just with potatoes.",
                "We are stuck with technology when what we really want is just stuff that works.",
                "All opinions are not equal. Some are a very great deal more robust, sophisticated and well supported in logic and argument than others.",
                "There is no point in using the word 'impossible' to describe something that has clearly happened.",
                "We can't win against obsession. They care, we don't. They win.",
                "All you really need to know for the moment is that the universe is a lot more complicated than you might think, even if you start from a position of thinking it's pretty damn complicated in the first place.",
                "First we thought the PC was a calculator. Then we found out how to turn numbers into letters with ASCII — and we thought it was a typewriter. Then we discovered graphics, and we thought it was a television. With the World Wide Web, we've realized it's a brochure.",
                "To summarize the summary of the summary: people are a problem.",
                "I think you ought to know I'm feeling very depressed.",
                "The impossible often has a kind of integrity to it which the merely improbable lacks."
]

sanderson_posts = [
                    "The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.",
                    "I've always been very confident in my immaturity.",
                    "Sometimes the prize is not worth the costs. The means by which we achieve victory are as important as the victory itself.",
                    "If you're always on time, it implies that you never have anything better you should be doing.",
                    "To lack feeling is to be dead, but to act on every feeling is to be a child.",
                    "If you give up what you want most for what you think you should want more, you'll end up miserable.",
                    "I'm convinced that responsibility is some kind of psychological disease.",
                    "Do not let your assumptions about a culture block your ability to perceive the individual, or you will fail.",
                    "Not all librarians are evil cultists. Some librarians are instead vengeful undead who want to suck your soul.",
                    "The entire point of life is to find ways to get others to do your work for you. Don’t you know anything about basic economics?"
]

salinger_posts = [
                  "I'm quite illiterate, but I read a lot. ",
                  "I'm sick of just liking people. I wish to God I could meet somebody I could respect.",
                  "I am always saying 'Glad to've met you to somebody I'm not at all glad I met. If you want to stay alive, you have to say that stuff, though.",
                  "I like it when somebody gets excited about something. It's nice.",
                  "Mothers are all slightly insane.",
                  "I'm sick of not having the courage to be an absolute nobody.",
                  "I don't exactly know what I mean by that, but I mean it.",
                  "People are always ruining things for you.",
                  "Certain things, they should stay the way they are. You ought to be able to stick them in one of those big glass cases and just leave them alone.",
                  "People never notice anything.",
                  "I'm a kind of paranoiac in reverse. I suspect people of plotting to make me happy.",
                  "Make sure you marry someone who laughs at the same things you do.",
                  "Almost every time somebody gives me a present, it ends up making me sad.",
                  "I can be quite sarcastic when I'm in the mood.",
                  "Poets are always taking the weather so personally. They're always sticking their emotions in things that have no emotions.",
                  "I know. I'm very hard to talk to. I realize that."
]

plath_posts = [
                "If you expect nothing from somebody you are never disappointed.",
                "Perhaps when we find ourselves wanting everything, it is because we are dangerously close to wanting nothing.",
                "Remember, remember, this is now, and now, and now. Live it, feel it, cling to it. I want to become acutely aware of all I’ve taken for granted.",
                "Is there no way out of the mind?",
                "I am still so naïve; I know pretty much what I like and dislike; but please, don’t ask me who I am. A passionate, fragmentary girl, maybe?",
                "I don’t care about anyone, and the feeling is quite obviously mutual.",
                "The worst enemy to creativity is self-doubt.",
                "I want to be important. By being different. And these girls are all the same.",
                "There must be quite a few things that a hot bath won't cure, but I don't know many of them.",
                "There must be quite a few things that a hot bath won't cure, but I don't know many of them.",
                "I may never be happy, but tonight I am content."
]

vinge_posts = [
                "So much technology, so little talent.",
                "I never guessed I could cry so hard my face hurt.",
                "Sometimes the biggest disasters aren't noticed at all - no one's around to write horror stories.",
                "Once upon a time I was such a good liar; I could talk the fish right into my mouths.",
                "Technical people don't make good slaves. Without their wholehearted cooperation, things fall apart.",
                "Intelligence is the handmaiden of flexibility and change.",
                "We’re long on high principles and short on simple human understanding.",
                "We're endangered by our own success.",
                "Most civilizations had more fiction than they did real history.",
                "There is a deepness in the sky, and it extends forever."
]

vonnegut_posts = [
                  "We are what we pretend to be, so we must be careful about what we pretend to be.",
                  "I want to stand as close to the edge as I can without going over. Out on the edge you see all kinds of things you can't see from the center.",
                  "We have to continually be jumping off cliffs and developing our wings on the way down.",
                  "And so it goes...",
                  "A purpose of human life, no matter who is controlling it, is to love whoever is around to be loved.",
                  "Being a Humanist means trying to behave decently without expectation of rewards or punishment after you are dead.",
                  "I was a victim of a series of accidents, as are we all.",
                  "Science is magic that works.",
                  "Maturity is a bitter disappointment for which no remedy exists, unless laughter could be said to remedy anything.",
                  "When I write, I feel like an armless, legless man with a crayon in his mouth.",
                  "Beware of the man who works hard to learn something, learns it, and finds himself no wiser than before.",
                  "Live by the harmless untruths that make you brave and kind and healthy and happy.",
                  "The practice of art isn't to make a living. It's to make your soul grow.",
                  "If your brains were dynamite there wouldn't be enough to blow your hat off.",
                  "Another flaw in the human character is that everybody wants to build and nobody wants to do maintenance.",
                  "There are too many of us and we are all too far apart.",
                  "I can have oodles of charm when I want to.",
                  "A step backward, after making a wrong turn, is a step in the right direction.",
                  "No art is possible without a dance with death.",
                  "There is no order in the world around us, we must adapt ourselves to the requirements of chaos instead."
]

stephenson_posts = [
                    "Arguing with anonymous strangers on the Internet is a sucker's game because they almost always turn out to be—or to be indistinguishable from—self-righteous sixteen-year-olds possessing infinite amounts of free time.",
                    "When you are wrestling for possession of a sword, the man with the handle always wins.",
                    "It was, of course, nothing more than sexism, the especially virulent type espoused by male techies who sincerely believe that they are too smart to be sexists.",
                    "Whenever serious and competent people need to get things done in the real world, all considerations of tradition and protocol fly out the window.",
                    "Nothing is more important than that you see and love the beauty that is right in front of you, or else you will have no defense against the ugliness that will hem you in and come at you in so many ways.",
                    "Boredom is a mask frustration wears.",
                    "That we occasionally violate our own stated moral code does not imply that we are insincere in espousing that code.",
                    "It is what you don't expect that most needs looking for.",
                    "All information looks like noise until you break the code.",
                    "The best way to know someone is to have a conversation with them.",
                    "Technically, of course, he was right. Socially, he was annoying us.",
                    "The sight of the bare katana inspires everyone to a practically Nipponese level of politeness",
                    "Southern California doesn't know whether to bustle or just strangle itself on the spot.",
                    "Ideology is a virus.",
                    "Fighting isn’t about knowing how. It’s about deciding to.",
                    "As soon as you're sure you're right, there's no point in your being here.",
                    "Being right does not always bring satisfaction,",
                    "The world is full of power and energy and a person can go far by just skimming off a tiny bit of it.",
                    "The ocean is a Turing machine, the sand is its tape; the water reads the marks in the sand and sometimes erases them and sometimes carves new ones with tiny currents that are themselves a response to the marks.",
                    "What's hard, in hacking as in fiction, is not writing, it's deciding what to write.",
                    "I have devoted much effort, during the last decade or so, to the systematic encouragement of subversiveness."
]

grossman_posts = [
                  "If there's a single lesson that life teaches us, it's that wishing doesn't make it so.",
                  "I got my heart's desire, and there my troubles began.",
                  "The funny thing about never being asked for anything is that after a while you start to feel like maybe you don’t have anything worth giving.",
                  "It's time to live with what we have and mourn what we lost. ",
                  "The truth doesn't always make a good story, does it? ",
                  "He who completes a quest does not merely find something. He becomes something.",
                  "The life I should be living had been mislaid through some clerical error by the cosmic bureaucracy.",
                  "The problem with growing up is that once you're grown up, the people who aren't grown up aren't fun anymore.",
                  "There is really no end to life's little humiliations.",
                  "Careful what you hunt, lest you catch it.",
                  "We have reached the point where ignorance and neglect are the best we can hope for in a ruler.",
                  "We have lived too long. The great days are past. ",
                  "You do realize it's all right to have nice things sometimes, right?",
                  "What is written with a sword cannot be erased.",
                  "Give a nerd enough time and a door he can close and he can figure out pretty much anything.",
                  "Apparently if you’re enough of a power nerd, there is nothing that cannot be flowcharted."
]

post_strings = [
                dfw_posts,
                wilde_posts,
                adams_posts,
                sanderson_posts,
                salinger_posts,
                plath_posts,
                vinge_posts,
                vonnegut_posts,
                stephenson_posts,
                grossman_posts
              ]

# iterate 2-11
# loop through all posts in the nested array at i
# create post using string as body, use i as authorid and host_id
# set created at to be some date.
