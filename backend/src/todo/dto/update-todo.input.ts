import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field()
  id: string;

  @Field()
  todo: string;
}
