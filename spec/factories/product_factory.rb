FactoryGirl.define do
  factory :product do
    factory :drink do
      title "Coconut Cold Brew"
      description "The most amazing coffee ever"
      group "drink"
    end

    factory :food do
      title "Dark Chocolate Brownie"
      description "Incredibly fudgey"
      group "food"
    end
  end
end
