class Api::FriendshipsController < ApplicationController

  def create
    user1_id = friendship_params[:user1_id]
    user2_id = friendship_params[:user2_id]

    friendship = Friendship.new(
      user1_id: user1_id,
      user2_id: user2_id,
      status: "pending"
    )

    if friendship.save
      render :show
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
    render json: ["No friendship found"], status: 404 unless @friendship

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
    params.require(:friendship).permit(:user1_id, :user2_id)
  end

end
