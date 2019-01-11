# This file is used to connect
# all of our definitions and run code
# NO CODE WILL BE RAN IN THE DEFINITIONS

require 'pry'

require_relative './doctor'
require_relative './patient'
require_relative './appointment'

# Before the binding.pry
# After all the requires
prince = Doctor.new("Prince", "Corgis") # Doctor Object
helen = Doctor.new("Helen", "Hands")

loki = Patient.new("Loki", "Tummy Ache") # Patient Object
cooper = Patient.new("Cooper", "Sick")
thor = Patient.new("Thor", "Broken paw")

Appointment.new("February 14th", prince, loki)
Appointment.new("July 3rd", prince, cooper)
Appointment.new("December 25th", helen, thor)


# .select it returns an array of all 
# elements that match a condition
# the thing that this method needs
# is a boolean (aka. true/false)
# Appointment.all.select do |appt|
#   # I want to check if the appointment
#   # matches to having a doctor that is prince
#   # #<Doctor:....> == #<Doctor:....>
#   appt.doctor == prince
# end
# Same as: prince.appointments

# Appointment.all.select do |appt|
#   # I want to check if the appointment
#   # matches to having a doctor that is prince
#   # #<Doctor:....> == #<Doctor:....>
#   appt.doctor == helen
# end
# Same as: helen.appointments

# What if we wanted to see Prince's Patients
# 1. We need to find all of Prince's Appointments
# 2. Each of those appointments have a patient associated with it
# 3. we make an array and stuff them in
# (3) We can leverage map to do this

# 1. 
# prince_appt = Appointment.all.select do |appt|
#   I want to check if the appointment
#   matches to having a doctor that is prince
#   #<Doctor:....> == #<Doctor:....>
#  appt.doctor == prince
# end

# 2. You can do it by hand this way or use... map!
# prince_patient = []
# prince_appt.each do |appt|
  # 3. 
  # prince_patient << appt.patient
# end

# prince.appointments.map do |appt|
# appt.patient
# end

binding.pry
0
# leave that 0 in there. It is to make sure that binding.pry isn't the last line
# in a file
