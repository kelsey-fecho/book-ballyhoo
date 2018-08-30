Rails.application.routes.draw do
  scope '/api' do
    get :book, to: 'book#index'
    get :comments, to: 'comment#index'
  end
end
