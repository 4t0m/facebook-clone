Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :friendships, only: [:create, :index]
      resources :posts, only: [:index, :create]
    end

    resource :session, only: [:create, :destroy, :show]
    resources :friendships, only: [:show, :destroy, :update]
    resources :posts, only: [:destroy, :update]
  end
end
