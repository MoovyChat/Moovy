import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { conn } from "../dataSource";
import { Version } from "../entities/Version";

@Resolver()
export class VersionResolver {
  @Query(() => Version, { nullable: true })
  async getVersionNumber(): Promise<Version | null> {
    const entityManager = conn.createEntityManager();
    const latestVersion = await entityManager
      .getRepository(Version)
      .createQueryBuilder("version")
      .orderBy("version.createdAt", "DESC")
      .getOne();

    return latestVersion;
  }

  @Query(() => [Version])
  getAllVersions(): Promise<Version[]> {
    return Version.find();
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
