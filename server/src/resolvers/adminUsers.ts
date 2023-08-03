import {
  Arg,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

import { AdminUser, Role } from "../entities/Admin";
import { Users } from "../entities/Users";
import { conn } from "../dataSource";
import GraphQLJSON from "graphql-type-json";
import { GraphQLString } from "graphql";
@ObjectType()
class TableData {
  @Field(() => [String])
  columnNames: string[];

  @Field(() => GraphQLJSON)
  data: any;
}

@Resolver()
export class AdminResolver {
  @Query(() => [AdminUser])
  getAdminUsers(): Promise<AdminUser[]> {
    return AdminUser.find();
  }

  @Query(() => [AdminUser])
  async getAdminsAndModerators(): Promise<AdminUser[]> {
    return AdminUser.find({
      where: [{ role: Role.ADMIN }, { role: Role.MODERATOR }],
    });
  }

  @Mutation(() => AdminUser)
  async setAdmin(
    @Arg("userId", () => String) userId: string,
    @Arg("role", () => Role) role: Role
  ): Promise<AdminUser> {
    // Find the user with the given ID
    const user = await Users.findOneOrFail({ where: { id: userId } });

    // Create or update the admin record
    let admin = await AdminUser.findOne({ where: { userId } });
    if (!admin) {
      admin = new AdminUser();
      admin.userId = userId;
    }
    admin.role = role;
    admin.user = user;

    // Save the admin record
    await admin.save();

    return admin;
  }

  @Query(() => TableData)
  async getTableData(
    @Arg("tableName") tableName: string,
    @Arg("page", () => Int, { defaultValue: 1 }) page: number
  ): Promise<TableData> {
    const entityManager = conn.createEntityManager();
    const limit = 10;
    const offset = (page - 1) * limit;

    // Run a raw SQL query to get the paginated data from the table
    const data = await entityManager.query(
      `SELECT * FROM ${tableName} OFFSET ${offset} LIMIT ${limit}`
    );

    // Run a raw SQL query to get the ordered column names from the table
    const columns = await entityManager.query(
      `SELECT column_name
     FROM information_schema.columns
     WHERE table_name = $1
     ORDER BY ordinal_position`,
      [tableName]
    );

    const columnNames = columns.map((column: any) => column.column_name);

    return { columnNames, data: JSON.stringify(data) };
  }

  // TODO: Perform Admin Checks before updating.
  @Mutation(() => Boolean)
  async executeSql(
    @Arg("sql") sql: string,
    @Arg("params", () => [GraphQLString], { nullable: true }) _params: string[]
  ): Promise<boolean> {
    const entityManager = conn.createEntityManager();

    // Parse the sql statement
    const parsedSql = sql.match(/UPDATE "(.+)" SET (.+) WHERE (.+)/);
    if (!parsedSql) throw new Error("Invalid SQL statement");

    const tableName = parsedSql[1];
    const whereCondition = parsedSql[3];

    // Parse the SET part of the SQL statement
    const setStatements = parsedSql[2].split(",").map((s) => s.trim());
    const fieldsToUpdate: Record<string, any> = {};
    setStatements.forEach((statement) => {
      const parsedStatement = statement.match(/"(.+)" = '(.+)'/);
      if (parsedStatement) {
        const key = parsedStatement[1];
        const value = parsedStatement[2];
        // Exclude updatedAt, createdAt, deletedAt
        if (["updatedAt", "createdAt", "deletedAt"].includes(key)) return;
        fieldsToUpdate[key] = value;
      }
    });

    // Perform the update operation
    await entityManager
      .createQueryBuilder()
      .update(tableName)
      .set({ ...fieldsToUpdate, updatedAt: new Date() }) // update updatedAt to current time
      .where(whereCondition)
      .execute();

    return true;
  }

  @Mutation(() => Boolean)
  async insertRow(
    @Arg("sql") sql: string,
    @Arg("params", () => [GraphQLString], { nullable: true }) _params: string[]
  ): Promise<boolean> {
    const entityManager = conn.createEntityManager();
    // Parse the sql statement
    const parsedSql = sql.match(/INSERT INTO "(.+)" \((.+)\) VALUES \((.+)\)/);
    if (!parsedSql) throw new Error("Invalid SQL statement");

    const tableName = parsedSql[1];
    const columns = parsedSql[2]
      .split(",")
      .map((column) => column.replace(/"/g, "").trim());
    const values = parsedSql[3]
      .split(",")
      .map((value) => value.replace(/'/g, "").trim());

    // Construct the data for insertion
    let data: Record<string, any> = {};
    columns.forEach((column, index) => {
      data[column] = values[index];
    });
    // Perform the insert operation
    await entityManager
      .createQueryBuilder()
      .insert()
      .into(tableName)
      .values(data)
      .execute();

    return true;
  }
}
