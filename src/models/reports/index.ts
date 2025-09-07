import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@/db";
import type { TReport } from "./types";

interface ReportCreationAttributes extends Optional<TReport, "id"> {}

class Report
  extends Model<TReport, ReportCreationAttributes>
  implements TReport
{
  declare id: string;
  declare user_id: string;
  declare listing_id: string;
  declare reason: string;
  declare status: string;
  declare message: string;
}

Report.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: { type: DataTypes.UUID, allowNull: false },
    listing_id: { type: DataTypes.UUID, allowNull: false },
    reason: { type: DataTypes.STRING, allowNull: true },
    status: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.STRING, allowNull: true },
  },
  { sequelize, modelName: "Report" }
);

export default Report;
