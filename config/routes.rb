Rails.application.routes.draw do
  root "pages#index"
  get "/admin" => "admin#index"
  get "/admin/events" => "admin#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :events, only: [:index, :create]
      resources :about, only: [:index]
      resources :products, only: [:index, :create]
    end
  end
end
