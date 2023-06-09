const resolvers = {

Query:{

    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    //(parent,args,contextValue,info) == (_,__,...). since we dont need parents and args, it is replaced by "_"
    tracksForHome: (_, __, {dataSources} )=>{
        return dataSources.trackAPI.getTracksForHome();
    }
},

Track:{
    author:({authorId},_,{dataSources}) =>{
        //console.log(authorId);
        return dataSources.trackAPI.getAuthor(authorId);
        
    }

}

}

module.export = resolvers;