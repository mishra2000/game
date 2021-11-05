require 'test_helper'

class GamePageControllerTest < ActionDispatch::IntegrationTest
  test "should get playGame" do
    get game_page_playGame_url
    assert_response :success
  end

end
