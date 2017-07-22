Rails.application.routes.draw do
  root "pages#index"
  get "/admin" => "admin#index"
  get "/admin/events" => "admin#index"
  get "/admin/products" => "admin#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :events, only: [:index]
      resources :about, only: [:index]
      resources :products, only: [:index, :create]
    end
  end
end
