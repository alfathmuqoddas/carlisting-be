// associations.ts (or wherever you define relations)
import User from "./users";
import CarMaker from "./carMakers";
import CarModel from "./carModels";
import CarListing from "./carListings";
import ListingImage from "./listingImages";
import Favorite from "./favorites";
import Report from "./reports";

CarMaker.hasMany(CarModel, { foreignKey: "maker_id", as: "models" });
CarModel.belongsTo(CarMaker, { foreignKey: "maker_id", as: "maker" });

CarMaker.hasMany(CarListing, { foreignKey: "maker_id", as: "listings" });
CarListing.belongsTo(CarMaker, { foreignKey: "maker_id", as: "maker" });

CarModel.hasMany(CarListing, { foreignKey: "model_id", as: "listings" });
CarListing.belongsTo(CarModel, { foreignKey: "model_id", as: "model" });

User.hasMany(CarListing, { foreignKey: "user_id", as: "listings" });
CarListing.belongsTo(User, { foreignKey: "user_id", as: "user" });

CarListing.hasMany(ListingImage, { foreignKey: "listing_id", as: "images" });
ListingImage.belongsTo(CarListing, { foreignKey: "listing_id", as: "listing" });

User.hasMany(Favorite, { foreignKey: "user_id", as: "favorites" });
Favorite.belongsTo(User, { foreignKey: "user_id", as: "user" });

CarListing.hasMany(Favorite, { foreignKey: "listing_id", as: "favoritedBy" });
Favorite.belongsTo(CarListing, { foreignKey: "listing_id", as: "listing" });

User.hasMany(Report, { foreignKey: "user_id", as: "reports" });
Report.belongsTo(User, { foreignKey: "user_id", as: "reporter" });

CarListing.hasMany(Report, { foreignKey: "listing_id", as: "reports" });
Report.belongsTo(CarListing, { foreignKey: "listing_id", as: "listing" });

export { User, CarMaker, CarModel, CarListing, ListingImage, Favorite, Report };
