import { ObjectId } from "mongodb";

export type GridFSFile = {
  _id: ObjectId;
  length: number;
  chunkSize: number;
  uploadDate: Date;
  filename: string;
  contentType: string;
};
