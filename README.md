## VOCO APP

# Problem1

Veri tasarımı yapıldı ve oluşturulan schema'lara database dosyası içinden ulaşabilirsiniz.

# Problem2
Uzaklık hesabı için geoNear kullanıldı. Spherical olarak hesaplandı.
```bash
Mongo.restaurants.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [39.93, 32.85] },
      distanceField: "distance",
      spherical: true,
      query: { description: { $regex: ".*lahmacun.*", $options: "i" } },
      num: 5
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      description: 1,
      location: 1,
      distance: { $round: ["$distance", 2] }
    }
  }
])
```

# Problem3
```bash
const session = Mongo.startSession();

session.startTransaction();

try {
    const restaurant = Mongo.restaurants.findOne({ name: "Voco Fast Food" });

    const newMenus = [
        {
            name: "Küçük boy peynirli pizza",
            price: 50,
            coverPicture: "cheese_pizza.jpg"
        },
        {
            name: "Orta boy mantarlı pizza",
            price: 100,
            coverPicture: "mushroom_pizza.jpg"
        },
        {
            name: "Hamburger",
            price: 120,
            coverPicture: "hamburger.jpg"
        }
    ];

    Mongo.restaurants.updateOne(
        { _id: restaurant._id },
        { $push: { menus: { $each: newMenus } } }
    );

    session.commitTransaction();
    session.endSession();
    
    print("New menus added successfully.");
} catch (error) {
    print("An error occurred, rolling back the transaction:", error);
    session.abortTransaction();
    session.endSession();
}
```

# Problem4
```bash
Mongo.comments.aggregate([
    { $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user"
    }},
    { $unwind: "$user" },
    { $match: { "user.gender": "erkek" } },
    { $sort: { date: -1 } },
    { $group: {
        _id: "$user_id",
        age: { $first: "$user.age" },
        username: { $first: "$user.username" }
    }},
    { $sort: { age: 1 } },
    { $limit: 20 }
]);
```

# Problem5
```bash
Mongo.restaurants.find({
    $and: [
        {
            $or: [
                { types: "fast food" },
                { types: "home cooking" },
                { description: /fast/i }
            ]
        },
        { "rating.average": { $gte: 4 } }
    ]
},
{
    _id: 0,
    name: 1,
    types: 1,
    description: 1
})
```

# Problem6
npm start komutu ile uygulamayı başlatabilirsiniz.
