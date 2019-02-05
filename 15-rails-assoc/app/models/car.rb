class Car < ApplicationRecord
  has_many :car_owners
  has_many :owners, through: :car_owners
end
