Rails.application.routes.draw do
  scope '/api' do
    get :book, to: 'book#index'
  end
end
