# == Schema Information
#
# Table name: posts
#
#  id                     :integer          not null, primary key
#  body                   :text             not null
#  author_id              :integer          not null
#  host_id                :integer          not null
#  thumbnail_file_name    :string
#  thumbnail_content_type :string
#  thumbnail_file_size    :integer
#  thumbnail_updated_at   :datetime
#  created_at             :datetime
#  updated_at             :datetime
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
