class Review < ActiveRecord::Base
  belongs_to :customer
  belongs_to :restaurant
end


# class User < ActiveRecord::Base
#   has_one :profile_photo
# end
#
# class ProfilePhoto < ActiveRecord::Base
#   belongs_to :user
# end
