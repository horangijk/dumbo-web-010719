class SongsController < ApplicationController

  get '/songs' do
    @songs = Song.all
    erb :'/songs/index'
  end

  get '/songs/new' do
    @genres = Genre.all
    erb :'/songs/new'
  end

  post '/songs' do
    song = Song.new
    song.name = params[:song][:name]
    song.artist = Artist.find_or_create_by(name: params[:artist][:name])

    binding.pry
    params[:genre_ids].each do |genre_id|
      song.genres << Genre.find(genre_id)
    end

    # song.genre_ids = song.genre_ids.concat(params[:genre_ids])
    song.save

    redirect to("/songs/#{song.slug}")
  end

  get '/songs/:slug' do
    @song = Song.find_by_slug(params[:slug])

    erb :'/songs/show'
  end


end
