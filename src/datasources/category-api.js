const { RESTDataSource } =  require('apollo-datasource-rest');

class CATAPI extends RESTDataSource{
   constructor(){
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/'
   }
  
   getTracksForHome(){
     return this.get('tracks')
   }
   getTrack(trackId){
    return this.get(`track/${trackId}`)
   }
  //  getCategoriesForHome(){
  //    return this.get('tracks')
  //  }

   getAuthorId(authorId){
     return this.get(`author/${encodeURIComponent(authorId)}`)
   }
   getTrackMod(trackId){
     return this.get(`/track/${trackId}/modules`)
   }
   incrementTrackViews(trackId){
     return this.patch(`/track/${trackId}/numberOfViews`)
   }
}

module.exports = CATAPI; 