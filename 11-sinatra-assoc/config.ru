require_relative './config/environment'

# Middleware -> Making sure everything is connected


# When I add a new controller, I want to "use" it
use FilmsController
use DirectorsController

# Only run the application controller
run ApplicationController


# Films, Directors, Audience
