class Album
  include DataMapper::Resource
  property :id,   Serial
  property :name, String, :length => 0..50
  property :genre_id,  Integer
  property :artist_id,  Integer

  has n, :tracks
  belongs_to :genre
  belongs_to :artist

  def catalogue
    {
      :text => self.name,
      :leaf => true,
      :items => self.tracks.map { |track| track.catalogue }
    }
  end

  def self.create_from_dump(data)
    # debugger
    data = OpenStruct.new data
    artist = Artist.first_or_create(:name => data.artist)
    genre = Genre.first_or_create(:name => data.genre)
    album = self.create(
      :name => data.name, 
      :artist_id => artist.id,
      :genre_id => genre.id
    )
    data.tracks ||= []
    data.tracks.each_with_index do |track, index|
      album.tracks.create(:name => track, :position => index)
    end
  end
end