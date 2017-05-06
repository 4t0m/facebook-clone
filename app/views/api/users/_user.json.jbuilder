json.extract! user, :id, :email, :fname, :lname, :gender, :birthday,
              :school, :workplace, :home_town, :relationship, :current_city
json.profile_pic_url user.profile_pic_url
json.cover_pic_url user.cover_pic_url
