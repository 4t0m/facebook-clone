class RemoveUrlColumnsFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :profile_pic_url
    remove_column :users, :cover_pic_url
  end
end
