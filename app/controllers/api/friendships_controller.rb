class Api::FriendshipsController < ApplicationController

  def index
    if params[:user_id]
      render json: Friendship.find_friendship(current_user.id, params[:user_id])
    # else
    #   @friendships = Friendship.where("status = 'unanswered' AND replier_id = ?", current_user.id)
    #   @friendships.includes(:sender)
    #   render :index
    end
  end

  def create
    render(json: ["Invalid user!"], status: 404) unless params.key?(:user_id)
    render(json: ["Not logged in!"], status: 403) unless current_user

    if Friendship.friend_status(current_user.id, params[:user_id])
      render(json: ["Already friends"], status: 404)
    end

    @friendship = Friendship.new(user1_id: current_user.id,
                                 user2_id: params[:user_id],
                                 status: "pending")

    if @friendship.save
      render json: @friendship
    else
      render json: @friendship.errors
    end

  end

  def show
    user = User.find(params[:id])
    @friends = user.friends
    render :index
  end

  def update
    @friendship = Friendship.find_by(id: params[:id])
    render(json: ["No friendship found"], status: 404) unless @friendship

    if @friendship[:user2_id] == current_user.id
      if @friendship.update(status: "accepted")
        render json: @friendship
      else
        render json: @friendship.errors, status: 404
      end
    else
      render json: ["Waiting on response"], status: 403
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    if @friendship
      if @friendship.delete
        render json: {}
      else
        render json: @friendship.errors, status: 404
      end
    else
      render json: ["No friendship found"], status: 404
    end
  end

  private

  def friendship_params
    params.require(:friendship).permit(:user_id)
  end

end
