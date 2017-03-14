Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :friendships, only: [:create, :index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :friendships, only: [:show, :destroy, :update]
  end
end
