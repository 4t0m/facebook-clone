class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :host_id, null: false
      t.attachment :thumbnail
      t.timestamps
    end

    add_index :posts, :author_id
    add_index :posts, :host_id
  end
end
