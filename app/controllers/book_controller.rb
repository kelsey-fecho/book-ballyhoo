class BookController < ApplicationController
  def index
    q = params[:q]
    if q.blank?
      render status: 200, json: Book.where("list=?", "fiction")
    else
      render status: 200, json: Book.where("list=?", q)
    end
  end

  private

  def book_params
    params.require(:book).permit(:q)
  end

end
