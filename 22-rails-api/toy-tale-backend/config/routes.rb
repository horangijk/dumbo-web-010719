Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Index Action
  # get "/toys", to: "toys#index"
  resources :toys, only: [:index, :show, :create, :update]
end
