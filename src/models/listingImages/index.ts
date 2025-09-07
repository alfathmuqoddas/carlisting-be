import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../db";
import type { TListingImage } from "./types";

interface ImageCreationAttributes extends Optional<TListingImage, "id"> {}

class ListingImage
  extends Model<TListingImage, ImageCreationAttributes>
  implements TListingImage
{
  declare id: string;
  declare listing_id: string;
  declare image_url: string;
  declare position: number;
}

ListingImage.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    listing_id: { type: DataTypes.UUID, allowNull: false },
    image_url: { type: DataTypes.STRING, allowNull: false },
    position: { type: DataTypes.INTEGER, allowNull: true },
  },
  { sequelize, modelName: "ListingImage" }
);

export default ListingImage;
