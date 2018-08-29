class BookController < ApplicationController

  def index
    render(
      status: 200,
      json: Book.all
    )
  end

end
