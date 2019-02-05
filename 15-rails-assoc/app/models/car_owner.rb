class CarOwner < ApplicationRecord
  belongs_to :car
  belongs_to :owner

  validates :years_held, :owner_id, :car_id, presence: true
end
