import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../db";
import type { TCarListing } from "./types";

interface ListingCreationAttributes extends Optional<TCarListing, "id"> {}

class CarListing
  extends Model<TCarListing, ListingCreationAttributes>
  implements TCarListing
{
  declare id: string;
  declare maker_id: string;
  declare model_id: string;
  declare year: number;
  declare mileage: number;
  declare price: number;
  declare condition: string;
  declare transmission: string;
  declare fuel_type: string;
  declare body_type: string;
  declare color: string;
  declare description: string;
  declare location: string;
  declare status: string;
}

CarListing.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    maker_id: { type: DataTypes.UUID, allowNull: false },
    model_id: { type: DataTypes.UUID, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    mileage: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    condition: { type: DataTypes.STRING, allowNull: false },
    transmission: { type: DataTypes.STRING, allowNull: false },
    fuel_type: { type: DataTypes.STRING, allowNull: false },
    body_type: { type: DataTypes.STRING, allowNull: false },
    color: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "CarListing" }
);

export default CarListing;
