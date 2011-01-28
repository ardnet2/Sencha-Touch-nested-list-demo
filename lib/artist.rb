class Artist
  include DataMapper::Resource
  include CatalogueItem

  property :id,   Serial
  property :name, String, :length => 0..50
  
  has n, :albums
  has n, :genres, :through => :albums

  def items(options={})
    if genre = options[:genre]
      albums = self.albums(:genre => genre)
    else
      albums = self.albums
    end
    albums.map { |album| album.catalogue(options) }
  end
end
