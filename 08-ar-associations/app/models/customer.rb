class Customer < ActiveRecord::Base

  has_many :reviews
  has_many :restaurants, through: :reviews
  # def reviews
  #   Review.all.select do |review|
  #     review.customer_id == self.id
  #   end
  # end

  # def restaurants
  #   self.reviews.map do |review|
  #     # The restaurant object by the id
  #
  #     # .find in ActiveRecord says find it by a condition (default id)
  #     Restaurant.find(review.restaurant_id)
  #   end
  # end
end
