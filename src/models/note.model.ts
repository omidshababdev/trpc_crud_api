// "strictPropertyInitialization": false,
// experimentalDecorators": true,
import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Note {
  @prop({ type: String })
  title: string;

  @prop({ type: String })
  description: string;

  @prop({ type: Boolean })
  done: boolean;
}

export default getModelForClass(Note);
