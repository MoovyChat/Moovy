import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { conn } from "../dataSource";
import { Version } from "../entities/Version";

@Resolver()
export class VersionResolver {
  @Query(() => String)
  async getVersionNumber(): Promise<string> {
    const entityManager = conn.createEntityManager();
    const latestVersion = await entityManager
      .getRepository(Version)
      .createQueryBuilder("version")
      .orderBy("version.createdAt", "DESC")
      .getOne();

    return latestVersion ? latestVersion.version : "No version found";
  }

  @Mutation(() => String, { nullable: true })
  async updateVersionNumber(
    @Arg("newVersion", () => String) newVersion: string
  ): Promise<string> {
    const entityManager = conn.createEntityManager();
    const version = new Version();
    version.version = newVersion;
    await entityManager.save(version);

    return version.version;
  }
}
