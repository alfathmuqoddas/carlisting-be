import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../db";
import type { TFavorite } from "./types";

interface FavoriteCreationAttributes extends Optional<TFavorite, "id"> {}

class Favorite
  extends Model<TFavorite, FavoriteCreationAttributes>
  implements TFavorite
{
  declare id: string;
  declare user_id: string;
  declare listing_id: string;
}

Favorite.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: { type: DataTypes.UUID, allowNull: false },
    listing_id: { type: DataTypes.UUID, allowNull: false },
  },
  { sequelize, modelName: "Favorite" }
);

export default Favorite;
