const Restaurant = require('./Restaurant');

const addNewRestaurant = async (data) => {
    const restaurant = new Restaurant(data);
    return restaurant.save();
};

const getAllRestaurants = async (page, perPage, borough) => {
    const query = borough ? { borough } : {};
    return Restaurant.find(query)
        .sort({ restaurant_id: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);
};

const getRestaurantById = async (id) => {
    return Restaurant.findById(id);
};

const updateRestaurantById = async (id, data) => {
    return Restaurant.findByIdAndUpdate(id, data, { new: true });
};

const deleteRestaurantById = async (id) => {
    return Restaurant.findByIdAndDelete(id);
};

const getRestaurantsByCuisine = async (cuisine) => {
    return Restaurant.find({ cuisine: { $regex: cuisine, $options: 'i' } });
};

module.exports = {
    addNewRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurantById,
    deleteRestaurantById,
    getRestaurantsByCuisine,
};
