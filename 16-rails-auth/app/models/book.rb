class Book < ApplicationRecord
  has_many :book_libraries
  has_many :libraries, through: :book_libraries
end
