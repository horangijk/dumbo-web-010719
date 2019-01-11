class Doctor

  # this describes what happens when
  # we make a new doctor
  def initialize(name, specialty)
    # Doctor.new(....)
    @name = name
    @specialty = specialty
  end

  # Has Many -> Doctor has many appointments
  def appointments
    Appointment.all.select do |appt|
      # I want to check if the appointment
      # matches to having a doctor that is prince
      # #<Doctor:....> == #<Doctor:....>
      appt.doctor == self
    end
  end

  def patients
    # Tell me all the patients that have appointments
    # 1. I need to find all the appointments that I have
    list_of_patients = []
    self.appointments.each do |appt|
      list_of_patients << appt.patient
    end

    list_of_patients

    # 2. I need to iterate over all of my appointments
    # 3. And return back a list of patients
  self.appointments.map do |appt|
    appt.patient
  end

  end
end