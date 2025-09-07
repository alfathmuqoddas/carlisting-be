import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../db";
import type { TCarModel } from "./types";

interface ModelCreationAttributes extends Optional<TCarModel, "id"> {}

class CarModel
  extends Model<TCarModel, ModelCreationAttributes>
  implements TCarModel
{
  declare id: string;
  declare make_id: string;
  declare name: string;
  declare description: string;
}

CarModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    maker_id: { type: DataTypes.UUID, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
  },
  { sequelize, modelName: "CarModel" }
);
