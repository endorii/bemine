import { Resolver } from "@nestjs/graphql";
import { SectionService } from "./section.service";

@Resolver()
export class SectionResolver {
    constructor(private readonly sectionService: SectionService) {}

    // @Mutation(() => Section)
    // createSection(@Args('createSectionInput') createSectionInput: CreateSectionInput) {
    //   return this.sectionService.create(createSectionInput);
    // }

    // @Query(() => [Section], { name: 'section' })
    // findAll() {
    //   return this.sectionService.findAll();
    // }
}
