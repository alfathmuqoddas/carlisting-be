import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@/db";
import type { TUser } from "./types";

interface UserCreationAttributes extends Optional<TUser, "id"> {}

class User extends Model<TUser, UserCreationAttributes> implements TUser {
  declare id: string;
  declare email: string;
  declare password_hash: string;
  declare full_name: string;
  declare phone: string;
  declare location: string;
  declare is_verified: boolean;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    full_name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: true },
    location: { type: DataTypes.STRING, allowNull: true },
    is_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  { sequelize, modelName: "User" }
);

export default User;
