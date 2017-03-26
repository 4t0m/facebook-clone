json.extract! post, :id, :body, :author_id, :host_id, :date, :time

json.image_url asset_path(post.thumbnail.url)

json.author do
  # json.photo_url asset_path(post.author.photo.url)
  json.firstname post.author.fname
  json.lastname post.author.lname
end

json.host do
  json.firstname post.host.fname
  json.lastname post.host.lname
end

# json.comments do
#   json.array! post.comments, partial: 'api/comments/comment', as: :comment
# end
#
# json.likes do
#   json.array! post.likes, partial: 'api/likes/like', as: :like
# end
