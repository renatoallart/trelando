import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field()
  id: string;

  @Field()
  todo: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
