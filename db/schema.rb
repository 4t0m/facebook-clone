# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170507044650) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friendships", force: :cascade do |t|
    t.integer  "user1_id",                       null: false
    t.integer  "user2_id",                       null: false
    t.string   "status",     default: "pending"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "friendships", ["user1_id", "user2_id"], name: "index_friendships_on_user1_id_and_user2_id", unique: true, using: :btree

  create_table "posts", force: :cascade do |t|
    t.text     "body",                   null: false
    t.integer  "author_id",              null: false
    t.integer  "host_id",                null: false
    t.string   "thumbnail_file_name"
    t.string   "thumbnail_content_type"
    t.integer  "thumbnail_file_size"
    t.datetime "thumbnail_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "posts", ["author_id"], name: "index_posts_on_author_id", using: :btree
  add_index "posts", ["host_id"], name: "index_posts_on_host_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "fname",                    null: false
    t.string   "lname",                    null: false
    t.string   "email",                    null: false
    t.string   "password_digest",          null: false
    t.string   "session_token",            null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.string   "gender"
    t.string   "home_town"
    t.string   "relationship"
    t.string   "workplace"
    t.date     "birthday"
    t.string   "school"
    t.string   "current_city"
    t.string   "profile_pic_file_name"
    t.string   "profile_pic_content_type"
    t.integer  "profile_pic_file_size"
    t.datetime "profile_pic_updated_at"
    t.string   "cover_pic_file_name"
    t.string   "cover_pic_content_type"
    t.integer  "cover_pic_file_size"
    t.datetime "cover_pic_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
