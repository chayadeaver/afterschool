Rails.application.routes.draw do
  resources :children do 
    resources :schedules, only: [:index, :show, :update, :create, :destroy]
  end
  resources :schedules
end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html



