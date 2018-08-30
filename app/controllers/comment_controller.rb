class CommentController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render status: 200, json: Comment.all
  end

  def create
    comment = Comment.create(comment_params)
    render :json => Comment.all
  end

  private
  def comment_params
    params.require(:data).permit(:comment, :author)
  end
end
