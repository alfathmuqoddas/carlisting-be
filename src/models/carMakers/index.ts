import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../db";
import type { TCarMaker } from "./types";

interface MakeCreationAttributes extends Optional<TCarMaker, "id"> {}

class CarMaker
  extends Model<TCarMaker, MakeCreationAttributes>
  implements TCarMaker
{
  declare id: string;
  declare name: string;
  declare description: string;
}

CarMaker.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
  },
  { sequelize, modelName: "CarMaker" }
);
