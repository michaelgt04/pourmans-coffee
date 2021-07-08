Rails.application.routes.draw do
  root "pages#index"
  get "/admin" => "admin#index"
  get "/admin/events" => "admin#index"
  get "/admin/products" => "admin#index"
  get "/admin/about" => "admin#index"

  resources :admin, only: [:new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      namespace :admin do
        resources :products, only: [:index, :create, :destroy, :update, :show]
      end
      resources :about, only: [:index, :create]
      resources :events, only: [:index, :create, :update, :destroy, :update, :show]
      resources :products, only: [:index, :create, :destroy, :update, :show]
    end
  end
end
