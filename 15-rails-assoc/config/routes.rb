Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get "/cars", to: "cars#index", as: "cars"
  # get "/cars/new", to:"cars#new", as: "new_car"
  # get "/cars/:id", to: "cars#show", as: "car"
  # post "/cars", to:"cars#create"
  # get "/cars/:id/edit", to:"cars#edit", as: "edit_car"
  # patch "/cars/:id", to:"cars#update"
  # delete "/cars/:id", to:"cars#destroy"
  resources :cars

  resources :car_owners, only: [:new, :create]
  resources :owners, only: [:show]
  # get "/car_owners/new", to: "car_owners#new"
  # post "/car_owners", to: "car_owners#create", as: "car_owners"
end
