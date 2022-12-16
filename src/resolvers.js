const resolvers = {

   Query : {
    tracksForHome:(_, __, { dataSources })=>{
        return dataSources.catApi.getTracksForHome();
    },
    track:(_,{id},{dataSources}) => {
        return dataSources.catApi.getTrack(id);    
     }
   },

   Mutation:{
      incrementTrackView : async(_,{id},{ dataSources })=>{
         
         try{
            const track = await dataSources.catApi.incrementTrackViews(id);
         return {
            code:200,
            success:true,
            message:`Successfully incremented number of views for track ${id}`,
            track
         }
         }catch(errors){
            console.log('errors',errors)
            return{
            code : errors.extensions.response.status,
            success : false,
            message : errors.extensions.response.body,
            track : null
         }
      }
      }
   },

   Track:{
     author:({authorId},_,{dataSources})=>{
        return dataSources.catApi.getAuthorId(authorId);
     },
     mod:({id},_,{dataSources})=>{
      return dataSources.catApi.getTrackMod(id);
     },
   }
   

   
}

module.exports = resolvers;