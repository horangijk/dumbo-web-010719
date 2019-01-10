# Lecture: One-To-Many Relationship

## Agenda
* Review OO Concepts
* Definitions: Model, Domain, and Relationships
* Build User and Tweet classes
* Understand Single Source of Truth
* Pair Exercise

## Deliverables
* Create a User class. The class should have these methods:
  * `#initialize` which takes a username as an argument
  * `User#username` that returns a username as a string
  * `User#tweets` that returns an array of Tweet instances that belong to an individual user
  * `User#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection

* Create a Tweet class. The class should have these methods:
  * `#initialize` which takes a message and a user as an argument
  * `Tweet#message` that returns a message as a string
  * `Tweet#user` that returns an instance of the User class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
