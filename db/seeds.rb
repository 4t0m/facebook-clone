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

# dfw = User.create!(fname: "David", lname: "Foster Wallace", email: "dfw@domain.com", password: "password")
# dfw.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/002/original/DFW.jpg"
# dfw.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
# dfw.save!
#
# wilde = User.create!(fname: "Oscar", lname: "Wilde", email: "wilde@domain.com", password: "password")
# wilde.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/003/original/Wilde.jpg"
# wilde.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
# wilde.save!
#
# adams = User.create!(fname: "Douglas", lname: "Adams", email: "adams@domain.com", password: "password")
# adams.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/004/original/Adams.jpg"
# adams.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
# adams.save!
#
# sanderson = User.create!(fname: "Brandon", lname: "Sanderson", email: "sanderson@domain.com", password: "password")
# sanderson.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/005/original/Sanderson.jpg"
# sanderson.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
# sanderson.save!
#
# salinger = User.create!(fname: "J. D.", lname: "Salinger", email: "salinger@domain.com", password: "password")
# salinger.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/006/original/Salinger.jpg"
# salinger.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
# salinger.save!
#
# plath = User.create!(fname: "Sylvia", lname: "Plath", email: "plath@domain.com", password: "password")
# plath.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/007/original/Plath.jpg"
# plath.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
# plath.save!
#
# vinge = User.create!(fname: "Vernor", lname: "Vinge", email: "vinge@domain.com", password: "password")
# vinge.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/008/original/Vinge.jpg"
# vinge.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
# vinge.save!
#
# vonnegut = User.create!(fname: "Kurt", lname: "Vonnegut", email: "vonnegut@domain.com", password: "password")
# vonnegut.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/009/original/Vonnegut.jpg"
# vonnegut.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
# vonnegut.save!
#
# stephenson = User.create!(fname: "Neal", lname: "Stephenson", email: "stephenson@domain.com", password: "password")
# stephenson.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/010/original/Stephenson.jpg"
# stephenson.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
# stephenson.save!
#
# grossman = User.create!(fname: "Lev", lname: "Grossman", email: "grossman@domain.com", password: "password")
# grossman.profile_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/profile_pics/000/000/010/original/Grossman.jpg"
# grossman.cover_pic_url = "https://s3-us-west-1.amazonaws.com/facebookclone-pro/users/cover_pics/no-cover.png"
# grossman.save!
