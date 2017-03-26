json.extract! user, :id, :email, :fname, :lname, :gender, :birthday,
              :school, :workplace, :home_town, :relationship, :current_city
json.profile_pic_url asset_path(user.profile_pic.url)
json.cover_pic_url asset_path(user.cover_pic.url)
