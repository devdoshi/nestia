import {
  INestApplication,
  RouteInfo,
  VersionValue,
} from "@nestjs/common/interfaces";

export interface INestiaSdkInput {
  application: INestApplication;
  controllers: INestiaSdkInput.IController[];
  globalPrefix?: {
    prefix: string;
    exclude?: Array<string | RouteInfo>;
  };
  versioning?: {
    prefix: string;
    defaultVersion?: VersionValue;
  };
}
export namespace INestiaSdkInput {
  export interface IController {
    class: Function;
    location: string;
    prefixes: string[];
  }
}
