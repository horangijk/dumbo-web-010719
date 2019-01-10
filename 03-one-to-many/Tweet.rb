class Tweet

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def message
    @message
  end

  def user
    @user
  end

  def username
    self.user.username
  end

  def self.all
    @@all
  end
end
