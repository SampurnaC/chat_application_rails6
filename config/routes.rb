Rails.application.routes.draw do
  devise_for :users
  resources :chats
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'chats#new'
end
