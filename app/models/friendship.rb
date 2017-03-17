# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#  status     :string           default("pending")
#  created_at :datetime
#  updated_at :datetime
#

class Friendship < ActiveRecord::Base
  validates :user1_id, :user2_id, presence: true
  validates :status, presence: true,
    inclusion: { in: ["pending", "accepted", "denied"] }
  validates :user1_id, uniqueness: { scope: :user2_id }

  belongs_to :user1,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user1_id

  belongs_to :user2,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user2_id

  def self.accepted_friendships(user)
    friendships = Friendship
      .where("user1_id = #{user.id} OR user2_id = #{user.id}")
      .where("status = 'accepted'")
      .pluck(:user1_id, :user2_id)
      .flatten
      .uniq

    friendships.reject { |friend_id| friend_id == user.id }
  end

  def self.find_friendship(user1, user2)
    user_one = user1.class == User ? user1.id : user1
    user_two = user2.class == User ? user2.id : user2

    sent = Friendship
      .where("user1_id = #{user_one} AND user2_id = #{user_two}")
    received = Friendship
      .where("user1_id = #{user_two} AND user2_id = #{user_one}")

    sent.first || received.first
  end

  def self.friend_status(user1, user2)
    user_one = user1.class == User ? user1.id : user1
    user_two = user2.class == User ? user2.id : user2

    sent = Friendship
      .where("user1_id = #{user_one} AND user2_id = #{user_two}").first

    received = Friendship
      .where("user1_id = #{user_two} AND user2_id = #{user_one}").first

    if sent
      return self.sent_status(sent)
    elsif received
      return self.received_status(received)
    end

    nil
  end

  def self.pending_friendships(user)
    pendings = Friendship
      .where("user1_id = #{user.id} OR user2_id = #{user.id}")
      .where("status = 'pending'")
      .pluck(:user1_id, :user2_id)
      .flatten
      .uniq

    pendings.delete(user.id)
    pendings
  end

  def self.pending_sent(user)
    Friendship
      .where("user1_id = #{user.id}")
      .where("status = 'pending'")
      .pluck(:user2_id)
      .uniq
  end

  def self.pending_received(user)
    Friendship
      .where("user2_id = #{user.id}")
      .where("status = 'pending'")
      .pluck(:user1_id)
      .uniq
  end

  private_class_method

  def self.sent_status(request)
    if request.status == "pending"
      return "requesting"
    elsif request.status == "accepted"
      return "active"
    end

    nil
  end

  def self.received_status(request)
    if request.status == "pending"
      return "need_action"
    elsif request.status == "accepted"
      return "active"
    end

    nil
  end
end
