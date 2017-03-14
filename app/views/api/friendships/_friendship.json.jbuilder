json.extract! friendship, :id, :user1_id, :user2_id, :status

json.user1 do
  json.partial! 'api/users/user', user: friendship.user1_id
end

json.user2 do
  json.partial! 'api/users/user', user: friendship.user2_id
end
