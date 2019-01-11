# Appointment belongs to a Doctor and a Patient
class Appointment

  attr_reader :doctor, :patient

  @@all = []

  def initialize(date, doctor, patient)
    @date = date
    @doctor = doctor
    @patient = patient

    # puts "The value of self is #{self}"
    @@all << self
  end

  # puts "The value of self here is: #{self}"
  def self.all
    # puts "The value inside of a class method is: #{self}"
    @@all
  end

  # Attribute Reader => Just returns the instance
  # variable
  # def doctor
  #   @doctor
  # end
end