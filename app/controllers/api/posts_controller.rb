class Api::PostsController < ApplicationController

  def index
    user = User.find(params[:user_id])
    if params[:collection] == "wall"
      @posts = user.timeline
      render :index
    elsif params[:collection] == "feed"
      @posts = user.newsfeed
      render :index
    else
      render json: ["Improper query"], status: 422
    end
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    @post.host_id = params[:user_id]

    if @post.save!
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:post][:id])
    if @post.update(post_params)
      render :show
    else
      render json: ["Cannot update information"], status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end

  def post_params
    params
      .require(:post)
      .permit(:body, :thumbnail)
  end
end
