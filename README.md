
## What is sharding in mongoDB?

Sharding is a mechanism for horizontally partitioning large datasets across multiple servers in MongoDB. It allows MongoDB to scale horizontally by distributing data across multiple machines.

---
## What are the different components required to implement sharding?
The different components required to implement sharding are:

* Shard: Each shard is a separate MongoDB instance that stores a subset of the data.
* Config servers: These servers keep track of the metadata and configuration for the sharded cluster.
* Query router: Also known as the mongos process, it acts as an interface between the application and the sharded cluster. It routes queries to the appropriate shards and aggregates the results.

---
## Explain architecture of sharding in mongoDB?
The architecture of sharding in MongoDB consists of three main components:

* Shards: Each shard contains a subset of the data, and can be either a replica set or a standalone MongoDB instance.
* Config servers: Config servers store the metadata and configuration for the sharded cluster.
* Query router: Query router (mongos) routes the queries from the application to the appropriate shards, and returns the results.

---
## Provide implementation of map and reduce function

```Javascript
db.myCollection.mapReduce(
   function() {
      // map function
      emit(this.field1, this.field2);
   },
   function(key, values) {
      // reduce function
      return Array.sum(values);
   },
   {
      // options
      out: { sort: -1 }
   }
)
```

---
## Provide execution command for running MapReduce or the aggregate way of doing the same

```Javascript
db.collection.aggregate([
  { $match: { text: /#[^\s]+/ } }, // filter only tweets with hashtags

  { $unwind: "$entities.hashtags" }, // unwind the array of hashtags

  { $group: { _id: "$entities.hashtags.text", count: { $sum: 1 } } }, // group by hashtag text and count occurrences

  { $sort: { count: -1 } }, // sort by count descending

  { $limit: 10 } // limit to the top 10 hashtags
]);
```
---
## Provide top 10 recorded out of the sorted result. (hint: use sort on the result returned by MapReduce or the aggregate way of doing the same)


The top 10 hastags are:

```JSON
 "top10Agg": [
    {
      "_id": "FCBLive",
      "count": 27
    },
    {
      "_id": "AngularJS",
      "count": 21
    },
    {
      "_id": "nodejs",
      "count": 20
    },
    {
      "_id": "LFC",
      "count": 19
    },
    {
      "_id": "EspanyolFCB",
      "count": 18
    },
    {
      "_id": "webinar",
      "count": 16
    },
    {
      "_id": "IWCI",
      "count": 15
    },
    {
      "_id": "javascript",
      "count": 14
    },
    {
      "_id": "RedBizUK",
      "count": 12
    },
    {
      "_id": "GlobalMoms",
      "count": 12
    }
  ]
```



