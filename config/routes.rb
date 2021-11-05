Rails.application.routes.draw do
  get 'game_page/playGame'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "game_page#playGame"
end
